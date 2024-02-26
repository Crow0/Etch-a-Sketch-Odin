const gridContainerSelector = document.querySelector(".grid-container");



size = 16;




for (let i = 0; i<size; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
    gridContainerSelector.appendChild(newDiv);
    newDiv.addEventListener("mouseover",()=>{
        newDiv.style.backgroundColor = "black";
    });
}

