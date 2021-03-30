class Paciente{
    constructor(posX,posY,imgPaciente, estado,tamX,tamY){
        this.posX=posX;
        this.posY=posY;
        this.imgPaciente = imgPaciente;
        this.estado = estado;
        this.tamX = tamX;
        this.tamY = tamY;
      
       
    }

    pintar(){
      
       image(this.imgPaciente,this.posX,this.posY);
        
    }

}