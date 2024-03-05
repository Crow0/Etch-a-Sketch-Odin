const gridContainerSelector = document.querySelector(".grid-container");
const resetButtonSelector = document.querySelector(".reset-button");

function etchASketch() {
    size = prompt("Enter the size of the grid.Max is 100x100.");
    if(size>100) {
        alert("Grid cannot be bigger than 100x100");
        etchASketch();
    }
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


resetButtonSelector.addEventListener("click", ()=>resetGrid(gridContainerSelector));



function resetGrid(parent) {
    parent.replaceChildren()
    etchASketch();
} 