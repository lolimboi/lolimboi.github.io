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
  //someList =[a,b, c, d, e, f, g, h, i, j];
  someList =[5, 15, 3, 8, 9, 1, 20, 7];
  console.log(selesctionSort(someList));
}

function draw() {
  background(220);
}

function selesctionSort(aList){
  console.log(aList);
  let swap = aList.length-1;

  while(swap > 0){
    let highest = 0;
    for(let current = 0; current <= swap; current++){
      if(aList[current]> aList[highest]){
        highest = current;
      }   
    }
    let temp = aList[swap];
    aList[swap] = aList[highest];
    aList[highest] = temp;
    
    swap--;
    console.log(aList);
  }
  
  return aList;
}