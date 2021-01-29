const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1
var stand
var block1, block2, block3, block4, block5
var block6, block7, block8, block9, block10
var block11, block12, block13, block14, block15
var block16, block17, block18, block19, block20
var block21, block22, block23, block24, block25
var block26, block27, block28, block29, block30
var block31, block32, block33, block34, block35, block36

var polygon, slingShot

function preload() {
    
}

function setup() {
    var canvas = createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400,height,800,20);

    polygon = new Polygon(150, 200);

    stand = new Ground(500,350,550,20);

    //Bottom Row
    block1 = new Box(750,315,50,50, PI/2);
    block2 = new Box(700,315,50,50, PI/2);
    block3 = new Box(650,315,50,50, PI/2);
    block4 = new Box(600,315,50,50, PI/2);
    block5 = new Box(550,315,50,50, PI/2);
    block6 = new Box(500,315,50,50, PI/2);
    block7 = new Box(450,315,50,50, PI/2);
    block8 = new Box(400,315,50,50, PI/2);
    block9 = new Box(350,315,50,50, PI/2);
    block10 = new Box(300,315,50,50, PI/2);
    block11 = new Box(250,315,50,50, PI/2);
    //Row 2
    block12 = new Box(700,265,50,50, PI/2);
    block13 = new Box(650,265,50,50, PI/2);
    block14 = new Box(600,265,50,50, PI/2);
    block15 = new Box(550,265,50,50, PI/2);
    block16 = new Box(500,265,50,50, PI/2);
    block17 = new Box(450,265,50,50, PI/2);
    block18 = new Box(400,265,50,50, PI/2);
    block19 = new Box(350,265,50,50, PI/2);
    block20 = new Box(300,265,50,50, PI/2);
    //Row 3
    block21 = new Box(650,215,50,50, PI/2);
    block22 = new Box(600,215,50,50, PI/2);
    block23 = new Box(550,215,50,50, PI/2);
    block24 = new Box(500,215,50,50, PI/2);
    block25 = new Box(450,215,50,50, PI/2);
    block26 = new Box(400,215,50,50, PI/2);
    block27 = new Box(350,215,50,50, PI/2);
    //Row 4
    block28 = new Box(600,165,50,50, PI/2);
    block29 = new Box(550,165,50,50, PI/2);
    block30 = new Box(500,165,50,50, PI/2);
    block31 = new Box(450,165,50,50, PI/2);
    block32 = new Box(400,165,50,50, PI/2);
    //Row 5
    block33 = new Box(550,115,50,50, PI/2);
    block34 = new Box(500,115,50,50, PI/2);
    block35 = new Box(450,115,50,50, PI/2);
    //Top Row
    block36 = new Box(500,65,50,50, PI/2);

    slingShot = new SlingShot(polygon.body,{x:150, y:200});
}

function draw() {
    background(120);
    Engine.update(engine);
    stroke("black");
    fill("white");
    textSize(20);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 60, 30);

    ground1.display();
    stand.display();

    //Bottom Row
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    //Row 2
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    //Row 3
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    //Row 4
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    //Row 5
    block33.display();
    block34.display();
    block35.display();
    //Top Row
    block36.display();

    polygon.display();
    slingShot.display()

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}