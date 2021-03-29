
class Pantalla {

    constructor(posX, posY, bg) {
        this.posX = posX;
        this.posY = posY;
        this.bg = bg;
        this.current = loadImage(bg);
        this.imgBg = loadImage('./recursos/baseBg.jpg');
    }

    pintarPantalla() {

        image((this.bg == null ? this.imgBg : this.current), this.posY, this.posX, width, height);

    }

    pintarBtn(posX, posY, sizeX, sizeY,text) {
        fill(255,0,0);
        rect(posX,posY,sizeX,sizeY);
        //text(text,posX,posY);
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