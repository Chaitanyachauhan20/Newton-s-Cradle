class Wallpaper{
    constructor(x,y,width,height){
  
    this.x = x;
    this.y = y;
  
    this.width = width;
    this.height = height;
    this.image = loadImage("Screenshot (46).png");
  
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.heights);
  
    World.add(world,this.body);
  
    }
  
    display(){
        
     imageMode(CENTER);
     image(this.image,378,400,850,800);
  
    }
  
  }
  
  
  