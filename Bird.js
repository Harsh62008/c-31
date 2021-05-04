class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png"); 
    this.smoke=loadImage('sprites/smoke.png');
    this.traijectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y];
      this.traijectory.push(position);
    }
   
for(var i=0;i<this.traijectory.length;i++){
  image(this.smoke,this.traijectory[i][0],this.traijectory[i][1]);
}

  }
}
