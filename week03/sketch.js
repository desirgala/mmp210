//logo
function setup() {
  
    createCanvas(640, 480);
    background(145, 93, 32);
    
    fill('none');
    stroke('black');
    rec(20,33.44,55, 66);
    //ts means text size
    var ts = 70;
    
    textSize(ts);
    textStyle(ITALIC);
    textFont("Giorgia");
    
    function (){
    rect(320, 240, 70, 12);
    }
    var y =50;
    var x =220;
  
    var linenumber = 1
    linenumber = linenumber + 1
    
    
    
    text("The", x, y + ts*linenumber);
    linenumber = linenumber + 1
      text("hair of", x, y + ts*linenumber);
    linenumber = linenumber + 1
      text("the dog", x, y + ts*linenumber);
    linenumber = linenumber + 1
    
    
    
    
    
    
}

