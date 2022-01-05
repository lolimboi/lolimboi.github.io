// Title
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let someList;
let a, b, c, d, e, f, g, h, i, j;

function setup() {
  createCanvas(windowWidth, windowHeight);
  a = random(10);
  b = random(10);
  c = random(10);
  d = random(10);
  e = random(10);
  f = random(10);
  g = random(10);
  h = random(10);
  i = random(10);
  j = random(10);
  someList =[a,b, c, d, e, f, g, h, i, j];
  console.log(bubbleSort(someList));
}

function draw() {
  background(220);
}

function bubbleSort(aList){
  let anySwaps = true;
  
  while(anySwaps){
    anySwaps = false;
    for(let x=0; x<aList.length-1; x++){
      if(aList[x] > aList[x+1]){
        anySwaps = true;
        let temp = aList[x];
        aList[x] = aList[x+1];
        aList[x+1] = temp;
      }
    }
    console.log(aList);
  }
  return aList;
}