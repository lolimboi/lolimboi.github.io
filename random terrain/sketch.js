// Title
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rectHeights = [];
let numberOfRects = 1000;


function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}

function draw() {
  background(220);
  displayTerrain();
}

function generateTerrain() {
  let time = 0;
  for (let i = 0; i<numberOfRects; i++) {
    let theHeight = noise(time) * height;
    rectHeights.push(theHeight);

    time += 0.001;
  }
}

function displayTerrain() {
  let theWidth = width/rectHeights.length;
  for(let i=0; i<rectHeights.length; i++){
    let theHeight = rectHeights[i];
    fill(0);
    //rect(theWidth*i, height, 1, -theHeight);
    //circle(theWidth*i, height, -theHeight);
    triangle(theWidth*i, height, theWidth*i, height, 1, -theHeight);
  }
}