//Creating Variables
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  //Preloading Animation
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  //Preloading Images
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  //Creating Monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  //Creating Ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  //Creating Food Group
  foodGroup=createGroup();
  
  //Creating Obstacle Group
  obstacleGroup=createGroup();
  
  //Making Score Zero at the Start 
  score=0;
}

function draw() {
  //Clearing the Screen
  background("white");
  
  //Displaying Scoring
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ score,125,50);
  
  //Making Groung Infinite
  ground.x = ground.width/2;
  
  //Making Monkey jump when Space Key is Pressed
  if(keyDown("space") && monkey.y >= 300){
    monkey.velocityY=-20;
  }
  
  //Adding Gravity
  monkey.velocityY=monkey.velocityY+0.9;
  
  //Stopping the Monkey from Falling Down
  monkey.collide(ground);
  
  food();
  
  obstacles();
  
  obstacleGroup.collide(monkey);
 
  
  drawSprites();
  
}

//Creating Food Function
function food(){
  if(frameCount % 80 === 0){
    banana=createSprite(200,200,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(120,200));
    banana.velocityX=-6;
    banana.lifetime=50;
    foodGroup.add(banana);
    
  }
}

//Creating Obstacles Function
function obstacles(){
  if(frameCount % 300 === 0){
    obstacle=createSprite(200,310,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-5;
    obstacle.scale=0.2;
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
    
  }
}


