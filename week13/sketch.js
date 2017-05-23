// Final
var e1, e2, e3, e4;

//var ellipse = (56, 46, 55, 55);
function setup() {
  createCanvas(710, 400);
  fill(255, 200);
  noStroke();
  e1 = new Ellipse(156, 46, 15, -70, 100, 25);
  e2 = new Ellipse(120, 44, 5, -70, 100, 25);
  e3 = new Ellipse(160, 38, 11, -70, 100, 25);
  e4 = new Ellipse(250, 33, 8, -70, 100, 25);
}
 
function draw() {
  background(0);
  
  e1.display();
  e2.display();
  e3.display();
  e4.display();
 
  e1.move(mouseX-(width/2), mouseY+(height), 15);
  e2.move((mouseX+(width))%width, mouseY, 20);
  e3.move(mouseX/2, mouseY-(height), 40);
  e4.move(mouseX-(width/2), (height-mouseY), 50);
}
 
function Ellipse(w, x, h, y, d, n) {
  this.w = w; // single bar width
  this.xpos = x; // e xposition
  this.h = h; // e height
  this.ypos = y; // e yposition
  this.d = d; // single e distance
  this.t = n; // number of e

  this.move = function(posX, posY, damping) {
    var dif = this.ypos - posY;
    if (abs(dif) > 1) {
      this.ypos -= dif/damping;
    }
    dif = this.xpos - posX;
    if (abs(dif) > 1) {
      this.xpos -= dif/damping;
    }
  }

  this.display = function() {
    for (var i=1; i<= this.t; i++) {
      ellipse(
          this.xpos+(i+(this.d)), 
        this.ypos, 
          this.w, 
          height+this.h);
    }
  }
}