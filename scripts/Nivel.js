class Nivel{
    constructor(posX,posY){
        this.posX=posX;
        this.posY=posY;
        this.bg = loadImage('./recursos/clinicaBG.png');
        this.medicines = [];
        
        for(let i=0; i<6; i++){
            this.medicines[i] = new Medicine((150*i)+150,500,100,100,i);
        }
        
      
    }

    pintarBg(){
        image(this.bg, this.posX ,this.posY); 
        
        
    }


    pintarMedicina(){
        for(let i=0; i<6; i++){
           
            this.medicines[i].pintar();

            
        }
    }

    aceptarMover(){
        for(let i=0; i<6; i++){
            this.medicines[i].aceptarMover();
        }
    }

    moverObjetos(){
        for(let i=0; i<6; i++){
           
            this.medicines[i].moverElemento();

            
        }
    }

    soltarMover(){
        for(let i=0; i<6; i++){
            this.medicines[i].soltarMover();
        }
    }

}