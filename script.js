const container = document.querySelector('.container');
const defaultSize = 16;
const gridSize = document.querySelector('.container').offsetWidth; // Get the width of the container

function createGrid(size=defaultSize) {
    container.innerHTML = ''; // Clear existing grid
    const squareSize = gridSize / size; // Calculate the size of each square
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.style.flexBasis = `${squareSize}px`;
            container.appendChild(square);
        }
    }
}

createGrid();