function draw() {
    let cell = document.getElementsByClassName('cell');
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('mouseover', () => {
            cell[i].setAttribute('style', 'background: black');
        });
    }
}

function genDivs(numCells) {
    for (let i = 0; i < numCells; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);
        for (let j = 0; j < numCells; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
    }
}

function removeDivs() {
    
}

function reset() {
    let size = prompt('How many squares per side?');
}

window.onload = genDivs(16);
window.addEventListener('load', draw, true);

let resetBtn = document.querySelector('button');
resetBtn.onclick = () => reset();