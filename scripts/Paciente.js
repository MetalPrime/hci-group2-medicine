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
        for(let i=0; i<5; i++){
            this.illness[i] = new Enfermedad(`./recursos/pacientes/enfermedad/enfer${i}.png`,`./recursos/pacientes/caras/cara${i}.png`,490,315,60,35,i);
        }
       //
    }

    pintar(){
      
       image(this.loadImg,this.posX,this.posY);
        
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
}