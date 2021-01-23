const gridLength = 496;
const grid = document.querySelector('#container');
let nSquares = 16;
let squareLength = Math.floor(gridLength/nSquares) - 2;

let ink = 'black';

function colorSquare(e) {
    e.target.style.backgroundColor = ink;
    e.target.style.borderColor = ink;
}

function makeGrid() {
    for (let i = 0; i < nSquares * nSquares; i++) {
        let newSquare = document.createElement('div');
        newSquare.classList.add('gridSquare');
        newSquare.style.width = squareLength + 'px';
        newSquare.style.height = squareLength + 'px';
        newSquare.addEventListener('mouseenter', colorSquare);
        grid.appendChild(newSquare);
    }
}

function removeGrid() {
    let gridSquares = document.querySelectorAll('.gridSquare');
    gridSquares.forEach(square => grid.removeChild(square));
}

makeGrid();

function clearAll() {
    let gridSquares = document.querySelectorAll('.gridSquare');
    gridSquares.forEach(square => {
        square.style.backgroundColor = 'white';
        square.style.borderColor = 'rgb(243, 243, 243)';
    });

}

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearAll);

const nPixels = document.querySelector("#nPixels");

function updateGrid() {
    nSquares = nPixels.value;
    squareLength = Math.floor(gridLength/nSquares) - 2;
    removeGrid();
    makeGrid();
}

nPixels.addEventListener('input', updateGrid);

const newColor = document.querySelector('#newColor');
function changeColor() {
    ink = newColor.value;
    console.log(ink);
}
newColor.addEventListener('input', changeColor);