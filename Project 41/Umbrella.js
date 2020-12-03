class Umbrella{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.r=r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,200, 200);
        pop();
    }
}