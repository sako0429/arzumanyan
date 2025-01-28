document.addEventListener("DOMContentLoaded", () => {
    const zoomInButton = document.querySelector('.zoom-in');
    const zoomOutButton = document.querySelector('.zoom-out');
    const zoomContent = document.querySelector('.zoom-content');

    let scale = 1;  // Initial zoom scale
    const zoomSpeed = 0.1;
    const maxZoom = 2.9;
    const minZoom = 0.2;

    zoomInButton.addEventListener('click', () => {
        scale = Math.min(scale + zoomSpeed, maxZoom);
        applyZoom();
    });

    zoomOutButton.addEventListener('click', () => {
        scale = Math.max(scale - zoomSpeed, minZoom);
        applyZoom();
    });

    function applyZoom() {
        // Apply scale to the .zoom-content (the part you want zoomed)
        zoomContent.style.transform = `scale(${scale})`;
        zoomContent.style.transformOrigin = 'top left';  // Keep the top-left corner fixed
        zoomContent.style.transition = 'transform 0.2s ease';  // Smooth zoom transition
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const zoomContainer = document.querySelector('.zoom-container');
    const familyTree = document.querySelector('.family-tree');

    let isDragging = false;
    let lastX, lastY;
    const dragSpeed = 50; // Factor to increase the speed of dragging

    // Mouse drag functionality to move the screen
    zoomContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
        zoomContainer.style.cursor = 'grabbing'; // Change cursor to indicate dragging
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaX = (e.clientX - lastX) * dragSpeed; // Increase the movement speed
        const deltaY = (e.clientY - lastY) * dragSpeed; // Increase the movement speed

        const currentTransform = getComputedStyle(familyTree).transform;
        const matrix = currentTransform === 'none' ? [1, 0, 0, 1, 0, 0] : currentTransform.match(/matrix\(([^)]+)\)/)[1].split(',').map(Number);

        // Update the position based on mouse movement
        familyTree.style.transform = `matrix(${matrix[0]}, ${matrix[1]}, ${matrix[2]}, ${matrix[3]}, ${matrix[4] + deltaX}, ${matrix[5] + deltaY})`;

        // Update the last mouse position
        lastX = e.clientX;
        lastY = e.clientY;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        zoomContainer.style.cursor = 'grab'; // Change cursor back to normal
    });
});

// Initialize the tree on page load
document.querySelectorAll('.m').forEach(parent => {
    parent.setAttribute('onclick', 'toggleBranch(this)');
    updateChildrenCount(parent);
});

document.querySelectorAll('.person').forEach(person => {
    addGenerationNumber(person);
});

const widthCache = new Map(); // Cache for storing width calculations

function addGenerationNumber(person) {
    const genClass = Array.from(person.classList).find(cls => cls.startsWith('gen'));
    if (genClass) {
        const generationNumber = genClass.replace('gen', ''); // Extract the number
        if (!person.querySelector('.generation-number')) {
            const genDiv = document.createElement('div');
            genDiv.className = 'generation-number';
            genDiv.textContent = `${generationNumber} gen`;
            person.appendChild(genDiv);
        }
    }
}

function updateChildrenCount(parent) {
    const childrenContainer = parent.nextElementSibling;
    if (childrenContainer && childrenContainer.tagName === 'UL') {
        const childrenCount = childrenContainer.children.length;
        parent.style.setProperty('--children-count', `"${childrenCount}"`);
    }
}

function toggleBranch(element) {
    const childrenContainer = element.nextElementSibling;

    if (childrenContainer && childrenContainer.tagName === 'UL') {
        const isExpanded = childrenContainer.style.display === 'flex';

        // Toggle display style
        childrenContainer.style.display = isExpanded ? 'none' : 'flex';

        // Toggle the expanded class
        element.classList.toggle('expanded', !isExpanded);

        // Adjust parent's width based on expanded children only
        if (!isExpanded) {
            adjustParentSize(element, childrenContainer);
        } else {
            element.style.width = ''; // Reset the parent's width if collapsed
        }

        // Adjust tree alignment after expansion
        adjustTreePosition();
    }
}

// Adjust parent element size based on total width of only visible children
function adjustParentSize(parent, childrenContainer) {
    if (childrenContainer) {
        const totalWidth = calculateTotalWidthForVisibleChildren(childrenContainer);
        parent.style.width = `${totalWidth * 1.2}px`; // Optional multiplier to add spacing
    }
}

// Recursively calculate the total width of only visible children
function calculateTotalWidthForVisibleChildren(node) {
    let totalWidth = 0;

    const children = Array.from(node.children);
    children.forEach(child => {
        const childBox = child.querySelector('.person');
        if (childBox) {
            // Check if the child (and its descendants) are visible
            const isVisible = child.style.display !== 'none' && child.offsetHeight > 0;

            if (isVisible) {
                // Get the computed style of the child box
                const styles = window.getComputedStyle(childBox);

                // Add the width of the child box
                let childWidth = childBox.offsetWidth;

                // Include margins, paddings, and borders
                childWidth += parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
                childWidth += parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
                childWidth += parseFloat(styles.borderLeftWidth) + parseFloat(styles.borderRightWidth);

                totalWidth += childWidth;
            }
        }

        // Recursively calculate the width for visible grandchildren
        const grandChildrenContainer = child.querySelector('ul');
        if (grandChildrenContainer) {
            totalWidth += calculateTotalWidthForVisibleChildren(grandChildrenContainer);
        }
    });

    return totalWidth;
}