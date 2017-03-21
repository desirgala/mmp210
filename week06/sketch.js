// animation

var x = 10;
var y = 10;

var update = 2;

function setup() {
    createCanvas (640, 480);
}

function draw() {
    background(200);
    
    ellipse(x, y, 50);
    x+= update;
    
    if ( frameCount % 60 ==0) {
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
    }
    
    
    if (x > width/2){
        x = 0;
    }
    
    if (x > width/2){
        y--;
    } else {
        y++;
    }
}