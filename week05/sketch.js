// windows
function setup() { 
   createCanvas(640, 480);
    noStroke();
}

function draw() {
    background('green');
    
    var ww = width/6; // window width
    var wh = height/4; // window height
    
    for ( var x = ww/4; x < width; x+= ww) {
       for (var y = wh/4; y < height; y+= wh) {
           
           fill(167, 82, 54);
           rect(x, y, ww/2, wh/2);
           
           fill('lightblue');
           stroke(167, 82, 54);
           
           rect(x, y, ww/4, wh/2);
           rect(x, y, ww/2, wh/4);
           rect(x, y + wh/8, ww/4, wh/8);
           rect(x + ww/4, y + wh/8, ww/4, wh/8);
           rect(x + ww/4, y + wh/8 * 2, ww/4, wh/4);
           
           
        }
    }
        
}