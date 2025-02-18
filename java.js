// Load the JSON data and build the tree
fetch("data.json") // Ensure this path is correct
    .then(response => response.json())
    .then(treeData => {
        buildFamilyTree(treeData); // Call function to create the tree
    })
    .catch(error => console.error("Error loading data:", error));


function buildFamilyTree(treeData) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const svg = d3.select("#family-tree")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .call(d3.zoom().scaleExtent([0.01, 2]).on("zoom", zoomed)) // Enable zooming
        .append("g");

    const treeLayout = d3.tree()
        .nodeSize([29, 580])
        .separation((a, b) => a.parent === b.parent ? 8 : 14);

    // Convert JSON data into a D3 hierarchy
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
            .y(d => d.y + 50));

    // Create nodes
    const nodes = svg.selectAll(".node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.x}, ${d.y + 50})`);

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    let selectedColor = "red"; // Default selected color
        // Add reset button event listener
        document.getElementById("reset-button").addEventListener("click", function () {
            // Reset all link colors
            svg.selectAll(".link")
                .attr("data-colors", "") // Clear stored colors
                .style("stroke", "#aaaaaa") // Reset to default color
                .style("stroke-width", "2px");
        
            // Remove "selected-color" class from all color boxes
            document.querySelectorAll(".colors").forEach(c => c.classList.remove("selected-color"));
        
            // Add "selected-color" class back to the element with data-color="red"
            document.querySelector('.colors[data-color="red"]').classList.add("selected-color");
        
            // Update selectedColor variable to red
            selectedColor = "red";
        });
        

        // Handle color selection
        document.querySelectorAll(".colors").forEach(box => {
            box.addEventListener("click", function () {
                // Remove class from all color boxes
                document.querySelectorAll(".colors").forEach(c => c.classList.remove("selected-color"));
        
                // Set selected color
                selectedColor = this.getAttribute("data-color");
        
                // Add class to the clicked color box
                this.classList.add("selected-color");
            });
        });
        

    // Append circles to nodes
    nodes.append("circle")
        .attr("r", d => d.data.name === "ԿՈՍՏԱՆ" ? 200 : 100)
        .style("fill", d => colorScale(d.depth))
        .style("stroke", d => d.data["gender"] === "m" ? "#66b3ff" : d.data["gender"] === "w" ? "#ff99cc" : "#797979")
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
        });



        // Append generation number text
    nodes.append("text")
         .attr("class", "generation-text")
         .attr("dy", -60)
         .attr("text-anchor", "middle")
         .style("font-size", "30px")
         .style("fill", "#ccc")
         .text(d => d.depth === 0 ? "" : d.depth === 1 ? "1-ին" : `${d.depth}-րդ`);


    // Append labels to nodes (Names)
    nodes.append("text")
        .attr("class", "name-text")
        .attr("dy", -35)
        .attr("text-anchor", "middle")
        .attr("transform", "translate(0, 10)")
        .attr("font-size", "33px")
        .text(d => d.data["name"]);

    

    // Append hidden info text (appears on hover)
    nodes.append("text")
        .attr("class", "info-text")
        .attr("dy", 35)
        .attr("text-anchor", "middle")
        .style("font-size", "60px")
        .style("fill", "#ccc")
        .style("visibility", "hidden")
        .text(d => d.data["wife"] ? `${d.data["wife"]}` : "");

    // Append hidden children count text (appears on hover)
    nodes.append("text")
        .attr("class", "children-text")
        .attr("dy", 105)
        .attr("text-anchor", "middle")
        .style("font-size", "55px")
        .style("fill", "#ccc")
        .style("visibility", "hidden")
        .text(d => d.data["chcount"] ? `${d.data["chcount"]} երեխա` : "");


    nodes.append("text")
        .attr("class", "i-text")
        .attr("dy", 155)
        .attr("text-anchor", "middle")
        .style("font-size", "35px")
        .style("fill", "#000")
        .style("visibility", "hidden")
        .text(d => d.data["info"] ? `${d.data["info"]}` : "");


    // Show info & children count on hover
    nodes.on("mouseover", function (event, d) {
        d3.select(this).select("circle").style("r", d => d.data["gen"] === 0 ? 300 : 230);
        d3.select(this).raise();
        d3.select(this).select(".name-text").style("font-size", "65px");
        d3.select(this).select(".info-text").style("visibility", "visible");
        d3.select(this).select(".children-text").style("visibility", "visible");
        d3.select(this).select(".i-text").style("visibility", "visible");
        d3.select(this).select(".generation-text").style("font-size", "50px");
        d3.select(this).select(".generation-text").attr("dy", -150);
    });

    // Hide info & children count
    nodes.on("mouseout", function (event, d) {
        d3.select(this).select("circle").style("r", d => d.data["gen"] === 0 ? 200 : 100);
        d3.select(this).select(".name-text").style("font-size", "33px");
        d3.select(this).select(".info-text").style("visibility", "hidden");
        d3.select(this).select(".children-text").style("visibility", "hidden");
        d3.select(this).select(".i-text").style("visibility", "hidden");
        d3.select(this).select(".generation-text").style("font-size", "30px");
        d3.select(this).select(".generation-text").attr("dy", -60);
    });

    // Zoom function
    function zoomed(event) {
        svg.attr("transform", event.transform);
    }

    // Auto-resize on window change
    window.addEventListener("resize", () => {
        d3.select("svg").attr("width", window.innerWidth).attr("height", window.innerHeight);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    // Check user preference or default to dark mode
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.remove("dark-mode");
        document.querySelector(".icon").textContent = "🌙";
    } else {
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

