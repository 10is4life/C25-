//extends- helps to create a child class
class Bird extends Baseclass {
    constructor(x, y) {
      //super()- inherit all the properties and functions from the baseclass
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
      
    };
    display(){
     
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
      
    };
  };
  