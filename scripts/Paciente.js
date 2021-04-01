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
        for(let i=0; i<4; i++){
            this.illness[i] = new Enfermedad(`./recursos/pacientes/enfermedad/enfer${i}.png`,`./recursos/pacientes/caras/cara${i}.png`,`./recursos/pacientes/brazos/brazo${i}.png`,490,315,60,35);
        }
       //
    }

    pintar(){
      
       image(this.loadImg,this.posX,this.posY);
        
    }

}