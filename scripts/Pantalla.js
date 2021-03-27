
class Pantalla{

    constructor(posX, posY, bg){
        this.posX = posX;
        this.posY = posY;
        this.bg = bg;
    }

    pintarPantalla(){
        this.bg == null ? 
        image(loadImage(this.bg),this.posX,this.posY) 
        : image(loadImage('./recursos/baseBg.jpg',this.posX,this.posY,width,height),
        text("No hay lienzo",200,250));
    }
}