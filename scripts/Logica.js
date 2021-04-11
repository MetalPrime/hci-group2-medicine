
class Logica {

  constructor() {
    this.nivel1 = new Nivel1(0, 0);
    this.flechaBtn = loadImage('./recursos/flecha.png');
    this.paciente = new Paciente1(450, 260, "./recursos/pacientes/p3Base.png", false, 500, 300);
    this.pacientesCurados = 0;
    this.pacientesNoCurados = 0;
  }

  pintarNivel1() {
    imageMode(CORNER);
    this.nivel1.pintarBg();
    this.paciente.pintar();
    this.paciente.pintarEnfermedad();
    this.nivel1.pintarMedicina();
    this.nivel1.funcionarMedicina(this.paciente.getRandomIll(), this.paciente.getPosX(), this.paciente.getPosY(), this.paciente.getTamX(), this.paciente.getTamY());
    if (this.nivel1.funcionarMedicina(this.paciente.getRandomIll(), this.paciente.getPosX(), this.paciente.getPosY(), this.paciente.getTamX(), this.paciente.getTamY())) {
      this.pintarBtn(1150, 650, 100, 50, "Sgte");
    }
  }

  aceptarMover() {
    this.nivel1.aceptarMover();
  }

  moverObjetos() {
    this.nivel1.moverObjetos();
  }

  soltarMover() {
    this.nivel1.soltarMover();
  }

  pintarBtn(posX, posY, sizeX, sizeY) {

    image(this.flechaBtn, posX, posY, sizeX, sizeY);


  }

  pintarBtnJugar(posX, posY, sizeX, sizeY) {

    image(this.jugarBtn, posX, posY, sizeX, sizeY);


  }

  sgtePantalla(pantalla) {
    this.pantalla = pantalla;
    return this.pantalla + 1;
  }

  passSgtePantalla(posX, posY, sizeX, sizeY, pantalla) {
    /*console.log(posY + " "+ mouseY);
    console.log(mouseX>posX )
    console.log(mouseX<(posX+sizeX) )
    console.log(mouseY>posY )
    console.log(mouseY<(posY+sizeY) )*/
    if (this.nivel1.funcionarMedicina(this.paciente.getRandomIll(), this.paciente.getPosX(), this.paciente.getPosY(), this.paciente.getTamX(), this.paciente.getTamY()) === true) {
      if (mouseX > posX && mouseX < (posX + sizeX) &&
        mouseY > posY && mouseY < (posY + sizeY)) {

        console.log("si entra" + pantalla);
        return this.sgtePantalla(pantalla);
      } else {
        console.log("no entra" + pantalla);
        return pantalla;
      }
    }



  }

}
