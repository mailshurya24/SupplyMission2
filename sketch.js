var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var leftEdgeBody, rightEdgeBody, bottomBody;
var leftEdgeSprite, rightEdgeSprite, bottomSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	leftEdgeBody = Bodies.rectangle((width/2)-15,height-50,20,100);
	rightEdgeBody = Bodies.rectangle((width/2)+15,height-35,20,100);
	bottomBody = Bodies.rectangle(width/2,height-20,200,20);



	leftEdgeBody = color(350,0,0);
	rightEdgeBody = color(350,0,0);
	bottomBody = color(350,0,0);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	leftEdgeBody.body.position.x = leftEdgeSprite.x;
	rightEdgeBody.position.x = rightEdgeSprite.x;
	bottomBody.position.x = bottomSprite.x;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) 
 {
     Matter.Body.setStatic(packageBody,false);  
 }
}



