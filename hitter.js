class Hitter{
    constructor(x,y){
      var options = {
        'restitution':0,
        'friction':0.1,
        'density':0.1
      }
      this.body = Bodies.rectangle(x,y,50,50,options)
      this.width=50;
      this.height=50;
      World.add(world, this.body);
      this.image=loadImage("polygon.png")
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image( this.image,0, 0, this.width, this.height);
        pop();
    }
}