
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_option={
		isstatic:false,
		restitution:0.3,
		friction:0.5,
		density:0.1,
		
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    groundObj=new Bodies(width/2,600,width,20)
	leftside = new Bodies(1100,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  groundObj.display()
}



