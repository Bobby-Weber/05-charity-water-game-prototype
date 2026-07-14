// --- LEVEL CONFIGURATION DATA ---
const LEVELS = [
  {
    name: "Level 1: Fresh Springs",
    wellCount: 1,
    villages: [
      { angle: '270deg', distance: '0.554', rotation: '0deg', className: 'village-outside-center' }
    ],
    deposits: [
      { angle: '0deg', distance: '0', className: 'deposit-one' }
    ],
    obstacles: {
      easy: [],
      normal: [],
      hard: [],
      impossible: []
    }
  },
  {
    name: "Level 2: The Oasis Split",
    wellCount: 3,
    villages: [
      { angle: '45deg', distance: '0.554', rotation: '135deg', className: 'village-outside-left' },
      { angle: '180deg', distance: '0.554', rotation: '270deg', className: 'village-outside-center' },
      { angle: '270deg', distance: '0.554', rotation: '0deg', className: 'village-outside-right' }
    ],
    deposits: [
      { angle: '90deg', distance: '0.25', className: 'deposit-one' },
      { angle: '0deg', distance: '0.30', className: 'deposit-two' }
    ],
    obstacles: {
      easy: [],
      normal: [
        { angle: '30deg', distance: '0.20' },
        { angle: '60deg', distance: '0.35' },
        { angle: '120deg', distance: '0.22' },
        { angle: '150deg', distance: '0.40' },
        { angle: '210deg', distance: '0.15' },
        { angle: '240deg', distance: '0.30' },
        { angle: '300deg', distance: '0.25' }
      ],
      hard: [
        // Custom rock coords for Level 2 Hard here
        { angle: '30deg', distance: '0.20' },
        { angle: '120deg', distance: '0.22' },
        { angle: '210deg', distance: '0.15' }
      ],
      impossible: [
        // Custom rock coords for Level 2 Impossible here
        { angle: '30deg', distance: '0.20' },
        { angle: '60deg', distance: '0.35' },
        { angle: '120deg', distance: '0.22' }
      ]
    }
  },
  {
    name: "Level 3: The Outskirts",
    wellCount: 2,
    villages: [
      { angle: '135deg', distance: '0.554', rotation: '225deg', className: 'village-outside-left' },
      { angle: '200deg', distance: '0.554', rotation: '290deg', className: 'village-outside-center' },
      { angle: '315deg', distance: '0.554', rotation: '45deg', className: 'village-outside-right' }
    ],
    deposits: [
      { angle: '45deg', distance: '0.272', className: 'deposit-one' },
      { angle: '225deg', distance: '0.272', className: 'deposit-two' }
    ],
    obstacles: {
      easy: [],
      normal: [
        { angle: '0deg', distance: '0.16' },
        { angle: '90deg', distance: '0.22' },
        { angle: '180deg', distance: '0.18' },
        { angle: '190deg', distance: '0.38' },
        { angle: '270deg', distance: '0.20' },
        { angle: '55deg', distance: '0.38' },
        { angle: '15deg', distance: '0.38' },
        { angle: '345deg', distance: '0.28' },
        { angle: '140deg', distance: '0.35' },
        { angle: '235deg', distance: '0.39' },
        { angle: '310deg', distance: '0.34' }
      ],
      hard: [],
      impossible: []
    }
  },
  {
    name: "Level 4: Opposite Shores",
    wellCount: 2,
    villages: [
      { angle: '170deg', distance: '0.554', rotation: '260deg', className: 'village-outside-left' },
      { angle: '190deg', distance: '0.554', rotation: '280deg', className: 'village-outside-center' },
      { angle: '350deg', distance: '0.554', rotation: '80deg', className: 'village-outside-right' },
      { angle: '10deg', distance: '0.554', rotation: '100deg', className: 'village-outside-center' }
    ],
    deposits: [
      { angle: '90deg', distance: '0.25', className: 'deposit-one' },
      { angle: '270deg', distance: '0.25', className: 'deposit-two' }
    ],
    obstacles: {
      easy: [],
      normal: [
        { angle: '90deg', distance: '0.12' },
        { angle: '90deg', distance: '0.35' },
        { angle: '270deg', distance: '0.12' },
        { angle: '270deg', distance: '0.35' },
        { angle: '145deg', distance: '0.22' },
        { angle: '155deg', distance: '0.38' },
        { angle: '215deg', distance: '0.25' },
        { angle: '225deg', distance: '0.40' },
        { angle: '325deg', distance: '0.20' },
        { angle: '335deg', distance: '0.38' },
        { angle: '35deg', distance: '0.22' },
        { angle: '45deg', distance: '0.40' }
      ],
      hard: [],
      impossible: []
    }
  },
  {
    name: "Level 5: The Labyrinth Spiral",
    wellCount: 2,
    villages: [
      { angle: '0deg', distance: '0.554', rotation: '90deg', className: 'village-outside-right' },
      { angle: '90deg', distance: '0.554', rotation: '180deg', className: 'village-outside-left' },
      { angle: '180deg', distance: '0.554', rotation: '270deg', className: 'village-outside-center' },
      { angle: '270deg', distance: '0.554', rotation: '0deg', className: 'village-outside-center' }
    ],
    deposits: [
      { angle: '135deg', distance: '0.18', className: 'deposit-one' },
      { angle: '315deg', distance: '0.18', className: 'deposit-two' }
    ],
    obstacles: {
      easy: [],
      normal: [
        { angle: '45deg', distance: '0.15' },
        { angle: '135deg', distance: '0.32' },
        { angle: '225deg', distance: '0.15' },
        { angle: '315deg', distance: '0.32' },
        { angle: '0deg', distance: '0.28' },
        { angle: '90deg', distance: '0.28' },
        { angle: '180deg', distance: '0.28' },
        { angle: '270deg', distance: '0.28' },
        { angle: '20deg', distance: '0.38' },
        { angle: '110deg', distance: '0.38' },
        { angle: '200deg', distance: '0.38' },
        { angle: '290deg', distance: '0.38' },
        { angle: '70deg', distance: '0.42' },
        { angle: '160deg', distance: '0.42' },
        { angle: '250deg', distance: '0.42' },
        { angle: '340deg', distance: '0.42' }
      ],
      hard: [],
      impossible: []
    }
  },
  {
    name: "Level 6: The Hourglass Gate",
    wellCount: 2,
    villages: [
      { angle: '250deg', distance: '0.554', rotation: '340deg', className: 'village-outside-left' },
      { angle: '290deg', distance: '0.554', rotation: '20deg', className: 'village-outside-right' },
      { angle: '110deg', distance: '0.554', rotation: '200deg', className: 'village-outside-left' },
      { angle: '70deg', distance: '0.554', rotation: '160deg', className: 'village-outside-right' }
    ],
    deposits: [
      { angle: '0deg', distance: '0', className: 'deposit-one' }
    ],
    obstacles: {
      easy: [],
      normal: [
        { angle: '270deg', distance: '0.22' },
        { angle: '250deg', distance: '0.32' },
        { angle: '290deg', distance: '0.32' },
        { angle: '245deg', distance: '0.44' },
        { angle: '270deg', distance: '0.44' },
        { angle: '295deg', distance: '0.44' },
        { angle: '90deg', distance: '0.22' },
        { angle: '110deg', distance: '0.32' },
        { angle: '70deg', distance: '0.32' },
        { angle: '115deg', distance: '0.44' },
        { angle: '90deg', distance: '0.44' },
        { angle: '65deg', distance: '0.44' },
        { angle: '180deg', distance: '0.25' },
        { angle: '0deg', distance: '0.25' },
        { angle: '215deg', distance: '0.25' },
        { angle: '145deg', distance: '0.25' },
        { angle: '325deg', distance: '0.25' },
        { angle: '35deg', distance: '0.25' }
      ],
      hard: [
        // --- ROW 1 (Topmost Arch) ---
        { angle: '270deg', distance: '0.44' }, // Center
        { angle: '252deg', distance: '0.44' }, // Left
        { angle: '288deg', distance: '0.44' }, // Right

        // --- ROW 2 ---
        { angle: '254deg', distance: '0.34' }, // Left
        { angle: '286deg', distance: '0.34' }, // Right

        // --- ROW 3 ---
        { angle: '270deg', distance: '0.26' }, // Center
        { angle: '232deg', distance: '0.28' }, // Left
        { angle: '308deg', distance: '0.28' }, // Right

        // --- ROW 4 ---
        { angle: '270deg', distance: '0.14' }, // Center (just above water)
        { angle: '212deg', distance: '0.22' }, // Left
        { angle: '328deg', distance: '0.22' }, // Right

        // --- ROW 5 (Horizontal Centerline) ---
        { angle: '180deg', distance: '0.25' }, // Left tip
        { angle: '0deg', distance: '0.25' }, // Right tip

        // --- ROW 6 ---
        { angle: '90deg', distance: '0.14' }, // Center (just below water)
        { angle: '148deg', distance: '0.22' }, // Left
        { angle: '32deg', distance: '0.22' }, // Right

        // --- ROW 7 ---
        { angle: '90deg', distance: '0.26' }, // Center
        { angle: '128deg', distance: '0.28' }, // Left
        { angle: '52deg', distance: '0.28' }, // Right

        // --- ROW 8 ---
        { angle: '106deg', distance: '0.34' }, // Left
        { angle: '74deg', distance: '0.34' }, // Right

        // --- ROW 9 (Bottom-most Arch) ---
        { angle: '90deg', distance: '0.44' }, // Center
        { angle: '108deg', distance: '0.44' }, // Left
        { angle: '72deg', distance: '0.44' }  // Right
      ],
      impossible: []
    }
  }
];

let currentLevelIndex = 0;
let currentDifficulty = 'normal'; // Option tracking: 'easy', 'normal', 'hard', 'impossible'

// Get the main game pieces from the page.
const world = document.getElementById('world');
const worldContents = document.getElementById('worldContents');
const gameArea = document.getElementById('gameArea');
const wellTool = document.getElementById('wellTool');
const carvingLayer = document.getElementById('carvingLayer');
const carvingPreview = document.getElementById('carvingPreview');
const carvingWorldGroup = document.getElementById('carvingWorldGroup');
const wellCountDisplay = document.getElementById('wellCount');
const scoreDisplay = document.getElementById('scoreCount');

// System Control Elements
const restartButton = document.getElementById('restartButton');
const levelSelectButton = document.getElementById('levelSelectButton');
const levelSelectModal = document.getElementById('levelSelectModal');
const closeLevelSelect = document.getElementById('closeLevelSelect');
const levelGrid = document.getElementById('levelGrid');

const diffSelectButton = document.getElementById('diffSelectButton');
const diffSelectModal = document.getElementById('diffSelectModal');
const closeDiffSelect = document.getElementById('closeDiffSelect');
const diffOptions = document.querySelectorAll('.diff-opt-btn');

// Victory Modal Handles
const winModal = document.getElementById("winModal");
const levelTitle = document.getElementById("levelTitle");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalActionButton = document.getElementById("modalActionButton");

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
let wellIdCounter = 0;

// --- DYNAMIC OBSTACLE GENERATION ENGINE ---
// Cleaned up to fetch custom, developer-defined layouts directly based on active difficulty string
function generateDynamicObstacles(levelObstacles) {
  if (levelObstacles && levelObstacles[currentDifficulty]) {
    return levelObstacles[currentDifficulty];
  }
  return []; // Fallback safety net
}

// --- LEVEL LOADER ENGINE ---
function loadLevel(levelIndex) {
  currentLevelIndex = levelIndex;
  const level = LEVELS[levelIndex];

  // Reset engine status loops
  wellCount = level.wellCount;
  score = 0;
  rotation = 0;
  isDragging = false;
  isCarving = false;
  carvingPoints = [];

  worldContents.innerHTML = '';
  carvingWorldGroup.innerHTML = '';
  carvingPreview.setAttribute('d', '');

  worldContents.style.transform = `rotate(0deg)`;
  carvingWorldGroup.removeAttribute('transform');

  levelTitle.textContent = level.name;

  // Inject Villages
  level.villages.forEach(v => {
    const img = document.createElement('img');
    img.src = "img/Town1.png";
    img.className = `village village-outside ${v.className || ''}`;
    img.style.cssText = `--angle: ${v.angle}; --distance: calc(var(--world-size) * ${v.distance}); --rotation: ${v.rotation};`;
    worldContents.appendChild(img);
  });

  // Inject Deposits
  level.deposits.forEach(d => {
    const div = document.createElement('div');
    div.className = `deposit ${d.className || ''}`;
    div.style.cssText = `--angle: ${d.angle}; --distance: calc(var(--world-size) * ${d.distance});`;
    worldContents.appendChild(div);
  });

  // Load dynamically calculated obstacles using the active difficulty filter
  const activeObstacles = generateDynamicObstacles(level.obstacles);
  activeObstacles.forEach(o => {
    const div = document.createElement('div');
    div.className = 'obstacle';
    div.style.cssText = `--angle: ${o.angle}; --distance: calc(var(--world-size) * ${o.distance});`;
    worldContents.appendChild(div);
  });

  updateWellCountDisplay();
  updateScoreDisplay();
  wellTool.disabled = false;
}

// --- SETUP MENUS ---
function buildLevelSelectMenu() {
  levelGrid.innerHTML = '';
  LEVELS.forEach((level, index) => {
    const btn = document.createElement('button');
    btn.textContent = `Level ${index + 1}`;
    btn.style.cssText = `padding: 12px; border: none; border-radius: 8px; background: #2E9DF7; color: white; font-weight: bold; cursor: pointer;`;
    btn.addEventListener('click', () => {
      levelSelectModal.classList.remove('show');
      loadLevel(index);
    });
    levelGrid.appendChild(btn);
  });
}

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

function startDragging(event) {
  if (event.button !== 0 || event.target.closest('.well-tool') || event.target.closest('.deposit')) {
    return;
  }

  isDragging = true;
  activePointerId = event.pointerId;
  lastAngle = getAngle(event);
  event.preventDefault();
}

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

function stopDragging(event) {
  if (!isDragging || (activePointerId !== null && event.pointerId !== activePointerId)) {
    return;
  }

  isDragging = false;
  activePointerId = null;
}

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

function getPointFromEvent(event) {
  return getSvgPointFromClient(event.clientX, event.clientY);
}

function getElementCenterPoint(element) {
  const rect = element.getBoundingClientRect();
  return getSvgPointFromClient(rect.left + rect.width / 2, rect.top + rect.height / 2);
}

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

function toWorldLocalPoint(point) {
  return rotatePoint(point, -rotation);
}

function buildPathData(points) {
  if (points.length === 0) {
    return '';
  }
  return points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(' ');
}

// Start drawing a carving line using the main interaction button
function beginCarving(event) {
  if (event.button !== 0) {
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

function getObstacleLocalPos(element) {
  const angleStr = element.style.getPropertyValue('--angle') || '0deg';
  const angleDegrees = parseFloat(angleStr);
  const angleRadians = angleDegrees * Math.PI / 180;

  const centerX = 230;
  const centerY = 230;

  const distanceStr = element.style.getPropertyValue('--distance') || '';
  let distance = 460 * 0.22;

  const match = distanceStr.match(/0\.\d+/);
  if (match) {
    distance = 460 * parseFloat(match[0]);
  }

  return {
    x: centerX + distance * Math.cos(angleRadians),
    y: centerY + distance * Math.sin(angleRadians)
  };
}

function updateCarving(event) {
  if (!isCarving || event.pointerId !== activeCarvingPointerId) {
    return;
  }

  const point = getPointFromEvent(event);
  const lastPoint = carvingPoints[carvingPoints.length - 1];
  const localPoint = toWorldLocalPoint(point);

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
    length += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
  }
  return length;
}

function getLocalCoordinates(element) {
  const angleStr = element.style.getPropertyValue('--angle') || '0deg';
  const angleDegrees = parseFloat(angleStr);
  const angleRadians = angleDegrees * Math.PI / 180;

  const worldSize = parseFloat(getComputedStyle(world).width) || 460;
  const centerX = worldSize / 2;
  const centerY = worldSize / 2;

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

  if (wellCount > 0) return;

  for (const well of wells) {
    const wellId = well.dataset.id;
    let wellIsConnected = false;

    for (const path of paths) {
      if (path.dataset.connectedWellId === wellId) {
        wellIsConnected = true;
        break;
      }
    }

    if (!wellIsConnected) return;
  }

  const RANGE_RADIUS = world.clientWidth * 0.36;

  for (const village of villages) {
    const villagePos = getLocalCoordinates(village);
    let covered = false;

    for (const well of wells) {
      const wellPos = getLocalCoordinates(well);
      const distance = Math.hypot(villagePos.x - wellPos.x, villagePos.y - wellPos.y);
      if (distance <= RANGE_RADIUS) covered = true;
    }

    if (!covered) return;
  }

  triggerConfetti();

  if (currentLevelIndex < LEVELS.length - 1) {
    modalTitle.textContent = "🎉 Level Complete!";
    modalDescription.textContent = `Difficulty: ${currentDifficulty.toUpperCase()} | Score: ${Math.round(score)}`;
    modalActionButton.textContent = "Next Level";
    modalActionButton.onclick = () => {
      winModal.classList.remove("show");
      loadLevel(currentLevelIndex + 1);
    };
  } else {
    modalTitle.textContent = "🏆 Campaign Victory!";
    modalDescription.textContent = `You beat every level on ${currentDifficulty.toUpperCase()} difficulty! Final level score: ${Math.round(score)}.`;
    modalActionButton.textContent = "Play Again From Start";
    modalActionButton.onclick = () => {
      winModal.classList.remove("show");
      loadLevel(0);
    };
  }

  winModal.classList.add("show");
}

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

function updateWellCountDisplay() {
  wellCountDisplay.textContent = `Wells: ${wellCount}`;
}

function updateScoreDisplay() {
  scoreDisplay.textContent = `Score: ${Math.round(score)}`;
}

function placeWell() {
  if (wellCount <= 0) return;

  const pointAngle = normalizeAngle(-90 - rotation);
  const worldSize = parseFloat(getComputedStyle(world).width) || 460;
  const wellDistance = worldSize * 0.55;
  const rangeDistance = worldSize * 0.48;

  const well = document.createElement('img');
  well.src = "img/Well.png";
  well.className = 'well';
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

// Bind Interactions
gameArea.addEventListener('pointerdown', startDragging);
world.addEventListener('pointerdown', beginCarving);
window.addEventListener('pointermove', handleDragging);
window.addEventListener('pointermove', updateCarving);
window.addEventListener('pointerup', stopDragging);
window.addEventListener('pointerup', finishCarving);
window.addEventListener('pointercancel', stopDragging);
window.addEventListener('pointercancel', finishCarving);
document.addEventListener('contextmenu', event => event.preventDefault());

wellTool.addEventListener('click', (event) => {
  event.preventDefault();
  placeWell();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') { rotateBy(8); event.preventDefault(); }
  if (event.key === 'ArrowLeft') { rotateBy(-8); event.preventDefault(); }
});

restartButton.addEventListener('click', () => loadLevel(currentLevelIndex));

levelSelectButton.addEventListener('click', () => {
  buildLevelSelectMenu();
  levelSelectModal.classList.add('show');
});
closeLevelSelect.addEventListener('click', () => levelSelectModal.classList.remove('show'));

// --- DIFFICULTY SELECTION MENU REGISTER ---
diffSelectButton.addEventListener('click', () => diffSelectModal.classList.add('show'));
closeDiffSelect.addEventListener('click', () => diffSelectModal.classList.remove('show'));

diffOptions.forEach(btn => {
  btn.addEventListener('click', () => {
    currentDifficulty = btn.getAttribute('data-diff');
    diffSelectButton.textContent = `Difficulty: ${btn.textContent.split(' ')[0]}`;
    diffSelectModal.classList.remove('show');
    loadLevel(currentLevelIndex); // Live rebuild with new rock parameters
  });
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
    if (particles.some(p => p.y < height)) requestAnimationFrame(draw);
    else canvas.remove();
  }
  draw();
}

// Boot Engine
loadLevel(0);