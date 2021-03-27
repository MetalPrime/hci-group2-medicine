class Nivel{
    constructor(posX,posY){
        this.posX=posX;
        this.posY=posY;
        this.bg = loadImage('./recursos/clinicaBG.png');
    }

    pintarBg(){
        image(this.bg, this.posX ,this.posY); 
        
    }

}