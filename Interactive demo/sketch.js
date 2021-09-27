// 
// Logan Weckert
// 9/24/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x, y, radius, gravity, dy, dx, c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  radius = random(20, 40);
  x = width/2;
  y = height - radius;
  dy = 1;
  dx = 0;
  gravity = 0.1;
  c = 0;
}

function draw() {
  //background(220);
  
  moveBall();
  fill(c);
  circle(x, y, radius*2);
}

function moveBall(){
  if (mouseX > x && mouseX < x + radius && mouseY > y && mouseY < y + radius && mouseIsPressed) {
    button = true;
  }
  else {
    button = false;
  }
  
  
  if (button) {
    x = mouseX - radius/3;
    y = mouseY - radius/3;
    dy = mouseY - pmouseY;
    dx = mouseX - pmouseX;
  } 
  
  if (x > width - radius ){
    x = width - radius;
    dx = -dx*0.5;
  }
  
  if (x < 0 + radius){
    x = 0 + radius;
    dx = -dx*0.5;
  }
  
  if (y > height - radius){
    y = height - radius;
    dy = -dy*0.5;
     
  }

  if (y < 0 + radius){
    y = 0 + radius;
    dy = -dy*0.5;
  }
   
  else{
    y += dy;
    x += dx;
  
    dy += gravity;
  }
}

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
}