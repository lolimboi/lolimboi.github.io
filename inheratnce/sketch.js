// Title
// Logan Weckert
// x/xx/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let car;

function setup() {
  createCanvas(windowWidth, windowHeight);
  car = new Gaming("2004 Honda Civic", "Car");
}


function draw() {
  background(220);
}


class Gaming{
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  getName(){
    return this.name;
  }
  getType(){
    return this.type;
  }
}

class Car extends Gaming{
  constructor(name){
    super(name, "car");
  }

  getName(){
    return "This car is a " + super.getName();
  }
  
}