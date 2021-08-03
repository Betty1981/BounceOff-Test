var a,b,car,wall,edg;
function setup() {
  createCanvas(400,400);

  a=createSprite(400, 200, 30, 30);
  a.shapeColor="red";
  a.velocityX=-2;
  //a.velocityY=-2;
  a.debug="true";

  b=createSprite(200,300,50,50);
  b.shapeColor="red";
  b.debug="true";
  b.velocityY=2;
  b.velocityX=2;
  car=createSprite(30,200,20,20);
  car.shapeColor="green";
  car.velocityX=-3;
  //car.velocityY=3;

  wall=createSprite(300,200,20,100);
  wall.shapeColor="brown";

  edg=createEdgeSprites();
}

function draw() {
  background(0); 
  //a.x=World.mouseX;
 // a.y=World.mouseY; 
 
  /*if(isTouching(car,a)){
    textSize(40);
   //text("Touched",100,200);
   car.setVelocity(0,0);
   a.shapeColor="violet";
   car.shapeColor="aqua";
  }else{
    text("Not Touched",200,200);
  }*/
 if(isTouching(a,car)){
   a.shapeColor="blue";
   car.shapeColor="blue"
 }
 else{
  a.shapeColor="red";
  car.shapeColor="yellow"
 }
  bouncing(a,b);
 // bouncing(car,b);
a.bounceOff(edg);
car.bounceOff(edg);
b.bounceOff(edg);
   
  drawSprites();
}

  