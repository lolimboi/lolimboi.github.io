// Title
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<100; i++){
    spawnBall();
  }
  
}

function draw() {
  background(0);
  for (let myBall of ballArray){
    noStroke;
    fill(myBall.theColour);
    myBall.x = noise(myBall.xtime)*width;
    myBall.y = noise(myBall.ytime)*height;
    circle(myBall.x, myBall.y, myBall.radius*2);
    myBall.xtime += random(0.001, 0.005);
    myBall.ytime += random(0.001, 0.005);
  }
}

function spawnBall(){
  let myBall = {
    radius: random(-50, 50),
    x: random(width),
    y: random(height),
    xtime: random(1000),
    ytime: random(1000),
    theColour: (random(255), random(255), random(255), random(255)),
  };
  ballArray.push(myBall);
}