
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
        rect(posX,posY,sizeX,sizeY);
        text(text,posX,posY);
    }

    sgtePantalla(pantalla) {
        this.pantalla = pantalla;
        return this.pantalla++;
    }


}