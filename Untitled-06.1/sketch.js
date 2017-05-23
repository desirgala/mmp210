// transform animation

var r = 0;

function setup() {
    createCanvas(640, 480);
    noStroke();
}
function draw(){

    
    background(0);
    
    
    translate(width/2, height/2);
    
    push();
    rectMode(CENTER);
    fill ("pink");
    rect(100, 100, 50, 50);
    pop();
    
    push();
    rotate(r);
    fill ("green")
    rectMode(CENTER);
    rect(-25, -25, 40, 40);
    //pop();
    
    rotate(-r);
    
    fill("blue");
    rect(150, 150, 50, 50);
    
    r += 0.05;
}