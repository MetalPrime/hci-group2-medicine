class Paciente{
    constructor(posX,posY,imgPaciente, estado,tamX,tamY){
        this.posX=posX;
        this.posY=posY;
        this.imgPaciente = imgPaciente;
        this.estado = estado;
        this.tamX = tamX;
        this.tamY = tamY;
        this.loadImg = loadImage(imgPaciente);
        this.illness = [];
       
    }

    pintar(){
      
       image(this.loadImg,this.posX,this.posY);
        
    }

}