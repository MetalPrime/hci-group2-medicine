let pantalla, logica;

function setup() {
  createCanvas(1280, 720);
  logica = new Logica();
  pantalla = 0;
  initialPantalla = new Pantalla(0, 0, './recursos/clinicaBG.png');
  instruccionesPantalla = new Pantalla(0,0,);

}

function draw() {
  
  background(0);

  switch (pantalla) {
    case 0:
      //play
      initialPantalla.pintarPantalla();
      initialPantalla.pintarBtn(200,200,100,50,"Sgte");
      break;
    case 1:
      //instruciones
      instruccionesPantalla.pintarPantalla();
      instruccionesPantalla.pintarBtn(200,200,100,50,"Sgte");

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
      pantalla = initialPantalla.passSgtePantalla(200,200,100,50,pantalla);
      break;
    case 1:
      pantalla = instruccionesPantalla.passSgtePantalla(200,200,100,50,pantalla);
      break;
    case 2:

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

      break;
    case 3:

      break;

    default:
      break;
  }
}
