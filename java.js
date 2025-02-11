// Set up SVG dimensions
const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select("#family-tree")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(d3.zoom().scaleExtent([0.01, 2]).on("zoom", zoomed)) // Enable zooming
    .append("g");

// Create a tree layout with dynamic height
//const treeLayout = d3.tree().size([width, height - 200]);
const treeLayout = d3.tree()
    .nodeSize([23, 460])  // (width, height) → Increase height for more vertical space
    .separation((a, b) => a.parent === b.parent ? 5 : 10); // Increase for more space


// Convert data into a D3 hierarchy
const root = d3.hierarchy(treeData);

// Generate tree structure
treeLayout(root);

// Auto-center root at the top
svg.attr("transform", `translate(${width / 2}, 100)`);

// Create links (lines between nodes)
svg.selectAll(".link")
    .data(root.links())
    .enter().append("path")
    .attr("class", "link")
    .attr("fill", "none")
    .attr("stroke", "#ccc")
    .attr("stroke-width", 2)
    .attr("d", d3.linkVertical()
        .x(d => d.x)
        .y(d => d.y + 50));  // Adjust spacing

// Create nodes
const nodes = svg.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${d.x}, ${d.y + 50})`); // Adjust for spacing

let selectedColor = "red"; // Default selected color
// Add reset button event listener
document.getElementById("reset-button").addEventListener("click", function () {
    svg.selectAll(".link")
        .attr("data-colors", "") // Clear stored colors
        .style("stroke", "#aaaaaa") // Reset to default color
        .style("stroke-width", "2px");
});

// Handle color selection
document.querySelectorAll(".color-box").forEach(box => {
    box.addEventListener("click", function () {
        selectedColor = this.getAttribute("data-color");
    });
});

// Append circles to nodes
nodes.append("circle")
    .attr("r", 50)
    .style("fill", "#00e1ff")
    .style("stroke", "#333")
    .style("stroke-width", "2px")
    .on("click", function (event, d) {
        let current = d;

        while (current.parent) {
            // Select the link that connects this node to its parent
            let link = svg.selectAll(".link").filter(link => link.target === current);

            // Get existing colors
            let existingColors = link.attr("data-colors");
            if (!existingColors) existingColors = "";

            // Add the selected color if not already applied
            if (!existingColors.includes(selectedColor)) {
                existingColors += ` ${selectedColor}`.trim();
            }

            // Update the link color
            link
                .attr("data-colors", existingColors) // Store all applied colors
                .style("stroke", existingColors.split(" ").pop()) // Use the last selected color for stroke
                .style("stroke-width", "5px");

            current = current.parent; // Move up to root
        }
    });



// Append labels to nodes
nodes.append("text")
    .attr("dy", 5)
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(0)")
    .attr("transform", "translate(0, 20)") // Correctly rotates text
    .text(d => d.data.name);

// Zoom function
function zoomed(event) {
    svg.attr("transform", event.transform);
}

// Auto-resize on window change
window.addEventListener("resize", () => {
    d3.select("svg").attr("width", window.innerWidth).attr("height", window.innerHeight);
});