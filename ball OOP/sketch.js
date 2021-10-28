// Title
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let theBall;
let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<50; i++){
    let x = random(100, width-100);
    let y = random(100, height-100);
    theBall = new Ball(x, y);
    ballArray.push(theBall);
  }
}

function draw() {
  background(220);
  for(let theBall of ballArray){
    theBall.move();
    theBall.display();
  }
}

function mousePressed(){
  let theBall = new Ball(mouseX, mouseY);
  ballArray.push(theBall);
}

class Ball{
  constructor(x, y){
    this.radius = random(20, 50);
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.theColour = color(random(255), random(255), random(255), random(255));
  }
  display(){
    noStroke();
    fill(this.theColour);
    circle(this.x, this.y, this.radius*2);
  }
  move(){
    this.x += this.dx;
    this.y += this.dy;

    if(this.x - this.radius <= 0 || this.x + this.radius >= width){
      this.dx *= -1;
    }
    if (this.y - this.radius <= 0 || this.y + this.radius >= height){
      this.dy *= -1;
    }
  }
}