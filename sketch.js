let hit;
function preload(){
  hit=loadSound("wee.mp3");
}
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  
}
function keyPressed(UP_ARROW){
  hit.play();
}