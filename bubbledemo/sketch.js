// AAAAAA GOD WHY MUST I SUFFER
// Logan Weckert
// 9/24/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  
}

function draw() {
  background(220);

  bubbleUp();
  displayBubble();
}

function mousePressed(){
  spawnBubble();
}

function spawnBubble(){
  let bubble = {
    x: random(100),
    y: height,
    radius: random(100),
    dx: 0,
    dy: -5,
    theColour:color(random(255), random(255), random(255)),
    theTime: random(1000),
  };
  theBubbles.push(bubble);
}

function bubbleUp(){
  for (let bubble of theBubbles){
    bubble.y += bubble.dy;

    bubble.x += noise(bubble.theTime) * width;
    theTime += 0.01;
  }
}

function displayBubble(){
  for (let bubble of theBubbles){
    fill(bubble.theColour);
    circle(bubble.x, bubble.y, bubble.radius*2);
  }
}