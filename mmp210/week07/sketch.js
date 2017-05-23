// windows part II

function setup() {
    createCanvas (640, 480);
}

function draw() {
    background(193, 112, 78);
    
    var ww = width/6; // window width
    var wh = height/2; // window height
    var x = 60, y = 10;
    
    for ( var i = 0; i <4; i++) {
        for (var h = 0; h < 2; h++) {
        dw(x + 150 * i, y + 150 * h, ww , wh);
           
    }
    }
}

    
    function dw(x, y, ww, wh) {
           fill(167, 82, 54);
           rect(x, y, ww/2, wh/2);
           
           fill("black");
           stroke(167, 82, 54);
    
           rect(x, y, ww/2, wh/8);
           rect(x, y + wh/8, ww/4, wh/8);
           rect(x + ww/4, y + wh/8, ww/4, wh/4);
           rect(x + ww/4, y + wh/8 * 2, ww/4, wh/4);  
    }