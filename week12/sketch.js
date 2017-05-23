// spaceships objects

var numSpaceships = 8;
var spaceships = [];
 
function setup() { 
    createCanvas(720, 360);
    
    
    }
    
function draw() {
    background('black');
    for (var i = 0; i < numSpaceships; i++) {
        spaceships[i].disply();
        spaceships[i].update();
}
   // ship(mouseX, mouseY, 200);
 
   function spaceship(x, y) {
     this.color = color(random(0,255), random(0,255),
                        random(0, 255));
       this.size = random(40, 100)
       this.speed = random(1, 2);
       this.x = x;
       this.y = y;
       fill(this.color);
       ships(this.x, this.y, this.size);
   }
this.update = function() {
    if (this.x < width + this.size) {
        this.x += this.speed;
    }else{
        this.x = -this.size;
        this.y = random(0, height);
    }

function ship(x, y, spaceshipWidth) {
    var spaceshipHeight = spaceshipWidth/4;
    var spaceshipWing = spaceshipWidth/3;
    var wingMargin = spaceshipWidth/10;
    var cockpitWidth = spaceshipWidth/3;
}
    
    
    
    // wing 1
    triangle(x, y - spaceshipWing, x, y + spaceshipHeight + spaceshipWing, x + spaceshipWidth, y + spaceshipHeight/2);
    
    // wing 2
    triangle(x + wingMargin, y - spaceshipWing + wingMargin/2, x + wingMargin, y + spaceshipHeight + spaceshipWing - wingMargin/2, x + spaceshipWidth, y + spaceshipHeight/2);
    
    // body
    rect(x, y, spaceshipWidth, spaceshipHeight);
    
    // cockpit
    triangle(x + spaceshipWidth, y, x + spaceshipWidth, y + spaceshipHeight, x + spaceshipWidth + cockpitWidth, y + spaceshipHeight/2);
    
    // window 
    ellipse(x + spaceshipWidth + cockpitWidth/4, y + spaceshipHeight/4, spaceshipHeight/2);
