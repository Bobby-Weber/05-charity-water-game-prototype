// Get the main game pieces from the page.
const world = document.getElementById('world');
const worldContents = document.getElementById('worldContents');
const gameArea = document.getElementById('gameArea');
const wellTool = document.getElementById('wellTool');
const carvingLayer = document.getElementById('carvingLayer');
const carvingPreview = document.getElementById('carvingPreview');
const carvingWorldGroup = document.getElementById('carvingWorldGroup');
const carvingPreviewGroup = document.getElementById('carvingPreviewGroup');
const wellCountDisplay = document.getElementById('wellCount');
const restartButton = document.getElementById('restartButton');
const scoreDisplay = document.getElementById('scoreCount');
const winModal = document.getElementById("winModal");

// Track the current rotation and drag state.
let rotation = 0;
let isDragging = false;
let lastAngle = 0;
let activePointerId = null;
let isCarving = false;
let activeCarvingPointerId = null;
let carvingPoints = [];
let wellCount = 2;
let score = 0;

// Unique ID tracker to pair wells with completed paths
let wellIdCounter = 0;

// Keep angles in a useful range so rotation never gets messy.
function normalizeAngle(angle) {
  return ((angle % 360) + 360) % 360;
}

// Rotate the world contents and the saved carving paths together.
function updateRotation(newRotation) {
  rotation = normalizeAngle(newRotation);
  worldContents.style.transform = `rotate(${rotation}deg)`;

  const centerX = world.clientWidth / 2;
  const centerY = world.clientHeight / 2;
  carvingWorldGroup.setAttribute('transform', `rotate(${rotation} ${centerX} ${centerY})`);
}

// Add a little more rotation to the current angle.
function rotateBy(amount) {
  updateRotation(rotation + amount);
}

// Work out the pointer angle around the center of the world.
function getAngle(event) {
  const rect = world.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const dx = event.clientX - centerX;
  const dy = event.clientY - centerY;

  return Math.atan2(dy, dx) * 180 / Math.PI;
}

// Start rotating the world when the player drags with the left mouse button.
function startDragging(event) {
  if (event.button !== 0 || event.target.closest('.well-tool')) {
    return;
  }

  isDragging = true;
  activePointerId = event.pointerId;
  lastAngle = getAngle(event);
  event.preventDefault();
}

// Keep rotating while the pointer is moving.
function handleDragging(event) {
  if (!isDragging || event.pointerId !== activePointerId) {
    return;
  }

  const currentAngle = getAngle(event);
  const deltaAngle = ((currentAngle - lastAngle + 540) % 360) - 180;
  lastAngle = currentAngle;
  rotateBy(deltaAngle);
  event.preventDefault();
}

// Stop the world rotation when the pointer is released.
function stopDragging(event) {
  if (!isDragging || (activePointerId !== null && event.pointerId !== activePointerId)) {
    return;
  }

  isDragging = false;
  activePointerId = null;
}

// Keep the carving line inside the world circle.
function clampPoint(point) {
  const centerX = 230;
  const centerY = 230;
  const dx = point.x - centerX;
  const dy = point.y - centerY;
  const distance = Math.hypot(dx, dy);
  const limit = 220;

  if (distance > limit) {
    const scale = limit / distance;
    return {
      x: centerX + dx * scale,
      y: centerY + dy * scale
    };
  }

  return point;
}

function getSvgPointFromClient(clientX, clientY) {
  const svgPoint = carvingLayer.createSVGPoint();
  svgPoint.x = clientX;
  svgPoint.y = clientY;

  const screenToSvg = carvingLayer.getScreenCTM();
  if (!screenToSvg) {
    return { x: clientX, y: clientY };
  }

  const mappedPoint = svgPoint.matrixTransform(screenToSvg.inverse());
  return clampPoint({ x: mappedPoint.x, y: mappedPoint.y });
}

// Convert a mouse event into a point inside the SVG overlay.
function getPointFromEvent(event) {
  return getSvgPointFromClient(event.clientX, event.clientY);
}

// Find the center of an element relative to the SVG overlay.
function getElementCenterPoint(element) {
  const rect = element.getBoundingClientRect();
  return getSvgPointFromClient(rect.left + rect.width / 2, rect.top + rect.height / 2);
}

// Rotate a point around the center of the world.
function rotatePoint(point, angleDegrees) {
  const centerX = world.clientWidth / 2;
  const centerY = world.clientHeight / 2;
  const radians = angleDegrees * Math.PI / 180;
  const dx = point.x - centerX;
  const dy = point.y - centerY;

  return {
    x: centerX + dx * Math.cos(radians) - dy * Math.sin(radians),
    y: centerY + dx * Math.sin(radians) + dy * Math.cos(radians)
  };
}

// Convert a point back into the world’s own local space.
function toWorldLocalPoint(point) {
  return rotatePoint(point, -rotation);
}

// Turn a list of points into SVG path data.
function buildPathData(points) {
  if (points.length === 0) {
    return '';
  }

  return points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(' ');
}

// Start a new carving path from a water deposit using the right mouse button.
function beginCarving(event) {
  if (event.button !== 2) {
    return;
  }

  const startDeposit = event.target.closest('.deposit');
  if (!startDeposit) {
    return;
  }

  isCarving = true;
  activeCarvingPointerId = event.pointerId;
  carvingPoints = [getElementCenterPoint(startDeposit)];
  carvingPreview.setAttribute('d', buildPathData(carvingPoints));
  event.preventDefault();
  event.stopPropagation();
}

// Helper to translate rock style custom properties into precise 460x460 local SVG canvas coordinates
function getObstacleLocalPos(element) {
  const angleStr = element.style.getPropertyValue('--angle') || '0deg';
  const angleDegrees = parseFloat(angleStr);
  const angleRadians = angleDegrees * Math.PI / 180;

  const centerX = 230;
  const centerY = 230;

  const distanceStr = element.style.getPropertyValue('--distance') || '';
  let distance = 460 * 0.22; // default fallback

  const match = distanceStr.match(/0\.\d+/);
  if (match) {
    distance = 460 * parseFloat(match[0]);
  }

  return {
    x: centerX + distance * Math.cos(angleRadians),
    y: centerY + distance * Math.sin(angleRadians)
  };
}

// Keep updating the preview path while the pointer moves, canceling if hitting an obstacle rock.
function updateCarving(event) {
  if (!isCarving || event.pointerId !== activeCarvingPointerId) {
    return;
  }

  const point = getPointFromEvent(event);
  const lastPoint = carvingPoints[carvingPoints.length - 1];

  // Convert current screen point to local world space coordinates
  const localPoint = toWorldLocalPoint(point);

  // Check collision against all rock obstacles
  const obstacles = document.querySelectorAll('.obstacle');
  const localCollisionRadius = 22;

  let hitObstacle = false;
  for (const obs of obstacles) {
    const obsPos = getObstacleLocalPos(obs);
    const distance = Math.hypot(localPoint.x - obsPos.x, localPoint.y - obsPos.y);

    if (distance < localCollisionRadius) {
      hitObstacle = true;
      break;
    }
  }

  // Instantly cancel and clean up drawing state if a rock obstacle is struck
  if (hitObstacle) {
    isCarving = false;
    activeCarvingPointerId = null;
    carvingPoints = [];
    carvingPreview.setAttribute('d', '');
    event.preventDefault();
    return;
  }

  if (Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y) > 2) {
    carvingPoints.push(point);
  }

  carvingPreview.setAttribute('d', buildPathData(carvingPoints));
  event.preventDefault();
}

function calculatePathLength(points) {
  let length = 0;

  for (let i = 1; i < points.length; i++) {
    length += Math.hypot(
      points[i].x - points[i - 1].x,
      points[i].y - points[i - 1].y
    );
  }

  return length;
}

// Helper to get local X/Y coordinates of an object based on its inline positioning styles
function getLocalCoordinates(element) {
  const angleStr = element.style.getPropertyValue('--angle') || '0deg';
  const angleDegrees = parseFloat(angleStr);
  const angleRadians = angleDegrees * Math.PI / 180;

  const worldSize = parseFloat(getComputedStyle(world).width) || 460;
  const centerX = worldSize / 2;
  const centerY = worldSize / 2;

  // Handle calc() structures if present in CSS variables
  let distance = worldSize * 0.554;
  const distanceStr = element.style.getPropertyValue('--distance');
  if (distanceStr && !distanceStr.includes('calc')) {
    distance = parseFloat(distanceStr);
  } else if (distanceStr && distanceStr.includes('0.272')) {
    distance = worldSize * 0.272;
  }

  return {
    x: centerX + distance * Math.cos(angleRadians),
    y: centerY + distance * Math.sin(angleRadians)
  };
}

function checkForWin() {
  const wells = document.querySelectorAll(".well");
  const villages = document.querySelectorAll(".village-outside");
  const paths = carvingWorldGroup.querySelectorAll("path");

  // 1. All wells must be placed.
  if (wellCount > 0) return;

  // 2. Check if every placed well is connected to a water path.
  for (const well of wells) {
    const wellId = well.dataset.id;
    let wellIsConnected = false;

    for (const path of paths) {
      if (path.dataset.connectedWellId === wellId) {
        wellIsConnected = true;
        break;
      }
    }

    if (!wellIsConnected) {
      console.log(`Well ${wellId} is not connected to a water deposit yet.`);
      return;
    }
  }

  // 3. Polar coordinate distance matching for clean coverage checks.
  const RANGE_RADIUS = world.clientWidth * 0.36;

  for (const village of villages) {
    const villagePos = getLocalCoordinates(village);
    let covered = false;

    for (const well of wells) {
      const wellPos = getLocalCoordinates(well);
      const distance = Math.hypot(villagePos.x - wellPos.x, villagePos.y - wellPos.y);

      if (distance <= RANGE_RADIUS) {
        covered = true;
      }
    }

    if (!covered) {
      console.log("Village not covered:", village);
      return;
    }
  }

  console.log("Congratulations!");
  winModal.classList.add("show");
  triggerConfetti();
}

// Finish the carving path and save it if it reaches a well.
function finishCarving(event) {
  if (!isCarving || event.pointerId !== activeCarvingPointerId) {
    return;
  }

  const point = getPointFromEvent(event);
  const lastPoint = carvingPoints[carvingPoints.length - 1] || point;
  const hitElements = document.elementsFromPoint(event.clientX, event.clientY);
  let endWell = hitElements.map((element) => element.closest('.well')).find(Boolean);

  if (!endWell) {
    const wells = Array.from(document.querySelectorAll('.well'));
    for (const well of wells) {
      const wellCenter = getElementCenterPoint(well);
      if (Math.hypot(point.x - wellCenter.x, point.y - wellCenter.y) < 36 || Math.hypot(lastPoint.x - wellCenter.x, lastPoint.y - wellCenter.y) < 36) {
        endWell = well;
        break;
      }
    }
  }

  if (endWell) {
    const endPoint = getElementCenterPoint(endWell);
    const finishedPoints = [...carvingPoints, endPoint];
    score += calculatePathLength(finishedPoints);
    updateScoreDisplay();

    const finishedPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    finishedPath.setAttribute('class', 'carving-path');

    // Tag the path with the matching well ID so checkForWin knows it's connected
    finishedPath.dataset.connectedWellId = endWell.dataset.id;

    const localPoints = finishedPoints.map(toWorldLocalPoint);
    finishedPath.setAttribute('d', buildPathData(localPoints));
    carvingWorldGroup.appendChild(finishedPath);

    checkForWin();
  }

  isCarving = false;
  activeCarvingPointerId = null;
  carvingPoints = [];
  carvingPreview.setAttribute('d', '');
}

// Update the visual tracker text
function updateWellCountDisplay() {
  wellCountDisplay.textContent = `Wells: ${wellCount}`;
}

function updateScoreDisplay() {
  scoreDisplay.textContent = `Score: ${Math.round(score)}`;
}

// Place a well at the current top of the rotated world.
function placeWell() {
  if (wellCount <= 0) {
    return;
  }

  const pointAngle = normalizeAngle(-90 - rotation);
  const worldSize = parseFloat(getComputedStyle(world).width) || 460;
  const radius = worldSize / 2 - Math.max(8, worldSize * 0.03);
  // const wellDistance = radius - Math.max(6, worldSize * 0.015);
  // const rangeDistance = radius - 4;
  const wellDistance = worldSize * 0.55;
  const rangeDistance = worldSize * 0.48;

  const well = document.createElement('img');
  well.src = "img/Well.png";
  well.className = 'well';

  // Assign a tracking ID to the unique well
  well.dataset.id = `well-${wellIdCounter++}`;

  well.style.setProperty('--angle', `${pointAngle}deg`);
  well.style.setProperty('--distance', `${wellDistance}px`);
  well.style.setProperty('--rotation', `${normalizeAngle(pointAngle + 90)}deg`);

  const range = document.createElement('div');
  range.className = 'well-range';
  range.style.setProperty('--angle', `${pointAngle}deg`);
  range.style.setProperty('--distance', `${rangeDistance}px`);
  range.style.setProperty('--rotation', `${normalizeAngle(pointAngle + 90)}deg`);

  worldContents.appendChild(range);
  worldContents.appendChild(well);

  wellCount -= 1;
  updateWellCountDisplay();
  updateScoreDisplay();
  wellTool.disabled = wellCount <= 0;

  checkForWin();
}

// Connect the mouse and keyboard events to the game logic.
gameArea.addEventListener('pointerdown', startDragging);
world.addEventListener('pointerdown', beginCarving);
window.addEventListener('pointermove', handleDragging);
window.addEventListener('pointermove', updateCarving);
window.addEventListener('pointerup', stopDragging);
window.addEventListener('pointerup', finishCarving);
window.addEventListener('pointercancel', stopDragging);
window.addEventListener('pointercancel', finishCarving);
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

updateWellCountDisplay();

wellTool.addEventListener('click', (event) => {
  event.preventDefault();
  placeWell();
});

// Use the arrow keys to rotate the world for testing and play.
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    rotateBy(8);
    event.preventDefault();
  }

  if (event.key === 'ArrowLeft') {
    rotateBy(-8);
    event.preventDefault();
  }
});

restartButton.addEventListener('click', () => {
  location.reload();
});

function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const colors = ['#FFC907', '#2E9DF7'];
  const particles = Array.from({ length: 120 }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height - height,
    r: Math.random() * 6 + 4,
    d: Math.random() * height,
    color: colors[Math.floor(Math.random() * colors.length)],
    tilt: Math.random() * 10 - 5,
    tiltAngleIncremental: Math.random() * 0.07 + 0.02,
    tiltAngle: 0
  }));

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, idx) => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.x += Math.sin(p.tiltAngle);
      p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;

      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();
    });

    if (particles.some(p => p.y < height)) {
      requestAnimationFrame(draw);
    } else {
      canvas.remove();
    }
  }

  draw();
}