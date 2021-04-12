class Paciente2 extends Paciente {
    constructor(posX,posY,imgPaciente, estado,tamX,tamY) {
        super(posX,posY,imgPaciente, estado,tamX,tamY);
        this.r = random(5);
        this.g = random(5);

    }

    pintarPaciente2() {
        image(this.imgPaciente,this.posX,this.posY,this.tamX,this.tamY);
        
        
    }

    pintarEnfermedad() {
        this.illness[floor(this.r)].pintar();
        this.illness[floor(this.g)].pintar();
    }

    getRandomIll() {
        return this.illness[floor(this.r)].index;
    }

    getRandomIll2() {
        return this.illness[floor(this.g)].index;
    }
}