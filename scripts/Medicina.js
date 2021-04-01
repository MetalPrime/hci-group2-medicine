class Medicine {
    constructor(imgMedicina,posX,posY,tamX,tamY){
        this.posX=posX;
        this.posY=posY;
        //this.imgMedicina = loadImage(imgMedicina);
        this.tamX = tamX;
        this.tamY = tamY;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
       
    }

    pintar(){
        fill(this.r,this.g,this.b);
            rect(this.posX,this.posY,this.tamX,this.tamY);
        
    }
    
}