// Grid baybee
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 100;
let grid;
let distance = 1;


let mySound;
function preload() {
  soundFormats('mp3');
  mySound = loadSound('assets/boop');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize, gridSize);

}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed(){
  if(key === "e"){
    grid = createEmpty2DArray(gridSize, gridSize, 0);
  }
  if(key === "b"){
    grid = createEmpty2DArray(gridSize, gridSize, 1);
  }
  if(key === "r"){
    grid = createRandom2DArray(gridSize, gridSize);
  }
}

function mousePressed(){
  let cellWidth = width/gridSize;
  let cellHeight = width/gridSize;

  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);
 
  swap(cellY, cellX);
    
  swap(cellY+distance, cellX);
    
  swap(cellY-distance, cellX);
    
  swap(cellY, cellX+distance);
    
  swap(cellY, cellX-distance);

  mySound.play();

}

function swap(x, y){
  if (x >= 0 && x < gridSize && y >= 0 && y < gridSize){
    if(grid[y][x] === 0){
      grid[y][x] === 1;
    }
    else if(grid[y][x] === 1){
      grid[y][x] === 0;
    }
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
        fill(random(255), random(255), random(255));
      }
      noStroke();
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}


function createEmpty2DArray(rows, columns, numToFill = 0){
  let grid = [];
  for (let y=0; y<rows; y++){
    grid.push([]);
    for(let x=0; x<columns; x++){
      grid[y].push(numToFill);
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