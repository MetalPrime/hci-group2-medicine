let clickAyuda;
let pedirAyuda;
let timer;
let pantalla2;
let  timer2 ;
class Logica {

  constructor() {
    this.nivel1 = new Nivel1(0, 0);
    this.darAltaBtn = loadImage('./recursos/altaBtn.jpg');
    this.paciente = new Paciente1(450, 260, "./recursos/pacientes/p3Base.png", false, 500, 300);
    this.signoPregunta = loadImage('./recursos/signoPregunta.png');
    this.pacientesCurados = 0;
    this.pacientesNoCurados = 0;
    timer2=120;
    this.pantalla2=0;
    clickAyuda=false;
    pedirAyuda=true;
    timer=5;
  }

  pintarNivel1() {
    imageMode(CORNER);
    this.nivel1.pintarBg();
    this.paciente.pintar();
    this.paciente.pintarEnfermedad();
    this.nivel1.pintarMedicina();

    if(pedirAyuda==true){
      this.pintarBtnAyuda();
    }
    if(clickAyuda==true){
      this.nivel1.pintarAyuda();
      this.ayudaDesaparece();
    }
   
    fill(52, 179, 179);
    noStroke();
    rect(50,20,100,50,20, 20, 20, 20);
    
    fill(255);
    textSize(24);
    text(timer2,70,50);

    this.nivel1.funcionarMedicina(this.paciente.getRandomIll(), this.paciente.getPosX(), this.paciente.getPosY(), this.paciente.getTamX(), this.paciente.getTamY());
    this.pintarBtn(1150, 650, 100, 50);
    if (this.nivel1.funcionarMedicina(this.paciente.getRandomIll(), this.paciente.getPosX(), this.paciente.getPosY(), this.paciente.getTamX(), this.paciente.getTamY())) {
     
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
    image(this.darAltaBtn, posX, posY, sizeX, sizeY);
  }

  pintarBtnJugar(posX, posY, sizeX, sizeY) {
    image(this.jugarBtn, posX, posY, sizeX, sizeY);
  }

  pintarBtnAyuda(){
    image(this.signoPregunta, 50,660,30,47); 
  }

  sgtePantalla(pantalla) {
    this.pantalla = pantalla;
    return this.pantalla + 1;
  }

  passSgtePantalla(posX, posY, sizeX, sizeY, pantalla) {
 


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

  //////AYUDAME PAPITO 

  clicAyuda(){
     clickAyuda=true;
    

  }

  ayudaDesaparece(){
    if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
    if (timer == 0) {
      clickAyuda=false;
      pedirAyuda=false;
    }
  }


  timerOff(){
    
  
  if (frameCount % 60 == 0 && timer2 > 0) { 
    
    timer2 --;
  }
  if (timer2 == 0) {
    
    this.pantalla2=5;
    
  }
  }

getPantalla2(){
    return this.pantalla2;
}


}
