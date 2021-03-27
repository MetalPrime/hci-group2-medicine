let pantalla,logica;

function setup() {
    createCanvas(1280, 720);
    logica = new Logica();


}

function draw() {
    pantalla=2;


    switch(pantalla){
        case 0:
         background(0);
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
