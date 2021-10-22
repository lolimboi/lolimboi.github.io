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
let highJump, sixShooter, dashPack;
let bulletSpotX, bulletSpotY;

function preload(){
  level = loadJSON("assets/level1.json");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  grid = level;
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;

  grid[playerY][playerX] = 9;
  highJump = false;
  sixShooter = false;
  dashPack = false;
}

function draw() {
  background(220);
  frameRate(15);
 
  
  displayGrid();

  gravity();
  movement();
  
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
      if (grid[y][x] === 4){
        fill("blue");
      }
      if(grid[y][x] === 9){
        fill("red");
      }
      noStroke();
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function gravity(){
  playerMove(playerX, playerY+1);
}

function bulletMovement(){
  if (bulletSpotX < playerX ){
    bulletSpotX -= 1;
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

function movement(){
  if (keyIsDown(65)){
    playerMove(playerX-1, playerY);
  }
  if (keyIsDown(68)){
    playerMove(playerX+1, playerY);
  }
  if (keyIsDown(LEFT_ARROW)){
    bulletSpotX = playerX-1;
    bulletSpotY = playerY;
    grid[bulletSpotY][bulletSpotX] = 4;
    bulletMove(bulletSpotX-1, bulletSpotY);
  }
}

function keyPressed(){
  if (key === "e"){
    grid = createEmpty2DArray(gridSize, gridSize);
  }
  if (key === "r"){
    grid = createRandom2DArray(gridSize, gridSize);
  }
  if (key === "w"){
    playerMove(playerX, playerY-1);
    playerMove(playerX, playerY-1);
  }
  if (highJump === true){
    playerMove(playerX, playerY-1);
  }
  if (key === "d"){
    playerMove(playerX+1, playerY);
    console.log(playerMove);
  }
  if(key === "a"){
    playerMove(playerX-1, playerY);
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

function bulletMove(newX, newY){
  if (newX >= 0 && newY >= 0 && newX < gridSize && newY < gridSize){

    if (grid[newY][newX] === 0){

      grid[bulletSpotY][bulletSpotX] = 0;
      bulletSpotX = newX;
      bulletSpotY = newY;
      grid[bulletSpotY][bulletSpotX] = 4;
    }
  }
}