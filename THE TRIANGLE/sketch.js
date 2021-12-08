// Title
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
 
let triangleVertices = [
  {x:400, y:100},
  {x:100, y:700},
  {x:700, y:700},
];

let degreecounter = 0;

let full;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  funnytriangle(triangleVertices, degreecounter);
}

function funnytriangle(points, degree){
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  if(degree > 0){
    funnytriangle([points[0], getMidpoint(points[0], points[1]), getMidpoint(points[0], points[2])], degree-1);
    funnytriangle([points[1], getMidpoint(points[0], points[1]), getMidpoint(points[1], points[2])], degree-1);
    funnytriangle([points[2], getMidpoint(points[0], points[2]), getMidpoint(points[1], points[2])], degree-1);
  }
}
function getMidpoint(point1, point2){
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let midpoint = {x: xDiff/2, y:yDiff/2};
  return midpoint;
}

function mousePressed() {
  if(!full){
    degreecounter++;
  }

  if (degreecounter === 10){
    full = true;
  }

  if(full){
    degreecounter--;
  }

  if(degreecounter === 0){
    full = false;
  }
}