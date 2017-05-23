// midterm - generative pattern

function setup() {
    createCanvas (640, 640);
    background(255);
    stroke("green");
    
    var nor = 200; // number of rectangles
    var noc = Math.sqrt(nor); //number of columns
    var rows = 10;
    var w = width / nor;
    var h = height /rows;
    
    for (var x = 0; x <= width; x += w) {
        for (var y = 0; h <= height; y += h) {
            
            var b;
            var tempx = x;
            var tempw = w;
            
            //rain color
         if (y < height /4) {
            b = random(200, 255); 
             x += random(-25, 25);
             w =random(0, 100);
         }else if (y > height * 3/4){
             g = random(
             b = random(0, 100);
         }
            
        // grass color
        fill(          
            random(0, 255),
            random(0, 255),
            random(0, 255)
            );
             
             fill(
                 random
            
            
            // flowers
            if (y > height * 3/4) {
                ellipse(x, y, w, h);
            }else{
            
            rect(x, y, w, h);
        }
        
   }
}