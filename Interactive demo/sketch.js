// Interactive Scene
// Logan Weckert
// 9/27/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x, y, radius, gravity, dy, dx, c, rx, ry, rwidth, rheight, rfill;
let hit = false;
let textx = 100;
let textShowing = 0;
let colours = [0, 127.5, 255];
let points = 0;
let ruleset = "Use the LMB to pick up the ball.";
let ruleset1 = "Use Z, X, C to change the colour of the ball.";
let ruleset2 = "Match the ball colour to the Target colour to gain points.";
let ruleset3 = "Have fun!";
let ruleset4 = "Press ESC to hide this text.";



function setup() {
  createCanvas(windowWidth, windowHeight);
  radius = 30;
  x = width/2;
  y = height - radius;
  dy = 1;
  dx = 0;
  gravity = 0.1;
  c = 0;
  rx = 0;
  ry = 0;
  rwidth = 20;
  rheight = 100;
  rfill = 0;
}

//adds all functions into draw
function draw() {
  background(220);
  
  moveBall();
  fill(c);
  circle(x, y, radius*2);
  movingTarget();

  textSize(32);
  pop();
  push();
  text(points, 10, 30);

  textBox();
}


//makes ball fall.
function moveBall(){
  if (mouseX > x && mouseX < x + radius && mouseY > y && mouseY < y + radius && mouseIsPressed) {
    button = true;
  }
  else {
    button = false;
  }
  
  //ball follows mouse if clicked and held.
  if (button) {
    x = mouseX - radius/3;
    y = mouseY - radius/3;
    dy = mouseY - pmouseY;
    dx = mouseX - pmouseX;
  } 
  

  //ball border for right
  if (x > width - radius ){
    x = width - radius;
    dx = -dx*0.5;
  }
  
  //ball border for left
  if (x < 0 + radius){
    x = 0 + radius;
    dx = -dx*0.5;
  }
  
  //ball border for botttom
  if (y > height - radius){
    y = height - radius;
    dy = -dy*0.7;
     
  }

  //ball border for top
  if (y < 0 + radius){
    y = 0 + radius;
    dy = -dy*0.7;
  }
   
  //makes ball move with physics
  else{
    y += dy;
    x += dx;
  
    dy += gravity;
  }
}


//changes colour with  z, x, and c keys. removes text with esc.
function keyPressed() {
  
  if (keyCode === 90){
    c = 0;
  }
  
  else if (keyCode === 88){
    c = 127.5;
  }
 
  else if (keyCode === 67){
    c = 255;
  }

  else if (keyCode === 27){
    textShowing = 220;
    textx =  width + 50;
  }
}

//displays the target
function movingTarget(){
  noStroke();
  fill(rfill);
  rect(rx, ry, rwidth, rheight);
  hit = collideRectCircle(rx, ry, rwidth, rheight, x, y, radius);


  //will randomly appear around the "arena" and will increase points if hit. When hit, will change colour. will only be registered as a point if the colour of target and ball are the same.
  if (!button){
    if (c === rfill){
      if (hit){
        rx = random(random(0, 1), random(width - rwidth, width- rwidth));
        ry = random(0, height - rheight);
        dx = -dx;
        dy = -dy;
        rfill = random(colours);
        points++;
      }
      else{
        rx = rx;
        ry = ry;
      }
    }
    else {
      if (hit){
        rx = rx;
        ry = ry;
        dx = -dx;   
        dy = - dy;   
      }
    }
  }
}


//displays ruleset. Had to use many lines because textWrap is nonexistent.
function textBox(){
  textSize(32);
  textAlign(LEFT);
  fill(textShowing);
  text(ruleset, textx, 30);
  text(ruleset1, textx, 70);
  text(ruleset2, textx, 110);
  text(ruleset3, textx, 150);
  text(ruleset4, textx, 190);
}