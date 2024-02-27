const gridContainerSelector = document.querySelector(".grid-container");


function etchASketch() {
    size = prompt("Enter the size of the grid.Max is 100x100.");
    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newDiv.style.width = 960 / size + "px";
        newDiv.style.height = 960 / size + "px";
        gridContainerSelector.appendChild(newDiv);
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "black";
        });
    }

}

etchASketch();

