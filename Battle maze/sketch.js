// Puzzle Maze (grid based game)
// Logan Weckert
// 8/11/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 20;
let grid;
let cellWidth, cellHeight;
let level;
let lastTimeSwitched;
let player1; 
let leftkey, rightkey, upkey, downkey;
let win = false;
let begin = true;

function preload(){
  level = loadJSON("assets/level1.json");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  grid = level;
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;

  lastTimeSwitched = 0;
  player1 = new Player(0, 0);
  leftkey = false;
  rightkey = false;
  upkey = false;
  downkey = false;
}



function draw() {
  background(220);
  frameRate(20);
  

  displayGrid();

  player1.playerMove();
  player1.movement();
  player1.keyPressed();
}

//displays each tile
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
        fill("blue");
      }
      if(grid[y][x] === 3){
        fill("green");
      }
      if(grid[y][x] === 4){
        fill("grey");
      }
      if(grid[y][x] === 5){
        fill("green");
      }
      if(grid[y][x] === 6){
        fill("green");
      }
      if(grid[y][x] === 7){
        fill("green");
      }
      if(grid[y][x] === 8){
        fill("yellow");
      }
      noStroke();
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

//creates a player object, carrying all the needed bits
class Player{
  constructor(playerX, playerY){
    this.playerX = playerX;
    this.playerY = playerY;
  }
  //establishes the players posotion
  playerMove(newX, newY){
    if (newX >= 0 && newY >= 0 && newX < gridSize && newY < gridSize){
    
      if (grid[newY][newX] === 0){
    
        grid[this.playerY][this.playerX] = 0;
        this.playerX = newX;
        this.playerY = newY;
        grid[this.playerY][this.playerX] = 9;
      }
    }
  }
  //actually moves the player mathematically
  movement(){
    if (keyIsDown(68)){
      this.playerMove(this.playerX+1, this.playerY);
    }
    if (keyIsDown(87)){
      this.playerMove(this.playerX, this.playerY-1);
    }
    if (keyIsDown(83)){
      this.playerMove(this.playerX, this.playerY+1);
    }
    if (keyIsDown(65)){
      this.playerMove(this.playerX-1, this.playerY);
    }
  }
  keyPressed(){
    //makes the player able to break blue blocks from certain sides
    if (this.playerX-1 >= 0 && this.playerY-1 >= 0 && this.playerX+1 < gridSize && this.playerY+1 < gridSize) {
      if(leftkey){
        if(grid[this.playerY][this.playerX-1] === 2){
          if (keyCode === 37){
            grid[this.playerY][this.playerX-1] = 0;
          }
        }
      }
      if(rightkey){
        if (grid[this.playerY][this.playerX+1] === 2){
          if(keyCode === 39){
            grid[this.playerY][this.playerX+1] = 0;
          }
        }
      }
      if(upkey){
        if (grid[this.playerY-1][this.playerX] === 2){
          if(keyCode === 38){
            grid[this.playerY-1][this.playerX] = 0;
          }
        }
      }
      if(downkey){
        if (grid[this.playerY+1][this.playerX] === 2){
          if(keyCode === 40){
            grid[this.playerY+1][this.playerX] = 0;
          }
        }
      }  
      //makes the player able to gain items
      if (grid[this.playerY][this.playerX-1] === 3 ){
        if(keyCode === 69){
          leftkey = true;
          grid[this.playerY][this.playerX-1] = 4;
        }
      }
      if(grid[this.playerY-1][this.playerX] === 3){
        if(keyCode === 69){
          leftkey = true;
          grid[this.playerY-1][this.playerX] = 4;
        }
      }
      if (grid[this.playerY-1][this.playerX] === 5 ){
        if(keyCode === 69){
          rightkey = true;
          grid[this.playerY-1][this.playerX] = 4;
        }
      }
      if (grid[this.playerY][this.playerX-1] === 6 ){
        if(keyCode === 69){
          upkey = true;
          grid[this.playerY][this.playerX-1] = 4;
        }
      }
      if(grid[this.playerY+1][this.playerX] === 6){
        if(keyCode === 69){
          upkey = true;
          grid[this.playerY+1][this.playerX] = 4;
        }
      }
      if (grid[this.playerY][this.playerX+1] === 7){
        if(keyCode === 69){
          downkey = true;
          grid[this.playerY][this.playerX+1] = 4;
        }
      }
      if( grid[this.playerY+1][this.playerX] === 7){
        if(keyCode === 69){
          downkey = true;
          grid[this.playerY+1][this.playerX] = 4;
        }
      }
      //makes the player win when interacting with the door
      if (grid[this.playerY-1][this.playerX] === 8 ){
        if(keyCode === 69){
          textAlign(CENTER, CENTER);
          text("Congrats!", width/2, width/2);
        }
      }
    }
  }
}