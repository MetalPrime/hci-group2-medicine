let pantalla, logica;

function setup() {
  createCanvas(1280, 720);
  logica = new Logica();
  pantalla = 2;
  initialPantalla = new Pantalla(0, 0, './recursos/Logo__m2.png');
  instruccionesPantalla = new Pantalla(0,0,'./recursos/Pantalla__guia.jpg');

}

function draw() {
  
  background(0);

  switch (pantalla) {
    case 0:
      //play
      initialPantalla.pintarPantalla();
      initialPantalla.pintarBtnJugar(640,420,150,60,"Sgte");
      break;
    case 1:
      //instruciones
      instruccionesPantalla.pintarPantalla();
      instruccionesPantalla.pintarBtn(1150,650,100,50,"Sgte");

      break;
    case 2:
      //nivel uno
      logica.pintarNivel1();

      break;
    case 3:
      break;
  }

}

function mousePressed() {
  switch (pantalla) {
    case 0:
      pantalla = initialPantalla.passSgtePantalla(640,420,150,60,pantalla);
      break;
    case 1:
      pantalla = instruccionesPantalla.passSgtePantalla(1150,650,100,50,pantalla);
      break;
    case 2:
      logica.aceptarMover();
      //pantalla = logica.passSgtePantalla(1150,650,100,50,pantalla);
      break;
    case 3:

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
      logica.moverObjetos();
      break;
    case 3:

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
      logica.soltarMover();
      break;
    case 3:

      break;

    default:
      break;
  }
}
