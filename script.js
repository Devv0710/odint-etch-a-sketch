const container = document.querySelector(".container")
const button = document.querySelector("button")
button.addEventListener("click", changeGridSize)
const NUMBEROFSQURES = 16

function changeGridSize() {
    let size
    do {
        size = Number(prompt("How many grids do you want? less than 100"))
    } while (size > 100);
    const rows = document.querySelectorAll(".row")
    rows.forEach(row => {
        container.removeChild(row)
    });
    createGrid(size)
}

function paintSquare(target, color = "black") {
    target.style.backgroundColor = color
}

function randomColor() {
    return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
}

function createGrid(numberOfSquares) {
    const size = 944 / numberOfSquares

    for (let i = 0; i < numberOfSquares; i++) {
        const row = document.createElement("div")
        row.classList.add("row")
        row.addEventListener("mouseover", (e) => paintSquare(e.target, randomColor()))

        for (let j = 0; j < numberOfSquares; j++) {
            const rowItem = document.createElement("div")
            rowItem.classList.add("square")
            rowItem.style.width = `${size}px`
            rowItem.style.height = `${size}px`
            row.appendChild(rowItem)
        }

        container.appendChild(row)
    }
}


createGrid(NUMBEROFSQURES)