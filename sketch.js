
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trees,floor,mango1,boy1;

function preload()
{
	
}

function setup() {
	createCanvas(1700,1300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	trees=new tree(650,1000);
	floor=new ground(100,300,100,20)
	mango1=new mango(600,600,50,90)
	boy1=new boy(500,800,100,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  trees.display();
  floor.display();
  mango1.display();
  boy1.display();
}