// Title
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 100;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmpty2DArray();
}

function draw() {
  background(220);

  displayGrid();
}

function createGrid(rows, cols){
  for (let i=0; i<rows; i++){
    grid = [];
    for(let i = 0; i<cols; i++){
      grid.push(0);
    }
  }
}

function displayGrid(){

}