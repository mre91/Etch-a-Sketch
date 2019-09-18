function genDivs(numCells) {
    for (let i = 0; i < numCells*numCells; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        document.documentElement.style.setProperty("--numCol", numCells);
        container.appendChild(cell);
        cell.addEventListener("mouseover", function(e){
            e.target.style.background = "black";
        });
    }
}

function reset() {
    let input = prompt('How many squares per side? (Max 64)');
    let size = parseInt(input);
    if (Number.isInteger(size) && size < 65 && size > 0) {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
    genDivs(size);
    } else {
        alert("Please enter a number between 1 - 64");
        reset();
    }
}

window.onload = genDivs(16);

let resetBtn = document.querySelector('button');
resetBtn.onclick = () => reset();