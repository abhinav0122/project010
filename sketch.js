var sea,ship
var shiping,seaing
function preload(){
seaing=loadImage("sea.png")
shiping=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
 sea = createSprite(400,200)
 sea.addImage(seaing)
 sea.scale=.3
 sea.velocityX=-5
 ship =createSprite(130,200,30,30)
 ship.addAnimation("moving",shiping)  
 ship.scale=.2
}

function draw() {
  background("seaing");
 if (sea.x<0){
 sea.x=400
 }
drawSprites()

}