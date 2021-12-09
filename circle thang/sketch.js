// Title
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  recursiveCircle(width/2, height);
}

function recursiveCircle(x, diameter){
  circle(x, height/2, diameter);

  if(diameter > 100){
    recursiveCircle(x-0.25*diameter, diameter/2);
    recursiveCircle(x+0.25*diameter, diameter/2);
  }
}

