// midterm - generative pattern

function setup() {
    createCanvas(640, 640);
    background(255);
    
   noStroke();
    
    var numberOfRectangles = 300;
    var columns = Math.sqrt(numberOfRectangles);
    var rows = Math.sqrt(numberOfRectangles);
    
//    var rows = 5;
//    var columns = numberOfRectangles / rows;
    
    var w = width / columns;
    var h = height / rows;

    for (var x = 0; x <= width; x += w) {
        for (var y = 0; y <= height; y += h) {
            
            var r, g, b;
            var tempX = x;
            var tempW = w;
            var tempH = h;
            
            // rain
            if (y < height/6) {
                // random spaced blue color
                r = random(5, 200);
                g = random(50, 255);
                b = random(200, 255);
                //random space size and position
                x += random(-25, 25);
                w = random(10, 40);
            } else if (y > height * 3/4) {
                // random multi_sq color
                r = random(10, 255);
                g = random(10, 200);
                b = random(100, 250);
                // random multi_sq size
                w = h = random(10, 100);
            } else {
                // random sgsq color
                r = random(10, 200);
                g = random(10, 250);
                b = random(100, 200);
            }
            
            // all of the color fills
            fill(r,g, b);            
            
            // muti_sq
            if ( y > height * 3/4) {
                // mutisq
                rect(x, y, w, h);
                //mini
                fill(
                    random(0,255),
                    random(0,200),
                    random(200,255)
                );
                rect(x, y, w/4, h);
                //inside 
                fill(
                    random(0, 255),
                    random(0, 100),
                    random(100, 200)
                );
                rect(x, y, w/2, h/2);
            } else {
                // spacedsq & sgsq
                rect(x, y, w, h);
            }
            
            x = tempX;
            w = tempW;
            h = tempH;
        }
    }
}