const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,ground2;
var rope;
var bob;

function setup() {
	engine = Engine.create();
	world = engine.world;

	createCanvas(400, 400);
	ground = new Ground(200,400,400,20);
	ground2 = new Ground(190,50,200,50);
	bob = new Bob(200,290,50);
	rope = new Chain(bob.body,ground2.body);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  ground.display();
  ground2.display();
  rope.display();
  bob.display();


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bob.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	bob = new Bob(200,290,50);
	rope = new Chain(bob.body,ground2.body);
	
}




