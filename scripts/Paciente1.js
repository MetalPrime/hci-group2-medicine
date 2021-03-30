class Paciente1 extends Paciente {
    constructor(posX,posY,imgPaciente, estado,tamX,tamY) {
        super(posX,posY,imgPaciente, estado,tamX,tamY);
        
        
    
    }

    pintarPaciente1() {
        image(this.imgPaciente,this.posX,this.posY,this.tamX,this.tamY);
        
    }

}
