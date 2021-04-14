class Enfermedad{
    constructor(imgEnfermedad, imgCara, posX,posY, tamX,tamY,index){
        this.imgEnfermedad = loadImage(imgEnfermedad);
        this.imgCara = loadImage(imgCara);
        this.posX = posX;
        this.posY = posY;
        this.tamX = tamX;
        this.tamY = tamY;
        this.index = index;
    }

    pintar() {
        imageMode(CENTER);
        if(this.index === 1){
            image(this.imgEnfermedad,this.posX+20,this.posY+100,this.tamX+20,this.tamY+25);
            image(this.imgCara,this.posX+25,this.posY+15,this.tamX,this.tamY);


        } else if (this.index === 4){
            image(this.imgEnfermedad,this.posX+20,this.posY-40,this.tamX+20,this.tamY+25);
            image(this.imgCara,this.posX+25,this.posY+15,this.tamX,this.tamY);


        } else {
            image(this.imgCara,this.posX+25,this.posY+15,this.tamX,this.tamY);
       
            image(this.imgEnfermedad,this.posX+20,this.posY+20,this.tamX+20,this.tamY+25);
        }


        
    }
}