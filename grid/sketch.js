// Grid baybee
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 500;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize, gridSize);
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed(){
  let cellWidth = width/gridSize;
  let cellHeight = width/gridSize;

  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);
  if(grid[cellY][cellX] === 1){
    grid[cellY][cellX] = 0;
  }
  else if(grid[cellY][cellX] === 0){
    grid[cellY][cellX] = 1;
  }

}

function displayGrid(){
  let cellWidth = width/gridSize;
  let cellHeight = width/gridSize;

  for(let y = 0; y<gridSize; y++){
    for(let x = 0; x<gridSize; x++){
      if(grid[y][x] === 0){
        fill(0);
      }
      else if(grid[y][x] === 1){
        fill(255);
      }
      noStroke();
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}


function createEmpty2DArray(rows, columns){
  let grid = [];
  for (let y=0; y<rows; y++){
    grid.push([]);
    for(let x=0; x<columns; x++){
      grid[y].push(0);
    }
  }
  return grid;
}

function createRandom2DArray(rows, columns){
  let grid = [];
  for (let y=0; y<rows; y++){
    grid.push([]);
    for(let x=0; x<columns; x++){
      if(random(100) < 50){
        grid[y].push(0);
      }
      else{
        grid[y].push(1);
      }
    }
  }
  return grid;
}