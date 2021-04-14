class Nivel{
    constructor(posX,posY){
        this.posX=posX;
        this.posY=posY;
        this.bg = loadImage('./recursos/clinicaBG.png');
        this.helpPopup = loadImage('./recursos/enferPopup.png');
        this.charola = loadImage('./recursos/medicina/Charola--medicina.png');

        this.medicines = [];
        
        for(let i=0; i<6; i++){
            this.medicines[i] = new Medicine((125*i)+250,650,75,75,i);
        }
        
      
    }

    pintarBg(){
        image(this.bg, this.posX ,this.posY); 
        image(this.charola, 130 ,620, 860, 99); 
        
        
    }


    pintarMedicina(){
        for(let i=0; i<6; i++){
           
            this.medicines[i].pintar();

            
        }
    }

    pintarAyuda(){
        image(this.helpPopup, 560,600); 
        


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
                   
                    if(this.medicines[i].getIndex() === index){
                        console.log("entra la medicina")
                        return true;
                    } else{
                        console.log("no entra la medicina");
                        return false;
                    }
                } 
        }
    }

    funcionarMedicina2(index1, index2, posX,posY,tamX,tamY){
        for(let i=0; i<this.medicines.length;i++){
            if(this.medicines[i].getPosX()> posX && this.medicines[i].getPosX()< posX + tamX && 
                this.medicines[i].getPosY()> posY && this.medicines[i].getPosY()< posY + tamY ){
                   
                    if(this.medicines[i].getIndex() === index1){
                        if(this.medicines[i].getIndex() === index2){
                            console.log("entra la medicina")
                            return true;
                        } else {
                            console.log("no entra la medicina");
                            return false;
                        }
                        
                    } 
                } 
        }
    }

    funcionarMedicina3(index1, index2, index3, posX,posY,tamX,tamY){
        for(let i=0; i<this.medicines.length;i++){
            if(this.medicines[i].getPosX()> posX && this.medicines[i].getPosX()< posX + tamX && 
                this.medicines[i].getPosY()> posY && this.medicines[i].getPosY()< posY + tamY ){
                   
                    if(this.medicines[i].getIndex() === index1){
                        if(this.medicines[i].getIndex() === index2){
                            if(this.medicines[i].getIndex() === index3){
                                console.log("entra la medicina")
                                return true;
                            } else {
                                console.log("no entra la medicina");
                                return false;
                            }
                            
                        
                        }
                    } 
                } 
        }
    }

}