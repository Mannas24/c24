const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,380,50,50);
    box2 = new Box(900,380,50,50);

    pig1 = new Pig(800,380)
    log1 = new Log(800,330,250,PI/2)

    box3 = new Box(700,300,50,50);
    box4 = new Box(900,300,50,50);

    pig2 = new Pig(800,300)
    log2 = new Log(800,250,250,PI/2)

    box5 = new Box(800,220,50,50);
    log3 = new Log(750,220,100,PI/7)
    log4 = new Log(850,220,100,-PI/7)

    bird = new Bird(200,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display()
    log1.display()
    box3.display();
    box4.display();
    pig2.display()
    log2.display()
    log3.display()
    log4.display()
    box5.display();
    bird.display()

}