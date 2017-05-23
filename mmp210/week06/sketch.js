// animation

var x = 40;
var y = 45;
var sz = 40;
var update = 4;

function setup() {
    createCanvas (640, 480);
}

function draw() {
    background(93, 179, 255);
    
    
    noStroke();
    fill("pink");
    
    triangle(x, y, -sz, y + sz, x + sz, y + sz);
    x+= update;
    
    if ( frameCount % 60 ==0) {
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
    }
    
    
    if (x > width || x <= 5){
        x = update; 
    }
    
    // debugging
    fill("green");
    ellipse(x, y, 10);
}