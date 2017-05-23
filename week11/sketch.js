// spaceships and arrays

var numbSpaceships = 8;
var xPositions = [];
var yPositions = [];
var spaceshipSize = [];
var spaceshipSpeed = [];
 
function setup() {
    createCanvas (720, 360);
    
     for (var i = 0; i < numbSpaceships; i++) {
         xPositions[i] = random(0, width);
         yPositions[i] = random(0, height);
         spaceshipSize[i] = random(10,20);
         spaceshipSpeed[i] = random(0.1, 20);
     }
}
function draw() {
    background('black');
    // spaceship
    var x = 100;
    var y = 100;
    var sWidth = 200;
    var sHeight = sWidth/4;
    var sWing = sWidth/3;
    var wingm = sWidth/10;
    var cpWidth = sWidth/3;
    
    rect(100, 100, 200, 50);
    
    triangle(x, y - sWing, x, y + sHeight + sWing, x + sWidth, y + sHeight/2);
    
    triangle(x + wingm, y - sWing, x + wingm/2, y + sHeight + sWing, x + sWidth + wingm/2, y + sHeight/2);
    
    triangle((x + sWidth, y, x + sWidth, y + sHeight, x + sWidth + cpWidth, y + sHeight/2);
             
             
    
    
//    for (var i = 0; i < numbSpaceships; i++) {
     //   ellipse(xPositions[i], yPositions[i],
    //            spaceshipSize[i]);

      //  xPositions[i] += spaceshipSpeed[i];
      //  if (xPositions[i] > width + spaceshipSize[i]/2) {
         //   xPositions[i] = -spaceshipSize[i]/2;
         //   yPositions[i] = random(0, height);
       //     }
        
    //}
         //   console.log(xPositions);
}