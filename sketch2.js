var motion = 0;
var steps = 0.03;
var count = 1;
var c;




function setup() {
  var canvas = createCanvas(600, 400);  
  canvas.parent('sketch-holder');
 // saveCanvas();
  strokeWeight(12.0);
  strokeCap(ROUND);
  stroke(255, 255, 255);

  let button = createButton("clear Canvas");
  button.size(100,30);
  button.parent('button-holder');
  button.class('menu-buttons');
  button.position(10, 300);
  button.mousePressed(clearCanvas);


  let button2 = createButton("stroke Colour")
  button2.size(100,30)
  button2.parent('button-holder');
  button2.class('menu-buttons');
  button2.position(200, 300);
  button2.mousePressed(strokeColour);

  
}
 
function draw() {
 // background(220);

 var you = dist(mouseX, mouseY, pmouseX, pmouseY);
 motion += (you - motion) * steps;
 if(mouseIsPressed) {
   strokeWeight(motion/2);
  
  line(mouseX, mouseY, pmouseX, pmouseY);
}
}
function strokeColour(){
  
let ranR = int(random(255));
let ranG = int(random(255));
let ranB = int(random(255));
fill(ranR, ranG, ranB);
// rect(random(width*0.8), random(height*0.8), random(100));
 stroke(ranR, ranG, ranB);

}
function clearCanvas(){
  background(255)
  
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    saveCanvas("myPainting", "png");
    count++;
  }
}
