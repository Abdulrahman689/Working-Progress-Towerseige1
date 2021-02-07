const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var poly, rope,ground, world, bg

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

    poly = new Poly(200,350,50)
    rope = new Rope(poly.body,{x:200,y:300})
}

function draw()
{
    background("black")
    poly.display();
    rope.display();
}

function mouseDragged(){
	Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
	
	
	}
 	function mouseReleased (){
	rope.fly();
	
  }