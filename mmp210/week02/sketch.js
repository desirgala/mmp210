function setup() {
  createCanvas(640, 480);
    var sky = color(100);
    var pink = color(230, 178, 255);
    var angle = 200;
    var angle2 = 300;
    var angle3 =360;
    var side = 20;
    var a = 100
    var b = 350;
    var c = 213;
    var d = 120;
    var e = 175;
    var f = 160;
    var g = 130;
    var h = 50;
    
background(sky)

 
 fill(pink);
 noStroke();
 rect(angle, a, angle, b, side);   


    fill(sky);
    noStroke();
    rect(c, d, e, f, side);
    
    fill(sky);
    ellipse(angle2, angle3, g);
    
    fill(pink);
    ellipse(angle2, angle3, h);

}