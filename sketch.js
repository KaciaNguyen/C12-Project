var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;
  createApples();
  createLeaves();
  drawSprites();
}


function createApples() {
  if(frameCount%80===0){
    var apple = createSprite(200,100,40,10);
    apple.velocityY = 3;
    apple.addImage(appleImg);
    apple.x = Math.round(random(10,390));
    apple.scale = 0.1;
    apple.lifetime = 150;
  }
}

function createLeaves() {
  if(frameCount%80===0){
    var leaf = createSprite(160,100,40,10);
    leaf.velocityY = 2;
    leaf.addImage(leavesImg);
    leaf.x = Math.round(random(10,390));
    leaf.scale = 0.1;
    leaf.lifetime = 175;
  }
}