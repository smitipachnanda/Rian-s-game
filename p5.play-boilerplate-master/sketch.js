var laser1 , laser2 , laser3 , laser4 , laser5 , laser6 , laser7;

var wall1 , wall2;

var player;

var gameState = "level1"



function setup() {
  Canvas = createCanvas(1240,600);
  


wall1 = createSprite(620,20,1240,10)
wall1.shapeColor= "black"

wall2 = createSprite(620,580,1240,10)
wall2.shapeColor= "black"

player = createSprite(30,250,20,20)
player.shapeColor= "orange"

// level1
laser1 = createSprite(175,50,10,50)
laser1.shapeColor = "red"
laser1.velocityY = 4

laser2 = createSprite(323,550,10,50)
laser2.shapeColor = "red"
laser2.velocityY = -4

laser3 = createSprite(450,50,10,50)
laser3.shapeColor = "red"
laser3.velocityY = 4

laser4 = createSprite(590,550,10,50)
laser4.shapeColor = "red"
laser4.velocityY = -4

laser5 = createSprite(730,50,10,50)
laser5.shapeColor = "red"
laser5.velocityY = 4

laser6 = createSprite(870,550,10,50)
laser6.shapeColor = "red"
laser6.velocityY = -4

laser7 = createSprite(1010,50,10,50)
laser7.shapeColor = "red"
laser7.velocityY = 4

}

function draw() {
  background(255,255,255);
  //level1
  laser1.bounceOff(wall1)
  laser1.bounceOff(wall2)

  laser2.bounceOff(wall1)
  laser2.bounceOff(wall2)

  laser3.bounceOff(wall1)
  laser3.bounceOff(wall2)

  laser4.bounceOff(wall1)
  laser4.bounceOff(wall2)

  laser5.bounceOff(wall1)
  laser5.bounceOff(wall2)

  laser6.bounceOff(wall1)
  laser6.bounceOff(wall2)

  laser7.bounceOff(wall1)
  laser7.bounceOff(wall2)

  player.collide(wall1)
  player.collide(wall2)

if(gameState==="level1"){ 

  if(keyDown(UP_ARROW)){
    player.y = player.y-5
}

 if(keyDown(DOWN_ARROW)){
   player.y = player.y+5
 }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x-5
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+5
  }
  }


 
  drawSprites();

}