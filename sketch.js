const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var myengine, myworld,ground;
 var ball;

function setup()
 {
   
  createCanvas(600,600);

  myengine=Engine.create();
  myworld=myengine.world;

  var groundoptions =
  {
      isStatic : true

  }

  ground=Bodies.rectangle(300,580,40,40,groundoptions);
  World.add(myworld,ground);

  var balloptions =
   {
     restitution  : 0.7777




  }
  ball = Bodies.circle(300,300,20,balloptions);
  World.add(myworld,ball);

console.log(ball);


 
}

function draw() {
  background(0);  
   
  Engine.update(myengine);

  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,600,40);
  ellipseMode(RADIUS);
  fill("yellow")
  ellipse(ball.position.x,ball.position.y,20,20);
  
}