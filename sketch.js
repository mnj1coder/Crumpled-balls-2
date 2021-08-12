
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(400,height-20,width,20);
	box1 = new Box(500,620,10,100);
	box2 = new Box(555+50,665,200,10);
	box3 = new Box(690+10,620,10,100);
	ball = new Ball(200,665,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  //box1.display();
  box2.display();
  //box3.display();
  ball.display();

 drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:0.1,y:-0.1})
}
}



