const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var ground;
var ball;
var rope;
var box1,box2,box3,box4,box5,box6,box7

function setup(){
    createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,550,1200,20);
    ball = new Ball(200,100,40,40);
    rope = new Rope(ball.body, {x: 200, y: 50});

    box1  = new Box(500,500,70,80);
    box2  = new Box(500,450,70,80);
    box3  = new Box(500,400,70,80);
    box4  = new Box(500,350,70,80);
    box5  = new Box(500,300,70,80);
    box6  = new Box(500,250,70,80);
    box7  = new Box(500,200,70,80);
    
    box11  = new Box(570,500,70,80);
    box21  = new Box(570,450,70,80);
    box31  = new Box(570,400,70,80);
    box41 = new Box(570,350,70,80);
    box51  = new Box(570,300,70,80);
    box61  = new Box(570,250,70,80);

    box12  = new Box(640,500,70,80);
    box22  = new Box(640,450,70,80);
    box32  = new Box(640,400,70,80);
    box42 = new Box(640,350,70,80);
    box52  = new Box(640,300,70,80);

    box13  = new Box(710,500,70,80);
    box23  = new Box(710,450,70,80);
    box33  = new Box(710,400,70,80);
    box43 = new Box(710,350,70,80);

    box14  = new Box(780,500,70,80);
    box24  = new Box(780,450,70,80);
    box34  = new Box(780,400,70,80);

    box15  = new Box(850,500,70,80);
    box25  = new Box(850,450,70,80);

    box16  = new Box(920,500,70,80);



}
function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    ball.display();
    rope.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box11.display();
    box21.display();
    box31.display();
    box41.display();
    box51.display();
    box61.display();
    box12.display();
    box22.display();
    box32.display();
    box42.display();
    box52.display();
    box13.display();
    box23.display();
    box33.display();
    box43.display();
    box14.display();
    box24.display();
    box34.display();
    box15.display();
    box25.display();
    box16.display();


    
    

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y:mouseY});

}