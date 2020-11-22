class Ground
{
    constructor(x,y,width,height)
    {
        var options = {
            "restitution":0.3,
            "friction":0.5,
            'density':10,
            "isStatic":true
        }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    }

    display()
    {
        var gpos = this.body.position;
        push()
        translate(gpos.x,gpos.y)
        rectMode(CENTER)
        fill("white");
        rect(0,0,this.width,this.height);
        pop();

    }
}