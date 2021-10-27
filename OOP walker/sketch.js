// Title
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let joshua, kevin, swouse;

function setup() {
  createCanvas(windowWidth, windowHeight);

  joshua = new Walker(300, 300, "red");
  kevin = new Walker(100, 100, "blue");
  swouse = new Walker(400, 400, "purple");
}

function draw() {


  joshua.move();
  joshua.display();
  kevin.move();
  kevin.display();
  swouse.move();
  swouse.display();
}

class Walker{
  constructor(x, y, theColour){
    this.x = x;
    this.y = y;
    this.color = theColour;
    this.speed = 5;
  }
  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, 2);
  }
  move(){
    let choice = random(100);
    if(choice < 25){
      this.y -= this.speed;
    }
    else if(choice < 50){
      this.y += this.speed;
    } 
    else if(choice < 75){
      this.x -= this.speed;
    } 
    else if(choice < 100){
      this.x += this.speed;
    } 
  }
}