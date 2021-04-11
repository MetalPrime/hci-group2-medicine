
class Logica{
  
  constructor(){
    this.nivel1 = new Nivel1(0,0);
    
    this.paciente = new Paciente1(450,260,"./recursos/pacientes/p3Base.png",false,500,300);
  }

  pintarNivel1(){
    imageMode(CORNER);
    this.nivel1.pintarBg();
    this.paciente.pintar();
    this.paciente.pintarEnfermedad();
    this.nivel1.pintarMedicina();
  }


  moverObjetos(){
    this.nivel1.moverObjetos();
  }






}
