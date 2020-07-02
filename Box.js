class Box extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if (this.body.speed<11){
             push();
             translate(pos.x,pos.y);
             rectMode(CENTER);
             rotate(angle);
             strokeWeight(3);
             fill(255);
             rect(0,0,this.width,this.height);
             pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity -1;
            tint(255,this.Visiblity);
            pop();
            

        }       
    }
    
        score(){
           if(this.Visiblity < 4 && this.Visiblity>-1005){
              score = score++
            }
        }
        
    
}