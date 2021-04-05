class Medicine {
    constructor(posX,posY,tamX,tamY){
        this.posX=posX;
        this.posY=posY;
        this.imgMedicina = this.imgMedicina;
        this.tamX = tamX;
        this.tamY = tamY;
        this.medicinaAlergiaImg=loadImage('./recursos/medicina/Medicina__alergia.png');
        this.medicinaVertigoImg=loadImage('./recursos/medicina/Medicina__vertigo.png');
        this.medicinaFiebreImg=loadImage('./recursos/medicina/Medicina__fiebre.png');
        this.medicinaTosImg=loadImage('./recursos/medicina/Medicina__tos.png');
        this.medicinaDolorEstomagoImg=loadImage('./recursos/medicina/Medicina__dolorEstomago.png');
        this.medicinaDolorCabezaImg=loadImage('./recursos/medicina/Medicina__dolorCabeza.png');
      
      
       
    }

    pintar(imgMedicina){
        
        image(this.medicinaAlergiaImg,this.posX,this.posY,this.tamX,this.tamY);
       
        
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
  
  
    




}