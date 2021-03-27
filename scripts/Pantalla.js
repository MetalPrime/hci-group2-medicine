
class Pantalla{

    constructor(posX, posY, bg){
        this.posX = posX;
        this.posY = posY;
        this.bg = bg;
        this.current = loadImage(bg);
        this.imgBg = loadImage('./recursos/baseBg.jpg');
        console.log(bg);
    }

      pintarPantalla (){

        image((this.bg==null? this.imgBg: this.current ),this.posY,this.posX,width,height);
       
    }
}