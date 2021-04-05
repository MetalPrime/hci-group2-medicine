
class Pantalla {

    constructor(posX, posY, bg) {
        this.posX = posX;
        this.posY = posY;
        this.bg = bg;
        this.current = loadImage(bg);
        this.imgBg = loadImage('./recursos/baseBg.jpg');
        this.flechaBtn = loadImage('./recursos/flecha.png');
        this.jugarBtn = loadImage('./recursos/Boton--jugar.png');

    }

    pintarPantalla() {

        image((this.bg == null ? this.imgBg : this.current), this.posY, this.posX, width, height);

    }

    pintarBtn(posX, posY, sizeX, sizeY) {
        
        image(this.flechaBtn,posX,posY,sizeX,sizeY);
        
       
    }

    pintarBtnJugar(posX, posY, sizeX, sizeY) {
        
        image(this.jugarBtn,posX,posY,sizeX,sizeY);
        
       
    }

    sgtePantalla(pantalla) {
        this.pantalla = pantalla;
        return this.pantalla+1;
    }

    passSgtePantalla(posX,posY,sizeX,sizeY,pantalla){
        /*console.log(posY + " "+ mouseY);
        console.log(mouseX>posX )
        console.log(mouseX<(posX+sizeX) )
        console.log(mouseY>posY )
        console.log(mouseY<(posY+sizeY) )*/
        if(mouseX>posX && mouseX<(posX+sizeX) && 
            mouseY>posY && mouseY<(posY+sizeY)){
                
                console.log("si entra"+pantalla);
                return this.sgtePantalla(pantalla);
            } else{
                console.log("no entra"+pantalla);
                return pantalla;
            }

            
    }


}