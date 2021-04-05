class Nivel{
    constructor(posX,posY){
        this.posX=posX;
        this.posY=posY;
        this.bg = loadImage('./recursos/clinicaBG.png');
        this.medicines = [];
        
        for(let i=0; i<5; i++){
            this.medicines[i] = new Medicine((150*i)+150,500,100,100);
            
            
        }
    }

    pintarBg(){

        image(this.bg, this.posX ,this.posY); 
        for(let i=0; i<5; i++){
           
            this.medicines[i].pintar();

            
        }
        
    }

}