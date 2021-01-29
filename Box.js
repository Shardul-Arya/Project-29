class Box {
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          'IsStatic':false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rectMode(CENTER);
      stroke("black");
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      //push();
      //translate(this.body.position.x, this.body.position.y);
      //rotate(angle);
      //pop();
      //stroke("black");
      //fill("white");
    }
}
/*
class Box {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }

  display() {
    super.display();
    stroke("black");
    fill("white");
  }
};
*/