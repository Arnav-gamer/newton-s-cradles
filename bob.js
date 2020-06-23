class Bob{
    constructor(x,y,radius){
    var options={
       isStatic:true,
       
   }
    this.body=Bodies.circle(x,y,radius,options);
   this.radius=radius;
    World.add(world,this.body)
    
    }

    leave(){
        this.bob.bodyA=null;
    }

    display(){
        var pos=this.body.position;        
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x,pos.y,this.radius);

   }

}