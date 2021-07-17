const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,mario,ground;



function setup() {
  createCanvas(1500,700);

  bg = loadImage("background.jpg");
  mario = loadImage("mario.png");

  ground = new Ground(0,1450,1000,10);
  

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(bg);
  Engine.update(engine);
  ground.display();
}

