class Enfermedad{
    constructor(imgEnfermedad, imgCara,imgBrazo, posX,posY, tamX,tamY){
        this.imgEnfermedad = loadImage(imgEnfermedad);
        this.imgCara = loadImage(imgCara);
        this.imgBrazo = loadImage(imgBrazo);
        this.posX = posX;
        this.posY = posY;
        this.tamX = tamX;
        this.tamY = tamY;
    }

    pintar() {
        image(this.imgCara,this.posX,this.posY,this.tamX,this.tamY);
        image(this.imgBrazo,this.posX,this.posY,this.tamX,this.tamY);
        image(this.imgEnfermedad,this.posX,this.posY,this.tamX,this.tamY);
        
    }
}