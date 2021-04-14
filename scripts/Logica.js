let clickAyuda;
let pedirAyuda;
let timer;
let pantalla2;
let timer2;

class Logica {

  constructor() {
    this.nivel1 = new Nivel1(0, 0);
    this.nivel2 = new Nivel1(0, 0);
    this.darAltaBtn = loadImage('./recursos/altaBtn.png');
    this.paciente1 = new Paciente1(450, 260, "./recursos/pacientes/p3Base.png", false, 500, 300);
    this.paciente2 = new Paciente1(450, 260, "./recursos/pacientes/p2Base.png", false, 500, 300);
    this.paciente3 = new Paciente2(450, 260, "./recursos/pacientes/p1Base.png", false, 500, 300);
    this.paciente4 = new Paciente2(450, 260, "./recursos/pacientes/p3Base.png", false, 500, 300);
    this.paciente5 = new Paciente3(450, 260, "./recursos/pacientes/p2Base.png", false, 500, 300);
    this.paciente6 = new Paciente3(450, 260, "./recursos/pacientes/p1Base.png", false, 500, 300);

    this.signoPregunta = loadImage('./recursos/signoPregunta.png');
    this.pacientesCurados = 0;
    this.pacientesNoCurados = 0;
    timer2 = 120;
    this.pantalla2 = 0;
    clickAyuda = false;
    pedirAyuda = true;
    timer = 5;
    this.pacientes = 0;
  }

  pintarNivelesBase() {
    imageMode(CORNER);
    this.nivel1.pintarBg();
    this.nivel1.pintarMedicina();
  }

  pintarNivel1() {
    imageMode(CORNER);
    this.paciente1.pintarPaciente();
    this.paciente1.pintarEnfermedad();

    if (pedirAyuda == true) {
      this.pintarBtnAyuda();
    }
    if (clickAyuda == true) {
      this.nivel1.pintarAyuda();
      this.ayudaDesaparece();
    }

    fill(52, 179, 179);
    noStroke();
    rect(50, 20, 100, 50, 20, 20, 20, 20);

    fill(255);
    textSize(24);
    text(timer2, 70, 50);

    
    this.nivel1.funcionarMedicina(this.paciente1.getRandomIll(), this.paciente1.getPosX(), this.paciente1.getPosY(), this.paciente1.getTamX(), this.paciente1.getTamY());
    this.pintarBtn(1150, 650, 100, 50);
      console.log(this.pacientes);
    
    
  }

  pintarNivel2() {
    imageMode(CORNER);
    this.paciente2.pintarPaciente();
    this.paciente2.pintarEnfermedad();

    if (pedirAyuda == true) {
      this.pintarBtnAyuda();
    }
    if (clickAyuda == true) {
      this.nivel1.pintarAyuda();
      this.ayudaDesaparece();
    }

    fill(52, 179, 179);
    noStroke();
    rect(50, 20, 100, 50, 20, 20, 20, 20);

    fill(255);
    textSize(24);
    text(timer2, 70, 50);
    this.nivel1.funcionarMedicina(this.paciente2.getRandomIll(), this.paciente2.getPosX(), this.paciente2.getPosY(), this.paciente2.getTamX(), this.paciente2.getTamY());
    this.pintarBtn(1150, 650, 100, 50);

  }

  pintarNivel3() {
    imageMode(CORNER);
    this.paciente3.pintarPaciente();
    this.paciente3.pintarEnfermedad();

    if (pedirAyuda == true) {
      this.pintarBtnAyuda();
    }
    if (clickAyuda == true) {
      this.nivel1.pintarAyuda();
      this.ayudaDesaparece();
    }

    fill(52, 179, 179);
    noStroke();
    rect(50, 20, 100, 50, 20, 20, 20, 20);

    fill(255);
    textSize(24);
    text(timer2, 70, 50);
    this.nivel1.funcionarMedicina2(this.paciente3.getRandomIll(),this.paciente3.getRandomIll2, this.paciente3.getPosX(), this.paciente3.getPosY(), this.paciente3.getTamX(), this.paciente3.getTamY());
    this.pintarBtn(1150, 650, 100, 50);
  }

  pintarNivel4(){
    imageMode(CORNER);
    this.paciente4.pintarPaciente();
    this.paciente4.pintarEnfermedad();

    if (pedirAyuda == true) {
      this.pintarBtnAyuda();
    }
    if (clickAyuda == true) {
      this.nivel1.pintarAyuda();
      this.ayudaDesaparece();
    }

    fill(52, 179, 179);
    noStroke();
    rect(50, 20, 100, 50, 20, 20, 20, 20);

    fill(255);
    textSize(24);
    text(timer2, 70, 50);
    this.nivel1.funcionarMedicina2(this.paciente4.getRandomIll(),this.paciente4.getRandomIll2, this.paciente4.getPosX(), this.paciente4.getPosY(), this.paciente4.getTamX(), this.paciente4.getTamY());
    this.pintarBtn(1150, 650, 100, 50);
  }

  pintarNivel5(){
    imageMode(CORNER);
    this.paciente5.pintarPaciente();
    this.paciente5.pintarEnfermedad();

    if (pedirAyuda == true) {
      this.pintarBtnAyuda();
    }
    if (clickAyuda == true) {
      this.nivel1.pintarAyuda();
      this.ayudaDesaparece();
    }

    fill(52, 179, 179);
    noStroke();
    rect(50, 20, 100, 50, 20, 20, 20, 20);

    fill(255);
    textSize(24);
    text(timer2, 70, 50);
    this.nivel1.funcionarMedicina3(this.paciente5.getRandomIll(),this.paciente5.getRandomIll2, this.paciente5.getRandomIll3,this.paciente5.getPosX(), this.paciente5.getPosY(), this.paciente5.getTamX(), this.paciente5.getTamY());
    this.pintarBtn(1150, 650, 100, 50);
  }

pintarNivel6(){
    imageMode(CORNER);
    this.paciente6.pintarPaciente();
    this.paciente6.pintarEnfermedad();

    if (pedirAyuda == true) {
      this.pintarBtnAyuda();
    }
    if (clickAyuda == true) {
      this.nivel1.pintarAyuda();
      this.ayudaDesaparece();
    }

    fill(52, 179, 179);
    noStroke();
    rect(50, 20, 100, 50, 20, 20, 20, 20);

    fill(255);
    textSize(24);
    text(timer2, 70, 50);
    this.nivel1.funcionarMedicina3(this.paciente6.getRandomIll(),this.paciente6.getRandomIll2, this.paciente6.getRandomIll3,this.paciente6.getPosX(), this.paciente6.getPosY(), this.paciente6.getTamX(), this.paciente6.getTamY());
    this.pintarBtn(1150, 650, 100, 50);
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
    image(this.darAltaBtn, posX, posY, sizeX, sizeY);
  }

  pintarBtnJugar(posX, posY, sizeX, sizeY) {
    image(this.jugarBtn, posX, posY, sizeX, sizeY);
  }

  pintarBtnAyuda() {
    image(this.signoPregunta, 50, 660, 30, 47);
  }

  sgteNivel(pacientes) {
    return pacientes + 1;
  }

  passSgteNivel(posX, posY, sizeX, sizeY, pantalla) {



      if (mouseX > posX && mouseX < (posX + sizeX) &&
        mouseY > posY && mouseY < (posY + sizeY)) {

        console.log("si entra" + pantalla);
        return this.sgteNivel(pantalla);
      } else {
        console.log("no entra" + pantalla);
        return pantalla;
      }
    



  }

  //////AYUDAME PAPITO 

  clicAyuda() {
    clickAyuda = true;


  }

  ayudaDesaparece() {
    if (frameCount % 60 == 0 && timer > 0) {
      timer--;
    }
    if (timer == 0) {
      clickAyuda = false;
      pedirAyuda = false;
    }
  }


  timerOff() {


    if (frameCount % 60 == 0 && timer2 > 0) {

      timer2--;
    }
    if (timer2 == 0) {

      this.pantalla2 = 5;

    }
  }

  getPantalla2() {
    return this.pantalla2;
  }


}
