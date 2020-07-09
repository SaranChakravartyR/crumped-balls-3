var paperObject,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


    wall1 = createSprite(600,650,200,20);
	wall1.shapeColor = "red";

	wall2 = createSprite(500,610,20,100);
	wall2.shapeColor = "red";

	wall3 = createSprite(700,610,20,100);
	wall3.shapeColor = "red";




	engine = Engine.create();
	world = engine.world;

	paperObject = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, paperObject);


	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 


	 paperObject = new Paper(85,600,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paperObject.display();
  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	   
	 }
   }


