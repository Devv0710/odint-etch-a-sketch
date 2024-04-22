const body = document.querySelector("body")
const container = document.querySelector(".container")
// const breakDiv = document.createElement("div")
// breakDiv.classList.add("break")

let grids = 16


for (let i = 0; i < grids; i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    for (let j = 0; j < grids; j++) {
        const rowItem = document.createElement("div")
        rowItem.classList.add("grid")
        row.appendChild(rowItem)
    }
    container.appendChild(row)
}


// for (let i = 0; i < grids; i++) {
//     for (let j = 0; j < grids; j++) {
//         const grid = document.createElement("div")
//         grid.classList.add("grid")
//         container.appendChild(grid)
//     }
//     container.appendChild(breakDiv)
// }

// body.appendChild(container)