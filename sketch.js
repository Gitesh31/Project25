
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,bottom1,side1,side2,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(150,650,70);
	bottom1 = new Bottom(700,600,200,20);
	side1 = new Side(750,630,20,200);
	side2 = new Side(650,630,20,200);
	ground = new Ground(200,height,400,20)

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
 
  // displaying
  bottom1.display();
  side1.display();
  side2.display();
  paper1.display();
  ground.display();
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Bodies.applyForce(paper,paper.body.position,{x:85,y:-85});
	}
}



