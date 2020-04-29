var robot,robotArm,robotArm2,robotHead,robotSprite,robotSprite2,robotSprite3;
function setup() {
  createCanvas(800,400);
  robotSprite = loadImage("sprites/Robot.png");
  robotSprite2 = loadImage("sprites/Sprite-0003.png");
  robotSprite3 = loadImage("sprites/Sprite-0005.png");
  robot = createSprite(400, 200, 70, 100);
  robotHead = createSprite(200,125,50,50);
  robot.addImage(robotSprite);
  robotHead.addImage(robotSprite2);
  robotArm = createSprite(365,175,20,50);
  robotArm2 = createSprite(365,175,20,50);
  robotArm.addImage(robotSprite3);
  robotArm2.addImage(robotSprite3);
}

function draw() {
  background(255,255,255);  
  robotArm.pointTo(mouseX,mouseY);
  robotArm2.pointTo(mouseX,mouseY);
  robotHead.x = robot.x;
  robotArm.x = robot.x - 35;
  robotArm2.x = robot.x + 35;
  robot.x = mouseX;
  drawSprites();
}