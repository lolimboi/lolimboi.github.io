// OOP Pair Programming Starter Code
// Logan, Jack
// 11/9/2021


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;
let bulletArray = [];

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage);
}

function draw() {
  background(0);
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.dx = 10;
    this.dy = 10;
    this.image = theImage;
  }

  update() {
    if(keyIsDown(LEFT_ARROW)){
      this.x -= this.dx;
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.x += this.dx;
    }
    if(keyIsDown(UP_ARROW)){
      this.y -= this.dy;
    }
    if(keyIsDown(DOWN_ARROW)){
      this.y += this.dy;
    }
    //Bullet.update();
  }  
    

  display() {
    image(this.image, this.x, this.y, 100, 100);
  }

  handleKeyPress() {
    // for(let i=0; i<1; i++){
    //   let myBullet = new Bullet(mouseX, mouseY);
    //   bulletArray.push(myBullet);
    // }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

//class Bullet {
//constructor(x, y, dx, dy, theImage) {
//this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.image = theImage;
//   }

//   update() {
//     this.y -= this.dy;
//   }

//   display() {
//     image(this.image, this.x, this.y, 10, 10);
//   }

//   isOnScreen() {
//     if (this.x > width || this.y > height || this.x < 0 || this.y < 0 ){
//       return true;
//     }

//   }
// }

