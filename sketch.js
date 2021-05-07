var movingRect;
var fixedRect;

function setup() {
  createCanvas(windowWidth,windowHeight);

  movingRect = createSprite(200,200,30,100);
  fixedRect = createSprite(500,200,100,30);

  movingRect.shapeColor = "black";
  fixedRect.shapeColor = "black";
}

function draw() {
  background(255,255,255); 
  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.x - movingRect.x  < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 )
    {
    movingRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "black";
  }

  drawSprites();
}

