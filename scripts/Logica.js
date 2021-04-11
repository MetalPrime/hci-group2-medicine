
class Logica{
  
  constructor(){
    this.nivel1 = new Nivel1(0,0);
    
    this.paciente = new Paciente1(450,260,"./recursos/pacientes/p3Base.png",false,500,300);
    this.pacientesCurados = 0;
    this.pacientesNoCurados = 0;
  }

  pintarNivel1(){
    imageMode(CORNER);
    this.nivel1.pintarBg();
    this.paciente.pintar();
    this.paciente.pintarEnfermedad();
    this.nivel1.pintarMedicina();
    this.nivel1.funcionarMedicina(this.paciente.getRandomIll(), this.paciente.getPosX(), this.paciente.getPosY(),this.paciente.getTamX(), this.paciente.getTamY());
  }

  aceptarMover(){
    this.nivel1.aceptarMover();
  }

  moverObjetos(){
    this.nivel1.moverObjetos();
  }

  soltarMover(){
    this.nivel1.soltarMover();
  }

}
