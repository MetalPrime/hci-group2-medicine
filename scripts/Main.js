let pantalla,logica;

function setup() {
  createCanvas(1280, 720);
  logica = new Logica();
  pantalla = 3;
  pacientes=0;
  initialPantalla = new Pantalla(0, 0, './recursos/Logo__m2.png');
  instruccionesPantalla = new Pantalla(0,0,'./recursos/instrucciones.png');
  guiaPantalla = new Pantalla(0,0,'./recursos/guia.jpg');
  sintomasPantalla = new Pantalla(0,0,'./recursos/medicinas.jpg');
 

}

function draw() {
  
  background(0);
  if(logica.getPantalla2()==5){
    pantalla=5;
  }

  switch (pantalla) {
    case 0:
      //play
      initialPantalla.pintarPantalla();
      initialPantalla.pintarBtnJugar(640,420,150,60,"Sgte");
      break;
    case 1:
      //instruciones
      instruccionesPantalla.pintarPantalla();
      initialPantalla.pintarBtnSiguiente(1000,620,150,60,"Sgte");
      break;
    case 2:
      guiaPantalla.pintarPantalla();
      initialPantalla.pintarBtnSiguiente(1000,620,150,60,"Sgte");
      break;
    case 3:
      sintomasPantalla.pintarPantalla();
      initialPantalla.pintarBtnSiguiente(1000,620,150,60,"Sgte");
      break;
    
    case 4:
      //nivel uno
      switch(pacientes){
        case 0:
          logica.timerOff();
          logica.pintarNivel1();
        
          
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
      }
      break;
    case 5:
      background(255,255,0);
      break;
    
  }

}




function mousePressed() {
  switch (pantalla) {
    case 0:
      pantalla = initialPantalla.passSgtePantalla(640,420,150,60,pantalla);
      break;
    case 1:
      pantalla = instruccionesPantalla.passSgtePantalla(1000,620,150,60,pantalla);
      break;
    case 2:
      pantalla = instruccionesPantalla.passSgtePantalla(1000,620,150,60,pantalla);
      // pantalla = logica.passSgtePantalla(1150,650,100,50,pantalla);
      break;
    case 3:
      pantalla = instruccionesPantalla.passSgtePantalla(1000,620,150,60,pantalla);
     

      break;
    case 4:
      logica.aceptarMover();
      
    if(dist(mouseX, mouseY, 50,660) < 100){
      logica.clicAyuda();
      
    }
     
     
      break;

    default:
      break;
  }
}

function mouseDragged(){
  switch (pantalla) {
    case 0:

      break;
    case 1:

      break;
    case 2:
     
      break;
    case 3:

      break;
    case 4:
      logica.moverObjetos();
      break;
    case 5:
      break;

    default:
      break;
  }
}
function mouseReleased() {
  switch (pantalla) {
    case 0:

      break;
    case 1:

      break;
    case 2:
     
      break;
    case 3:

      break;
    case 4:
      logica.soltarMover();
      break;
    
    case 5:

      break;

    default:
      break;
  }
}
