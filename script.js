// === !!! CONFIGURE YOUR SUPABASE INTEGRATION CREDENTIALS HERE !!! ===
const SUPABASE_URL = "https://abqchjwbxhgcnidmpglc.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFicWNoandieGhnY25pZG1wZ2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5ODI1MzcsImV4cCI6MjA5OTU1ODUzN30.Rtj1jm7tybtq-3omh0wGBtFiUrfVBG4vAf_JNyCI_uY";

// Initialize Supabase Client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// --- AUDIO CONFIGURATION ENGINE ---
const sfxClick = new Audio('audio/click.mp3');
const sfxHover = new Audio('audio/hover.mp3');
const sfxConnection = new Audio('audio/connection.mp3');
const sfxPlace = new Audio('audio/place.mp3');
const sfxSplash = new Audio('audio/splash2.mp3');
const sfxSuccess = new Audio('audio/success.mp3');

// Helper to handle instant sound playback overlap safely
function playSFX(audioElement) {
  audioElement.currentTime = 0; // Rewind to start to allow rapid re-triggering
  audioElement.play().catch(err => {
    // Browsers block autoplay audio until a user interaction (like a click) happens on screen
    console.log("Audio play deferred until user gesture: ", err);
  });
}

let currentLevelIndex = 0;
let currentDifficulty = 'normal';

// Core Canvas Node Handles
const world = document.getElementById('world');
const worldContents = document.getElementById('worldContents');
const gameArea = document.getElementById('gameArea');
const wellTool = document.getElementById('wellTool');
const carvingLayer = document.getElementById('carvingLayer');
const carvingPreview = document.getElementById('carvingPreview');
const carvingWorldGroup = document.getElementById('carvingWorldGroup');
const wellCountDisplay = document.getElementById('wellCount');
const scoreDisplay = document.getElementById('scoreCount');

// System Control Navigators
const restartButton = document.getElementById('restartButton');
const mainMenuButton = document.getElementById('mainMenuButton');
const mainMenuModal = document.getElementById('mainMenuModal');
const closeMainMenu = document.getElementById('closeMainMenu');
const menuLevelSelectBtn = document.getElementById('menuLevelSelectBtn');
const menuDiffSelectBtn = document.getElementById('menuDiffSelectBtn');
const menuTutorialBtn = document.getElementById('menuTutorialBtn');

const levelSelectModal = document.getElementById('levelSelectModal');
const closeLevelSelect = document.getElementById('closeLevelSelect');
const backToMenuFromLevel = document.getElementById('backToMenuFromLevel');
const levelGrid = document.getElementById('levelGrid');

const diffSelectModal = document.getElementById('diffSelectModal');
const closeDiffSelect = document.getElementById('closeDiffSelect');
const backToMenuFromDiff = document.getElementById('backToMenuFromDiff');
const diffOptions = document.querySelectorAll('.diff-opt-btn');

const tutorialModal = document.getElementById('tutorialModal');
const closeTutorial = document.getElementById('closeTutorial');
const backToMenuFromTutorial = document.getElementById('backToMenuFromTutorial');

// Identity Modals
const nameModal = document.getElementById('nameModal');
const playerNameInput = document.getElementById('playerNameInput');
const saveNameButton = document.getElementById('saveNameButton');

// HighScore Components
const leaderboardSubtitle = document.getElementById('leaderboardSubtitle');
const leaderboardSpinner = document.getElementById('leaderboardSpinner');
const leaderboardTable = document.getElementById('leaderboardTable');
const leaderboardRows = document.getElementById('leaderboardRows');

// Victory Overlay Modals
const winModal = document.getElementById("winModal");
const levelTitle = document.getElementById("levelTitle");
const modalTitle = document.getElementById("modalTitle");
const modalActionButton = document.getElementById("modalActionButton");
const modalChangeDiffButton = document.getElementById("modalChangeDiffButton");

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

// --- DYNAMIC OBSTACLE RESOLVER ---
function generateDynamicObstacles(levelObstacles) {
  if (levelObstacles && levelObstacles[currentDifficulty]) {
    return levelObstacles[currentDifficulty];
  }
  return [];
}

// --- LEVEL LOADER ENGINE ---
function loadLevel(levelIndex) {
  currentLevelIndex = levelIndex;
  const level = LEVELS[levelIndex];

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

  level.villages.forEach(v => {
    const img = document.createElement('img');
    img.src = "img/Town1.png";
    img.className = `village village-outside ${v.className || ''}`;
    img.style.cssText = `--angle: ${v.angle}; --distance: calc(var(--world-size) * ${v.distance}); --rotation: ${v.rotation};`;
    worldContents.appendChild(img);
  });

  level.deposits.forEach(d => {
    const div = document.createElement('div');
    div.className = `deposit ${d.className || ''}`;
    div.style.cssText = `--angle: ${d.angle}; --distance: calc(var(--world-size) * ${d.distance});`;
    worldContents.appendChild(div);
  });

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

// --- NETWORK LEADERBOARD EXECUTION ENGINE ---
async function processAndSyncLeaderboard(finalScore) {
  const localName = localStorage.getItem('charity_water_username') || "Anonymous";
  const localId = localStorage.getItem('charity_water_user_id') || "legacy-user";
  const standardScore = Math.round(finalScore);

  leaderboardSubtitle.textContent = `LEVEL ${currentLevelIndex + 1} • ${currentDifficulty.toUpperCase()}`;

  leaderboardTable.style.display = 'none';
  leaderboardSpinner.style.display = 'block';
  leaderboardSpinner.textContent = 'Syncing high score with server...';
  leaderboardRows.innerHTML = '';

  try {
    await supabaseClient.rpc('submit_score', {
      p_user_id: localId,
      p_player_name: localName,
      p_level_index: currentLevelIndex,
      p_difficulty: currentDifficulty,
      p_score: standardScore
    });

    leaderboardSpinner.textContent = 'Fetching current top 10 rankings...';

    const { data, error } = await supabaseClient
      .from('leaderboard')
      .select('player_name, score, user_id')
      .eq('level_index', currentLevelIndex)
      .eq('difficulty', currentDifficulty)
      .order('score', { ascending: true })
      .limit(10);

    if (error) throw error;

    if (data && data.length > 0) {
      data.forEach((row, idx) => {
        const tr = document.createElement('tr');
        if (row.user_id === localId) {
          tr.className = 'leaderboard-row-active';
        }

        tr.innerHTML = `
          <td>#${idx + 1}</td>
          <td>${escapeHtml(row.player_name)}</td>
          <td>${row.score} pts</td>
        `;
        leaderboardRows.appendChild(tr);
      });

      leaderboardSpinner.style.display = 'none';
      leaderboardTable.style.display = 'table';
    } else {
      leaderboardSpinner.textContent = 'No scores recorded yet!';
    }
  } catch (err) {
    console.error("Database connection failure: ", err);
    leaderboardSpinner.textContent = 'Failed to load high scores.';
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// --- STANDARD GAMEPAD LOGIC INTERRUPTS ---
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

function normalizeAngle(angle) { return ((angle % 360) + 360) % 360; }

function updateRotation(newRotation) {
  rotation = normalizeAngle(newRotation);
  worldContents.style.transform = `rotate(${rotation}deg)`;

  // Constant SVG viewBox coordinates center point lock to eliminate small screen layout drift
  const centerX = 230;
  const centerY = 230;
  carvingWorldGroup.setAttribute('transform', `rotate(${rotation} ${centerX} ${centerY})`);
}

function rotateBy(amount) { updateRotation(rotation + amount); }

function getAngle(event) {
  const rect = world.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  return Math.atan2(event.clientY - centerY, event.clientX - centerX) * 180 / Math.PI;
}

function startDragging(event) {
  if (event.button !== 0 || event.target.closest('.well-tool') || event.target.closest('.deposit')) return;
  isDragging = true;
  activePointerId = event.pointerId;
  lastAngle = getAngle(event);
  event.preventDefault();
}

function handleDragging(event) {
  if (!isDragging || event.pointerId !== activePointerId) return;
  const currentAngle = getAngle(event);
  const deltaAngle = ((currentAngle - lastAngle + 540) % 360) - 180;
  lastAngle = currentAngle;
  rotateBy(deltaAngle);
  event.preventDefault();
}

function stopDragging(event) {
  if (!isDragging || (activePointerId !== null && event.pointerId !== activePointerId)) return;
  isDragging = false;
  activePointerId = null;
}

function clampPoint(point) {
  const centerX = 230, centerY = 230, limit = 220;
  const dx = point.x - centerX, dy = point.y - centerY;
  const distance = Math.hypot(dx, dy);
  if (distance > limit) {
    const scale = limit / distance;
    return { x: centerX + dx * scale, y: centerY + dy * scale };
  }
  return point;
}

function getSvgPointFromClient(clientX, clientY) {
  const svgPoint = carvingLayer.createSVGPoint();
  svgPoint.x = clientX; svgPoint.y = clientY;
  const screenToSvg = carvingLayer.getScreenCTM();
  if (!screenToSvg) return { x: clientX, y: clientY };
  const mappedPoint = svgPoint.matrixTransform(screenToSvg.inverse());
  return clampPoint({ x: mappedPoint.x, y: mappedPoint.y });
}

function getPointFromEvent(event) { return getSvgPointFromClient(event.clientX, event.clientY); }
function getElementCenterPoint(element) {
  const rect = element.getBoundingClientRect();
  return getSvgPointFromClient(rect.left + rect.width / 2, rect.top + rect.height / 2);
}

function rotatePoint(point, angleDegrees) {
  // Constant calculations center point matching viewBox boundaries exactly
  const centerX = 230;
  const centerY = 230;
  const radians = angleDegrees * Math.PI / 180;
  const dx = point.x - centerX, dy = point.y - centerY;
  return {
    x: centerX + dx * Math.cos(radians) - dy * Math.sin(radians),
    y: centerY + dx * Math.sin(radians) + dy * Math.cos(radians)
  };
}

function toWorldLocalPoint(point) { return rotatePoint(point, -rotation); }
function buildPathData(points) {
  if (points.length === 0) return '';
  return points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(' ');
}

function beginCarving(event) {
  if (event.button !== 0) return;
  const startDeposit = event.target.closest('.deposit');
  if (!startDeposit) return;
  isCarving = true;
  activeCarvingPointerId = event.pointerId;
  carvingPoints = [getElementCenterPoint(startDeposit)];
  carvingPreview.setAttribute('d', buildPathData(carvingPoints));
  event.preventDefault();
  event.stopPropagation();
}

function getObstacleLocalPos(element) {
  const angleStr = element.style.getPropertyValue('--angle') || '0deg';
  const angleRadians = parseFloat(angleStr) * Math.PI / 180;
  let distance = 460 * 0.22;
  const match = (element.style.getPropertyValue('--distance') || '').match(/0\.\d+/);
  if (match) distance = 460 * parseFloat(match[0]);
  return { x: 230 + distance * Math.cos(angleRadians), y: 230 + distance * Math.sin(angleRadians) };
}

function updateCarving(event) {
  if (!isCarving || event.pointerId !== activeCarvingPointerId) return;
  const point = getPointFromEvent(event);
  const lastPoint = carvingPoints[carvingPoints.length - 1];
  const localPoint = toWorldLocalPoint(point);
  const obstacles = document.querySelectorAll('.obstacle');

  let hitObstacle = false;
  let collidedObs = null;

  for (const obs of obstacles) {
    // Generous rock hitbox evaluation threshold metric pinned to 14 pixels
    if (Math.hypot(localPoint.x - getObstacleLocalPos(obs).x, localPoint.y - getObstacleLocalPos(obs).y) < 14) {
      hitObstacle = true;
      collidedObs = obs;
      break;
    }
  }

  if (hitObstacle) {
    isCarving = false; activeCarvingPointerId = null; carvingPoints = [];
    carvingPreview.setAttribute('d', '');
    playSFX(sfxSplash);

    if (collidedObs) {
      collidedObs.animate([
        { filter: 'none', boxShadow: 'inset -3px -3px 0px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.25)' },
        { filter: 'sepia(1) hue-rotate(-50deg) saturate(6) brightness(0.85)', boxShadow: 'inset -3px -3px 0px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.25), 0 0 14px #F5402C' },
        { filter: 'none', boxShadow: 'inset -3px -3px 0px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.25)' },
        { filter: 'sepia(1) hue-rotate(-50deg) saturate(6) brightness(0.85)', boxShadow: 'inset -3px -3px 0px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.25), 0 0 14px #F5402C' },
        { filter: 'none', boxShadow: 'inset -3px -3px 0px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.25)' },
        { filter: 'sepia(1) hue-rotate(-50deg) saturate(6) brightness(0.85)', boxShadow: 'inset -3px -3px 0px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.25), 0 0 14px #F5402C' },
        { filter: 'none', boxShadow: 'inset -3px -3px 0px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.25)' }
      ], {
        duration: 1750,
        iterations: 1,
        easing: 'ease-in-out'
      });
    }

    event.preventDefault();
    return;
  }

  if (Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y) > 2) carvingPoints.push(point);
  carvingPreview.setAttribute('d', buildPathData(carvingPoints));
  event.preventDefault();
}

function calculatePathLength(points) {
  let length = 0;
  for (let i = 1; i < points.length; i++) length += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
  return length;
}

function getLocalCoordinates(element) {
  const angleRadians = parseFloat(element.style.getPropertyValue('--angle') || '0deg') * Math.PI / 180;
  const worldSize = parseFloat(getComputedStyle(world).width) || 460;
  let distance = worldSize * 0.554;
  const distanceStr = element.style.getPropertyValue('--distance');
  if (distanceStr && !distanceStr.includes('calc')) distance = parseFloat(distanceStr);
  else if (distanceStr && distanceStr.includes('0.272')) distance = worldSize * 0.272;
  return { x: worldSize / 2 + distance * Math.cos(angleRadians), y: worldSize / 2 + distance * Math.sin(angleRadians) };
}

function checkForWin() {
  const wells = document.querySelectorAll(".well");
  const villages = document.querySelectorAll(".village-outside");
  const paths = carvingWorldGroup.querySelectorAll("path");

  if (wellCount > 0) return;
  for (const well of wells) {
    let connected = false;
    for (const path of paths) { if (path.dataset.connectedWellId === well.dataset.id) { connected = true; break; } }
    if (!connected) return;
  }

  const RANGE_RADIUS = world.clientWidth * 0.36;
  for (const village of villages) {
    let covered = false;
    for (const well of wells) { if (Math.hypot(getLocalCoordinates(village).x - getLocalCoordinates(well).x, getLocalCoordinates(village).y - getLocalCoordinates(well).y) <= RANGE_RADIUS) covered = true; }
    if (!covered) return;
  }

  triggerConfetti();
  playSFX(sfxSuccess);

  if (currentLevelIndex < LEVELS.length - 1) {
    modalTitle.textContent = "🎉 Level Complete!";
    modalActionButton.textContent = "Next Level";
    modalActionButton.onclick = () => { winModal.classList.remove("show"); loadLevel(currentLevelIndex + 1); };
  } else {
    modalTitle.textContent = "🏆 Campaign Victory!";
    modalActionButton.textContent = "Open Main Menu";
    modalActionButton.onclick = () => {
      winModal.classList.remove("show");
      mainMenuModal.classList.add("show");
    };
  }

  winModal.classList.add("show");
  processAndSyncLeaderboard(score);
}

function finishCarving(event) {
  if (!isCarving || event.pointerId !== activeCarvingPointerId) return;
  const point = getPointFromEvent(event);
  const lastPoint = carvingPoints[carvingPoints.length - 1] || point;
  let endWell = document.elementsFromPoint(event.clientX, event.clientY).map((el) => el.closest('.well')).find(Boolean);

  if (!endWell) {
    for (const well of document.querySelectorAll('.well')) {
      if (Math.hypot(point.x - getElementCenterPoint(well).x, point.y - getElementCenterPoint(well).y) < 36 || Math.hypot(lastPoint.x - getElementCenterPoint(well).x, lastPoint.y - getElementCenterPoint(well).y) < 36) { endWell = well; break; }
    }
  }

  if (endWell) {
    const finishedPoints = [...carvingPoints, getElementCenterPoint(endWell)];
    score += calculatePathLength(finishedPoints);
    updateScoreDisplay();

    // FEATURE ADDITION: Elastic quick scale pulse animation on the score badge
    if (scoreDisplay) {
      scoreDisplay.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)' },
        { transform: 'scale(1)' }
      ], { duration: 200, easing: 'ease-out' });
    }

    const finishedPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    finishedPath.setAttribute('class', 'carving-path');
    finishedPath.dataset.connectedWellId = endWell.dataset.id;
    finishedPath.setAttribute('d', buildPathData(finishedPoints.map(toWorldLocalPoint)));
    carvingWorldGroup.appendChild(finishedPath);

    const matchingRange = document.querySelector(`.well-range[data-well-id="${endWell.dataset.id}"]`);
    if (matchingRange) {
      matchingRange.classList.add('range-connected');
    }

    playSFX(sfxConnection);
    checkForWin();
  }

  isCarving = false; activeCarvingPointerId = null; carvingPoints = [];
  carvingPreview.setAttribute('d', '');
}

function updateWellCountDisplay() { wellCountDisplay.textContent = `Wells: ${wellCount}`; }
function updateScoreDisplay() { scoreDisplay.textContent = `Score: ${Math.round(score)}`; }

function placeWell() {
  if (wellCount <= 0) return;
  const pointAngle = normalizeAngle(-90 - rotation);
  const worldSize = parseFloat(getComputedStyle(world).width) || 460;
  const wellId = `well-${wellIdCounter++}`;

  const well = document.createElement('img');
  well.src = "img/Well.png"; well.className = 'well';
  well.dataset.id = wellId;
  well.style.setProperty('--angle', `${pointAngle}deg`);
  well.style.setProperty('--distance', `${worldSize * 0.55}px`);
  well.style.setProperty('--rotation', `${normalizeAngle(pointAngle + 90)}deg`);

  const range = document.createElement('div');
  range.className = 'well-range';
  range.dataset.wellId = wellId;
  range.style.setProperty('--angle', `${pointAngle}deg`);
  range.style.setProperty('--distance', `${worldSize * 0.48}px`);
  range.style.setProperty('--rotation', `${normalizeAngle(pointAngle + 90)}deg`);

  worldContents.appendChild(range);
  worldContents.appendChild(well);
  wellCount -= 1;
  updateWellCountDisplay(); updateScoreDisplay();
  wellTool.disabled = wellCount <= 0;

  // FEATURE ADDITION: Elastic quick scale pulse animation on the well counter element
  if (wellCountDisplay) {
    wellCountDisplay.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(1)' }
    ], { duration: 200, easing: 'ease-out' });
  }

  playSFX(sfxPlace);
  checkForWin();
}

// Bind Canvas Event Loops (Re-allowed default global contextmenu handling)
gameArea.addEventListener('pointerdown', startDragging);
world.addEventListener('pointerdown', beginCarving);
window.addEventListener('pointermove', handleDragging);
window.addEventListener('pointermove', updateCarving);
window.addEventListener('pointerup', stopDragging);
window.addEventListener('pointerup', finishCarving);
window.addEventListener('pointercancel', stopDragging);
window.addEventListener('pointercancel', finishCarving);
wellTool.addEventListener('click', event => { event.preventDefault(); placeWell(); });

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') { rotateBy(8); event.preventDefault(); }
  if (event.key === 'ArrowLeft') { rotateBy(-8); event.preventDefault(); }
});

restartButton.addEventListener('click', () => loadLevel(currentLevelIndex));

// --- GLOBAL DELEGATED BUTTON INTERACTIONS CONTROLLER ---
document.addEventListener('click', (event) => {
  if (event.target.closest('button')) {
    playSFX(sfxClick);
  }
});

document.addEventListener('pointerover', (event) => {
  if (event.target.closest('button')) {
    playSFX(sfxHover);
  }
});

// --- MODAL NAVIGATION MANAGER ---
mainMenuButton.addEventListener('click', () => mainMenuModal.classList.add('show'));
closeMainMenu.addEventListener('click', () => mainMenuModal.classList.remove('show'));

menuLevelSelectBtn.addEventListener('click', () => {
  mainMenuModal.classList.remove('show');
  buildLevelSelectMenu();
  levelSelectModal.classList.add('show');
});

menuDiffSelectBtn.addEventListener('click', () => {
  mainMenuModal.classList.remove('show');
  diffSelectModal.classList.add('show');
});

menuTutorialBtn.addEventListener('click', () => {
  mainMenuModal.classList.remove('show');
  tutorialModal.classList.add('show');
});

backToMenuFromLevel.addEventListener('click', () => {
  levelSelectModal.classList.remove('show');
  mainMenuModal.classList.add('show');
});
closeLevelSelect.addEventListener('click', () => levelSelectModal.classList.remove('show'));

backToMenuFromDiff.addEventListener('click', () => {
  diffSelectModal.classList.remove('show');
  mainMenuModal.classList.add('show');
});
closeDiffSelect.addEventListener('click', () => diffSelectModal.classList.remove('show'));

backToMenuFromTutorial.addEventListener('click', () => {
  tutorialModal.classList.remove('show');
  mainMenuModal.classList.add('show');
});
closeTutorial.addEventListener('click', () => tutorialModal.classList.remove('show'));

diffOptions.forEach(btn => {
  btn.addEventListener('click', () => {
    currentDifficulty = btn.getAttribute('data-diff');
    menuDiffSelectBtn.textContent = `Difficulty: ${btn.textContent.split(' ')[0]}`;
    diffSelectModal.classList.remove('show');
    loadLevel(currentLevelIndex);
  });
});

if (modalChangeDiffButton) {
  modalChangeDiffButton.addEventListener('click', () => {
    winModal.classList.remove('show');
    diffSelectModal.classList.add('show');
  });
}

// Name registration modal
saveNameButton.addEventListener('click', () => {
  const processedInput = playerNameInput.value.trim();
  if (processedInput.length < 2) {
    alert("Please enter a username that is at least 2 characters long.");
    return;
  }

  const discriminator = Math.floor(1000 + Math.random() * 9000);
  const fullTagName = `${processedInput}#${discriminator}`;
  const uniqueId = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36);

  localStorage.setItem('charity_water_username', fullTagName);
  localStorage.setItem('charity_water_user_id', uniqueId);

  nameModal.classList.remove('show');
  loadLevel(0);
});

function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:99999;';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth, height = canvas.height = window.innerHeight;
  const colors = ['#FFC907', '#2E9DF7'];
  const particles = Array.from({ length: 80 }).map(() => ({
    x: Math.random() * width, y: Math.random() * height - height, r: Math.random() * 6 + 4, d: Math.random() * height,
    color: colors[Math.floor(Math.random() * colors.length)], tilt: Math.random() * 10 - 5, tiltAngleIncremental: Math.random() * 0.07 + 0.02, tiltAngle: 0
  }));
  function draw() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, idx) => {
      p.tiltAngle += p.tiltAngleIncremental; p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2; p.x += Math.sin(p.tiltAngle); p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;
      ctx.beginPath(); ctx.lineWidth = p.r; ctx.strokeStyle = p.color; ctx.moveTo(p.x + p.tilt + p.r / 2, p.y); ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2); ctx.stroke();
    });
    if (particles.some(p => p.y < height)) requestAnimationFrame(draw); else canvas.remove();
  }
  draw();
}

// Global Lifecycle Check Initialization Block
window.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  let userCheck = localStorage.getItem('charity_water_username');
  let idCheck = localStorage.getItem('charity_water_user_id');

  if (userCheck) {
    if (!idCheck) {
      const uniqueId = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem('charity_water_user_id', uniqueId);
    }
    if (!userCheck.includes('#')) {
      const discriminator = Math.floor(1000 + Math.random() * 9000);
      userCheck = `${userCheck}#${discriminator}`;
      localStorage.setItem('charity_water_username', userCheck);
    }
    nameModal.classList.remove('show');
    loadLevel(0);
  } else {
    nameModal.classList.add('show');
  }
});
