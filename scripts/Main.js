let pantalla,logica;

function setup() {
    createCanvas(1280, 720);
    logica = new Logica();
    initialPantalla = new Pantalla(0,0,'./recursos/clinicaBG.png');
    
}

function draw() {
    pantalla=0;


    switch(pantalla){
        case 0:
         background(0);
         
         initialPantalla.pintarPantalla();
          //play
          break;
        case 1:
          //instruciones
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

}
function mouseReleased() {
   
}
