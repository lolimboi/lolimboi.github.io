// Title
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let clickcount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  textSize(50);
  
  fill(color(random(255), random(255), random(255), 255));
  text(clickcount, width/2, height/2);

  fill("green");
  text(getItem("highestclick"), 100, 100);
}

function mousePressed(){
  clickcount++;
  if(clickcount > getItem("highestclick")){
    storeItem("highestclick", clickcount);
  }
}
