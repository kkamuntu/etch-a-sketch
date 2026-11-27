const container = document.querySelector('.container');
const defaultSize = 16;

function createGrid(size=defaultSize) {
    container.innerHTML = ''; // Clear existing grid
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }
}

createGrid();