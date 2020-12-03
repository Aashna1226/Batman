class Drop {
    constructor(x,y,r){
        var options={
            restitution:0.4,
            friction:0.1
        }
        this.r=r;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world, this.body);
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }


    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(27,115,231)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
}