// Get the main game pieces from the page.
const world = document.getElementById('world');
const worldContents = document.getElementById('worldContents');
const gameArea = document.getElementById('gameArea');
const wellTool = document.getElementById('wellTool');
const carvingLayer = document.getElementById('carvingLayer');
const carvingPreview = document.getElementById('carvingPreview');
const carvingWorldGroup = document.getElementById('carvingWorldGroup');
const carvingPreviewGroup = document.getElementById('carvingPreviewGroup');

// Track the current rotation and drag state.
let rotation = 0;
let isDragging = false;
let lastAngle = 0;
let activePointerId = null;
let isCarving = false;
let activeCarvingPointerId = null;
let carvingPoints = [];

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

// Keep updating the preview path while the pointer moves.
function updateCarving(event) {
    if (!isCarving || event.pointerId !== activeCarvingPointerId) {
        return;
    }

    const point = getPointFromEvent(event);
    const lastPoint = carvingPoints[carvingPoints.length - 1];

    if (Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y) > 2) {
        carvingPoints.push(point);
    }

    carvingPreview.setAttribute('d', buildPathData(carvingPoints));
    event.preventDefault();
}

// Finish the carving path and save it if it reaches a well.
function finishCarving(event) {
    if (!isCarving || event.pointerId !== activeCarvingPointerId) {
        return;
    }

    const point = getPointFromEvent(event);
    const lastPoint = carvingPoints[carvingPoints.length - 1] || point;
    const hitElements = document.elementsFromPoint(event.clientX, event.clientY);
    const endWell = hitElements.map((element) => element.closest('.well')).find(Boolean);
    let endPoint = null;

    if (endWell) {
        endPoint = getElementCenterPoint(endWell);
    } else {
        const wells = Array.from(document.querySelectorAll('.well'));
        for (const well of wells) {
            const wellCenter = getElementCenterPoint(well);
            if (Math.hypot(point.x - wellCenter.x, point.y - wellCenter.y) < 36 || Math.hypot(lastPoint.x - wellCenter.x, lastPoint.y - wellCenter.y) < 36) {
                endPoint = wellCenter;
                break;
            }
        }
    }

    if (endPoint) {
        const finishedPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        finishedPath.setAttribute('class', 'carving-path');
        const localPoints = [...carvingPoints, endPoint].map(toWorldLocalPoint);
        finishedPath.setAttribute('d', buildPathData(localPoints));
        carvingWorldGroup.appendChild(finishedPath);
    }

    isCarving = false;
    activeCarvingPointerId = null;
    carvingPoints = [];
    carvingPreview.setAttribute('d', '');
}

// Place a well at the current top of the rotated world.
function placeWell() {
    const pointAngle = normalizeAngle(-90 - rotation);
    const worldSize = parseFloat(getComputedStyle(world).width) || 460;
    const radius = worldSize / 2 - Math.max(8, worldSize * 0.03);
    const wellDistance = radius - Math.max(6, worldSize * 0.015);
    console.log(worldSize);
    const rangeDistance = radius - 4;

    const well = document.createElement('div');
    well.className = 'well';
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
