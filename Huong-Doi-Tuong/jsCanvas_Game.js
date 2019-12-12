function Ball(x,y,radius,color) {
    this.x=x;
    this.y=y;
    this.radius = radius;
    this.color = color;

    this.moveleft = function () {
         this.x -=10;
    }
    this.moveright = function () {
        this.x +=10;
    }
    this.moveDow = function () {
         this.y +=10;
    }
    this.moveUp = function () {
         this.y -=10;
    }
}
