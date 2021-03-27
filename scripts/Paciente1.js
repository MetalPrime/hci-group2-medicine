class Paciente1 extends Paciente {
    constructor(posX, posY) {
        super(posX, posY);
        this.paciente = loadImage('./recursos/pacientes/p1Enferma1.png');
        
    
    }

    pintarPaciente1() {
        image(this.paciente, 0 ,0);
        
    }

}
