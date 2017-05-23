//system variables
var x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 10;


function setup() {
  createCanvas(710, 400);
  
  stroke(255, 100);
}

function draw() {
  background(0);

  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);


  ellipse(x, y, 40, 40);
  fill(          
            random(0, 255),
            random(0, 255),
            random(0, 255)
            );
 ellipse(100, 100, x, y);
}

function segment(x, y, a) {
  push();
}