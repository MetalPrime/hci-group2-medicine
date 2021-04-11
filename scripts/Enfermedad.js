class Enfermedad{
    constructor(imgEnfermedad, imgCara, posX,posY, tamX,tamY){
        this.imgEnfermedad = loadImage(imgEnfermedad);
        this.imgCara = loadImage(imgCara);
        this.posX = posX;
        this.posY = posY;
        this.tamX = tamX;
        this.tamY = tamY;
    }

    pintar() {
        imageMode(CENTER);
        image(this.imgCara,this.posX+25,this.posY+15,this.tamX,this.tamY);
       
        image(this.imgEnfermedad,this.posX+20,this.posY+20,this.tamX+20,this.tamY+25);
        
    }
}