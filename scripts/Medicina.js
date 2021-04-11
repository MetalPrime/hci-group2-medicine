class Medicine {
    constructor(posX,posY,tamX,tamY,index){
        this.posX=posX;
        this.posY=posY;
        this.index=index;
        this.tamX = tamX;
        this.tamY = tamY;
        this.medicinaAlergiaImg=loadImage('./recursos/medicina/Medicina__alergia.png');
        this.medicinaVertigoImg=loadImage('./recursos/medicina/Medicina__vertigo.png');
        this.medicinaFiebreImg=loadImage('./recursos/medicina/Medicina__fiebre.png');
        this.medicinaTosImg=loadImage('./recursos/medicina/Medicina__tos.png');
        this.medicinaDolorEstomagoImg=loadImage('./recursos/medicina/Medicina__dolorEstomago.png');
        this.medicinaDolorCabezaImg=loadImage('./recursos/medicina/Medicina__dolorCabeza.png');
        this.basePosX = posX;
        this.basePosY = posY;
        this.aceptarMovimiento = false;
       
    }

    pintar(){

        switch(this.index){
            case 0:
                image(this.medicinaDolorCabezaImg,this.posX,this.posY,this.tamX,this.tamY);

                break;
            case 1:
                image(this.medicinaDolorEstomagoImg,this.posX,this.posY,this.tamX,this.tamY);

                break;
            case 2:
                image(this.medicinaTosImg,this.posX,this.posY,this.tamX,this.tamY);

                break;
            case 3:
                image(this.medicinaFiebreImg,this.posX,this.posY,this.tamX,this.tamY);

                break;
            case 4:
                image(this.medicinaVertigoImg,this.posX,this.posY,this.tamX,this.tamY);

                break;
            case 5:
                image(this.medicinaAlergiaImg,this.posX,this.posY,this.tamX,this.tamY);

                break;
        }
        
       
       
        
    }

    aceptarMover(){
        if(mouseX>this.posX && mouseX<(this.posX+this.tamX)
        && mouseY>this.posY && mouseY<(this.posY+this.tamY)
        ){
            this.aceptarMovimiento = true;
        }  
    }

    moverElemento(){
        if(this.aceptarMovimiento === true){
            this.posX = mouseX;
            this.posY = mouseY;
        } else {


        }
    }

    soltarMover(){
        this.aceptarMovimiento = false;
    }




    getMedicinaAlergiaImg(){
        return this.medicinaAlergiaImg;
    }
    getMedicinaVertigoImg(){
        return this.medicinaVertigoImg;
    }
    getMedicinaDolorCabezaImg(){
        return this.medicinaDolorCabezaImg;
    }
    getMedicinaDolorEstomagoImg(){
        return this.medicinaDolorEstomagoImg;
    }
  
    getMedicinaTosImg(){
        return this.medicinaTosImg;
    }
    getMedicinaFiebreImg(){
        return this.medicinaFiebreImg;
    }


    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }
    setPosX(posX){
        this.posX = posX;
    }
    setPosY(posY){
        this.posY = posY;
    }

    getTamX(){
        return this.tamX;
    }
    getTamY(){
        return this.tamY;
    }
    setTamX(tamX){
        this.tamX = tamX;
    }
    setTamY(tamY){
        this.tamY = tamY;
    }
    getIndex(){
        return this.index;
    }
    setIndex(index){
        this.index = index;
    }




}