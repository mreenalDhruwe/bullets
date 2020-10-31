var b1, b2, b3, b4, bi1, bi2, bi3, bi4;
var sw1, sw2, sw3;
var wall, wall2, wall3, wall4, thickness;
var speed, weight;
var thickness;

function preload() {
  bi1 = loadImage("bullet1.png");
  bi2 = loadImage("bullet2.png");
  bi3 = loadImage("bullet4.png");
  bi4 = loadImage("bullet3.png");
}

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);

  thickness = random(22, 83);

  bspeed = random(50, 70);
  
  b1 = createSprite(50, 50, 30, 20);
  b1.scale = 0.3;
  b1.velocityX = bspeed;
  b1.addImage(bi1);
  b2 = createSprite(50, 150, 30, 20);
  b2.scale = 0.3;
  b2.velocityX = bspeed;
  b2.addImage(bi2);
  b3 = createSprite(50, 250, 30, 20);
  b3.scale = 0.5;
  b3.velocityX = bspeed;
  b3.addImage(bi3);
  b4 = createSprite(50, 350, 30, 20);
  b4.scale = 0.1;
  b4.velocityX = bspeed;
  b4.addImage(bi4);

  sw1 = createSprite(700, 100, 1600, 10);
  sw1.shapeColor = ("white");
  sw2 = createSprite(700, 200, 1600, 10);
  sw2.shapeColor = ("white");
  sw3 = createSprite(700, 300, 1600, 10);
  sw3.shapeColor = ("white");

  wall = createSprite(1290, 50, 20, 70);
  wall.shapeColor = ("white");
  wall2 = createSprite(1290, 150, 20, 70);
  wall2.shapeColor = ("white");
  wall3 = createSprite(1290, 250, 20, 70);
  wall3.shapeColor = ("white");
  wall4 = createSprite(1290, 350, 20, 70);
  wall4.shapeColor = ("white");
}

function draw() {
  background("black");  

  /*b1.collide(wall);
  b2.collide(wall2);
  b3.collide(wall3);
  b4.collide(wall4);*/

  //if(b1.isTouching(wall)){
    //wall.shapeColor = color(255, 0, 0);
  //}
  if(b1.isTouching(wall)){
    b1.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage<10){
      wall.shapeColor = color(255, 0, 0);
    }
    if(damage>10){
      wall.shapeColor = color(0, 255, 0);
    
    }
  }
  if(b2.isTouching(wall2)){
    b2.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage<10){
      wall2.shapeColor = color(255, 0, 0);
    }
    if(damage>10){
      wall2.shapeColor = color(0, 255, 0);
    
    }
  }
  if(b3.isTouching(wall3)){
    b3.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage<10){
      wall3.shapeColor = color(255, 0, 0);
    }
    if(damage>10){
      wall3.shapeColor = color(0, 255, 0);
    
    }
  }
  if(b4.isTouching(wall4)){
    b4.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage<10){
      wall4.shapeColor = color(255, 0, 0);
    }
    if(damage>10){
      wall4.shapeColor = color(0, 255, 0);
    
    }
  }


  drawSprites();
}