class Paciente1 extends Paciente {
    constructor(posX,posY,imgPaciente, estado,tamX,tamY) {
        super(posX,posY,imgPaciente, estado,tamX,tamY);
        this.r = random(5);
        console.log(this.illness[floor(this.r)].index);

    }

    pintarPaciente1() {
        image(this.imgPaciente,this.posX,this.posY,this.tamX,this.tamY);
        
        
    }

    pintarEnfermedad() {
        this.illness[floor(this.r)].pintar();
    }

    getRandomIll() {
        return this.illness[floor(this.r)].index;
    }
}
