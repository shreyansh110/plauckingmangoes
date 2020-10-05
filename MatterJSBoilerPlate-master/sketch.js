
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 tree1=new Tree(300,200,50,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(215);
  tree1.display();
  drawSprites();
 
}



