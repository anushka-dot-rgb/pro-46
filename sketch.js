var asteroid,earth,burningEarth,rocket;

function preload(){
  asteroidImage=loadImage("asteroid.png");
  earthImage=loadImage("earth.png");
  burningEarthImage=loadImage("burntEarth.png");
  rocketImage=loadImage("rocket.png");
  bg=loadImage("bg1.jpg");
  asteroid2Image=loadImage("asteroid2.png");
  asteroid3Image=loadImage("asteroid3.png");
  asteroid4Image=loadImage("asteroid4.png");
  gameoverImage=loadImage("gameover.png");
  resetImage=loadImage("reset.png");
}

function setup(){
createCanvas(600,600);

rocket=createSprite(255,330);
rocket.addImage(rocketImage);
rocket.scale=0.5;

earth=createSprite(250,520);
earth.addImage(earthImage);
earth.scale=0.6;

reset=createSprite(250,300);
reset.addImage(resetImage);
reset.scale=0.4

gameover=createSprite(250,220);
gameover.addImage(gameoverImage);
gameover.scale=0.4;

asteroidGroup=new Group();
asteroid2Group=new Group();
asteroid3Group=new Group();
asteroid4Group=new Group();
}

function draw(){
background(bg);

edges=createEdgeSprites();

rocket.collide(edges);

rocket.x=World.mouseX;

spawnAsteroids();
spawnAsteroids2();
spawnAsteroids3();
spawnAsteroids4();

drawSprites();
}

function spawnAsteroids(){
  if (frameCount % 60 === 0) {
    var asteroid = createSprite(400,120,40,10);
    asteroid.x = Math.round(random(10,550));
    asteroid.addImage(asteroidImage);
    asteroid.scale = 0.2;
    asteroid.velocityY = 3;
    
     //assign lifetime to the variable
    asteroid.lifetime = 200;
    
    
    
    
    //add each cloud to the group
    asteroidGroup.add(asteroid);
  }
}

function spawnAsteroids2(){
  if (frameCount % 120 === 0) {
    var asteroid2 = createSprite(400,120,40,10);
    asteroid2.x = Math.round(random(30,570));
    asteroid2.addImage(asteroid2Image);
    asteroid2.scale = 0.2;
    asteroid2.velocityY = 3;
    
     //assign lifetime to the variable
    asteroid2.lifetime = 200;
    
    
    
    
    //add each cloud to the group
    asteroid2Group.add(asteroid2);
  }
}

function spawnAsteroids3(){
  if (frameCount % 180 === 0) {
    var asteroid3 = createSprite(400,120,40,10);
    asteroid3.x = Math.round(random(50,590));
    asteroid3.addImage(asteroid3Image);
    asteroid3.scale = 0.2;
    asteroid3.velocityY = 3;
    
     //assign lifetime to the variable
    asteroid3.lifetime = 200;
    
    
    
    
    //add each cloud to the group
    asteroid3Group.add(asteroid3);
  }
}

function spawnAsteroids4(){
  if (frameCount % 240 === 0) {
    var asteroid4 = createSprite(400,120,40,10);
    asteroid4.x = Math.round(random(60,600));
    asteroid4.addImage(asteroid4Image);
    asteroid4.scale = 0.3;
    asteroid4.velocityY = 3;
    
     //assign lifetime to the variable
    asteroid4.lifetime = 200;
    
    
    
    
    //add each cloud to the group
    asteroid4Group.add(asteroid4);
  }
}