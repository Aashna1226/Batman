var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var UmbObj;
var drops;
var thunder1_img, thunder2_img, thunder3_img, thunder4_img;
var thunder;
var thunderGroup;

function preload(){
    thunder1_img= loadImage("images/thunderbolt/1.png");
    thunder2_img= loadImage("images/thunderbolt/2.png");
    thunder3_img= loadImage("images/thunderbolt/3.png");
    thunder4_img= loadImage("images/thunderbolt/4.png");

}

function setup(){
   createCanvas(500,800);
   engine = Engine.create();
   world = engine.world;
    
   UmbObj = new Umbrella()

   var maxDrops=100;
   for(var i=0; i<maxDrops; i++){
       drops.push(new createDrop(random(0,400), random(0,400)));
   }
}

function draw(){
    background(0);

    UmbObj.display();
    drops.update();

    if(frameCount % 30 === 0){
        thunder = createSprite(random(100,1000), 0, 100, 100);
        thunder.velocity = 4;
        var light = Math.round(random(1,4));
        switch(light){
            case 1 :thunder.addImage("thunder1", thunder1_img);
            break;
            case 2: thunder.addImage("thunder2", thunder2_img);
            break;
            case 3: thunder.addImage("thunder3", thunder3_img);
            break;
            case 4: thunder.addImage("thunder4", thunder4_img);
            break;
        }
    }
    
}   

