let pantalla, logica;

function setup() {
  createCanvas(1280, 720);
  logica = new Logica();
  pantalla = 1;
  initialPantalla = new Pantalla(0, 0, './recursos/clinicaBG.png');
  instruccionesPantalla = new Pantalla(0,0);

}

function draw() {
  
  background(0);

  switch (pantalla) {
    case 0:
      

     
      //play
      initialPantalla.pintarPantalla();
      break;
    case 1:
      //instruciones
      instruccionesPantalla.pintarPantalla();
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
