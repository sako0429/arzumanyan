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
    .nodeSize([29, 580])  // (width, height) → Increase height for more vertical space
    .separation((a, b) => a.parent === b.parent ? 8 : 12); // Increase for more space


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
    .style("stroke", "#aaaaaa")
    .attr("stroke-width", 5)
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

const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

// Append circles to nodes
nodes.append("circle")
    .attr("r", 100)
    .style("fill", d => colorScale(d.depth))
    .style("stroke", d => d.data.gender === "m" ? "#66b3ff" : "#ff99cc")
    .style("stroke-width", "14px")
    .on("click", function (event, d) {
        let current = d;
        while (current.parent) {
            let link = svg.selectAll(".link").filter(link => link.target === current);
            let existingColors = link.attr("data-colors") || "";
            if (!existingColors.includes(selectedColor)) {
                existingColors += ` ${selectedColor}`.trim();
            }
            link.attr("data-colors", existingColors)
                .style("stroke", existingColors.split(" ").pop())
                .style("stroke-width", "14px");
            current = current.parent;
        }
    })
    .on("mouseover", function () {
        d3.select(this)
            .transition().duration(200)
            .attr("r", 200);  // Increase circle size
        d3.select(this.parentNode).select("text")
            .transition().duration(200)
            .attr("font-size", "50px"); // Increase text size
    })
    .on("mouseout", function () {
        d3.select(this)
            .transition().duration(200)
            .attr("r", 100); // Reset circle size
        d3.select(this.parentNode).select("text")
            .transition().duration(200)
            .attr("font-size", "20px"); // Reset text size
    });

// Append labels to nodes
nodes.append("text")
    .attr("dy", 5)
    .attr("text-anchor", "middle")
    .attr("transform", "translate(0, 20)")
    .attr("font-size", "20px")
    .text(d => d.data.name);

// Zoom function
function zoomed(event) {
    svg.attr("transform", event.transform);
}

// Auto-resize on window change
window.addEventListener("resize", () => {
    d3.select("svg").attr("width", window.innerWidth).attr("height", window.innerHeight);
});


document.addEventListener("DOMContentLoaded", function () {
    // Check user preference or default to dark mode
    if (localStorage.getItem("theme") !== "light") { 
        document.body.classList.add("dark-mode");
        document.querySelector(".icon").textContent = "🌞";
    }
});

document.querySelector(".dark-light").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Change icon
    const icon = this.querySelector(".icon");
    icon.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";

    // Save user preference
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "light" : "dark");
});




