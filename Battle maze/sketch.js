// Title
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 20;
let grid;
let cellWidth, cellHeight;
let level;
let playerX = 0;
let playerY = 0;
let playerHealth;
let hurt, lastTimeSwitched;

function preload(){
  level = loadJSON("assets/level1.json");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  grid = level;
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;

  grid[playerY][playerX] = 9;
  playerHealth = 100;
  hurt = false;
  lastTimeSwitched = 0;
}

function draw() {
  background(220);
 

  displayGrid();
  death();
  harm();
}

function createEmpty2DArray(rows, cols){
  let board =[];
  for (let y=0; y<rows; y++){
    board.push([]);
    for(let x = 0; x<cols; x++){
      board[y].push(0);
    }
  }
  return board;
}


function displayGrid(){
  for(let y=0; y<gridSize; y++){
    for(let x=0; x<gridSize; x++){
      if(grid[y][x] === 0){
        fill("white");
      }
      if (grid[y][x] === 1){
        fill("black");
      }
      if(grid[y][x] === 9){
        fill("red");
      }
      if(grid[y][x] === 2){
        fill("purple");
      }
      noStroke();
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function mousePressed(){
  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 0){
    grid[cellY][cellX] = 1;
  }
  else if (grid[cellY][cellX] === 1){
    grid[cellY][cellX] = 0;
  }
}

function keyPressed(){
  if (key === "e"){
    grid = createEmpty2DArray(gridSize, gridSize);
  }
  if (key === "r"){
    grid = createRandom2DArray(gridSize, gridSize);
  }
  if (key === "d"){
    playerMove(playerX+1, playerY);
  }
  if (key === "w"){
    playerMove(playerX, playerY-1);
  }
  if (key === "s"){
    playerMove(playerX, playerY+1);
  }
  if (key === "a"){
    playerMove(playerX-1, playerY);
  }
  if (key === "h"){
    if(hurt === false){
      playerHealth -= 10;
      hurt = true;
    }
    console.log(playerHealth);
    
  }
}

function createRandom2DArray(rows, cols){
  let board =[];
  for (let y=0; y<rows; y++){
    board.push([]);
    for(let x = 0; x<cols; x++){
      if (random(100) < 50){
        board[y].push(0);
      }
      else {
        board[y].push(1);
      }
    }
  }
  return board;
}

function playerMove(newX, newY){
  if (newX >= 0 && newY >= 0 && newX < gridSize && newY < gridSize){

    if (grid[newY][newX] === 0){

      grid[playerY][playerX] = 0;
      playerX = newX;
      playerY = newY;
      grid[playerY][playerX] = 9;
    }
  }
}

function death(){
  if (playerHealth <= 0){
    grid[playerY][playerX] = 0;
  }
}

function harm(){

  if(hurt){
    if (millis() > lastTimeSwitched + 2000) {
      lastTimeSwitched = millis();
      hurt = !hurt;
    }
    console.log(millis());
  }
}