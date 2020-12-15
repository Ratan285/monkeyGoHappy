var monkey, monkeyImage;
var ground,score;
var banana,bananaImage,bananaGroup;
var obstacle,obstacleImage,obstacleGroup;

function preload(){
  
  
  monkeyImage =        loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png",                             "sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400);
  
  ground=createSprite(0,400,800,20);
  ground.velocityX=-5;
  
  monkey=createSprite(30,360,20,20);
  monkey.addAnimation("monkey_running",monkeyImage);
  monkey.scale=0.1;
  monkey.collide(ground);
  
  obstacleGroup=new Group();
  bananaGroup=new Group();
  
  score=0;
  score=Math.round(frameCount/frameRate());
}


function draw() {
  background("white");
  
  text("score" + ":" + score,300,20);
  
  
  if(ground.x<0){
  ground.x=ground.width/2;
  }
  
  if(keyDown("space")&&monkey.y>355){
    monkey.velocityY=-20;
  }
  
  monkey.velocityY=monkey.velocityY+1;
  monkey.collide(ground);
  
  bananaSpawn();
  obstacleSpawn();
    
  drawSprites();
}
function bananaSpawn(){
  if(frameCount%80==0){
    banana=createSprite(400,Math.round(random(120,200)),20,20);
    banana.velocityX=-6;
    banana.lifetime=70;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    bananaGroup.add(banana);
  }
}
function obstacleSpawn(){
  if(frameCount%300==0){
    obstacle=createSprite(400,370,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-5;
    obstacle.scale=0.1;
    obstacleGroup.add(obstacle);
  }
  
}




