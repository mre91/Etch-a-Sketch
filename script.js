function createGrid(numCells) {
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