// Title
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let fish;
let octopus;

let gamerfishImg;
let octopusImg;

function preload(){
  gamerfishImg = loadImage("assets/gamerfish.jpg");
  octopusImg = loadImage("assets/handopus.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fish = new Gamerfish(random(windowHeight), random(windowHeight), random(50, 75), gamerfishImg);
  octopus = new Octopus(random(windowHeight), windowHeight-75, random(50, 75), octopusImg);
}


function draw() {
  background(220);
  fish.update();
  fish.display();
  
  if(fish.x >= windowWidth + fish.size/2){
    fish.x = 0;
  }

  octopus.update();
  octopus.display();
  if(octopus.x >= windowWidth + octopus.size/2){
    octopus.x = 0;
  }
}

class Creature{
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
  }
  update(){
    this.x += 5;
  }
  display(){
    fill(0);
    circle(this.x, this.y, this.size);
  }
}

class Gamerfish extends Creature{
  constructor(x, y, size, theImage){
    super(x, y, size);
    this.myImage = theImage;
    this.ytime = 1000;
  }

  display(){
    this.y = noise(this.ytime)*height;
    this.ytime += random(0.001, 0.005);
    image(this.myImage, this.x, this.y, this.size*2, this.size);
  }
}

class Octopus extends Creature{
  constructor(x, y, size, theImage){
    super(x, y, size);
    this.myImage = theImage;
    this.xtime = 6000;
  }
  update(){
    this.x = noise(this.xtime)*height;
    this.xtime += random(0.001, 0.005);
  }
  display(){
    image(this.myImage, this.x, this.y, this.size*2, this.size);
  }
}