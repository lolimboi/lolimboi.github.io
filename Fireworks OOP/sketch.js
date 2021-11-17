// Title
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);

  for(let i=fireworks.length-1; i>=0; i--){
    if(fireworks[i].isDead()){
      fireworks.splice(i, 1);
    }
      
    else {
      fireworks[i].move();
      fireworks[i].display();
    }
    
  }
}

function mousePressed(){
  for(let i=0; i<random(80, 120); i++){
    let myParticle = new Particle(mouseX, mouseY);
    fireworks.push(myParticle);
  }

}

class Particle{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = random(3, 7);
    this.alpha = 300;
    this.theColour = color(random(255), random(255), random(255), this.alpha);
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
  }
  display(){
    noStroke();
    fill(this.theColour);
    circle(this.x, this.y, this.size);
  }

  move(){
    this.alpha -= 10;
    this.theColour = color(random(255), random(255), random(255), this.alpha);
    this.x += this.dx;
    this.y += this.dy;
  }
  isDead(){
    return this.alpha <= 0;
  }
}