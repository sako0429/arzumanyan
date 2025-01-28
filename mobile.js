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