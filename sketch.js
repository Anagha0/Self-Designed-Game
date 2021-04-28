var bird , ground,sky;
var gameState = 0
var animals

function preload(){

}
 function setup(){
 createCanvas (windowWidth - 30,windowHeight-100)
 bird = createSprite(200,300,20,20)
 ground = createSprite(580,windowHeight-130,windowWidth-5,20)
 sky = createSprite(580,windowHeight-600,windowWidth-5,20)
 eaglesGroup = new Group()
 foodGroup = new Group()
 animalsGroup = new Group()
 }

function draw(){
background("yellow")

if(gameState === 0){

if(keyDown("space")){
	bird.velocityY = -6
}
bird.velocityY = bird.velocityY + 0.7
spawnFood();
spawnEagles();
spawnAnimals();
if((eaglesGroup.isTouching(bird)) || (bird.isTouching(sky)) || (bird.isTouching(ground))){
  gameState = 1
}

if(bird.isTouching(foodGroup)){
  foodGroup.destroyEach()
}
}
else if(gameState===1){
  ground.velocityX = 0;
  eaglesGroup.setVelocityXEach(0)
 foodGroup.setVelocityXEach(0)
 animalsGroup.setVelocityXEach(0)
 textSize(20)
  text("Game Over!" , windowWidth/2,windowHeight /2)
}
bird.collide(ground)
 drawSprites();

}


function spawnFood() {
  if(frameCount % 60 === 0) {
    var food = createSprite(windowWidth - 30,165,20,20);
    //obstacle.debug = true;
    food.velocityX = -6
    food.y = Math.round(random(40,380))
    
    //generate random obstacles
    /*var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }*/
    
    //assign scale and lifetime to the obstacle           
    food.scale = 0.5;
    food.lifetime = 300;
    //add each obstacle to the group
    //obstaclesGroup.add(obstacle);
    foodGroup.add(food)
  }
}

function spawnEagles() {
  if(frameCount % 100 === 0) {
    var eagles = createSprite(windowWidth - 30,165,20,20);
    //obstacle.debug = true;
    eagles.velocityX = -6
    eagles.y = Math.round(random(40,290))
    eagles.shapeColor = "red"
    
    
    //assign scale and lifetime to the obstacle           
    eagles.scale = 0.5;
    eagles.lifetime = 300;
    //add each obstacle to the group
    //obstaclesGroup.add(obstacle);
    eaglesGroup.add(eagles)
  }
}

function spawnAnimals(){
  if(frameCount % Math.round(random(90,110)) === 0) {
    animals = createSprite(windowWidth - 30,windowHeight - 150,20,20);
    //obstacle.debug = true;
    animals.velocityX = -6
    animals.shapeColor = " green "
    
    //generate random obstacles
    /*var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }*/
    
    //assign scale and lifetime to the obstacle           
    animals.scale = 0.5;
    animals.lifetime = 300;
    //add each obstacle to the group
    //obstaclesGroup.add(obstacle);
    animalsGroup.add(animals)
}
}