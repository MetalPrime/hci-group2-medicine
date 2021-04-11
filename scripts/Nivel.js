class Nivel{
    constructor(posX,posY){
        this.posX=posX;
        this.posY=posY;
        this.bg = loadImage('./recursos/clinicaBG.png');
        this.medicines = [];
        
        for(let i=0; i<6; i++){
            this.medicines[i] = new Medicine((125*i)+250,650,75,75,i);
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

    funcionarMedicina(index, posX,posY,tamX,tamY){
        
        for(let i=0; i<this.medicines.length;i++){
            if(this.medicines[i].getPosX()> posX && this.medicines[i].getPosX()< posX + tamX && 
                this.medicines[i].getPosY()> posY && this.medicines[i].getPosY()< posY + tamY ){
                    console.log("ent5rando");
                    if(this.medicines[i].getIndex() === index){
                        console.log('entro la medicina correcta');
                    } else{
                        console.log('no es la medicina correcta');
                    }
                } else {
                   // console.log("no ent5rando");
                }
        }
    }

}