class Nivel {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.puntos = 0;
        this.errores = 0
        this.pacienteMuerto = 0;
        this.bg = loadImage('./recursos/clinicaBG.png');
        this.helpPopup = loadImage('./recursos/enferPopup.png');
        this.charola = loadImage('./recursos/medicina/Charola--medicina.png');

        this.medicines = [];

        for (let i = 0; i < 6; i++) {
            this.medicines[i] = new Medicine((125 * i) + 250, 650, 75, 75, i);
        }


    }

    pintarBg() {
        image(this.bg, this.posX, this.posY);
        image(this.charola, 130, 620, 860, 99);


    }


    pintarMedicina() {
        for (let i = 0; i < 6; i++) {

            this.medicines[i].pintar();


        }
    }

    pintarAyuda() {
        image(this.helpPopup, 560, 600);



    }

    aceptarMover() {
        for (let i = 0; i < 6; i++) {
            this.medicines[i].aceptarMover();
        }
    }

    moverObjetos() {
        for (let i = 0; i < 6; i++) {

            this.medicines[i].moverElemento();


        }
    }

    soltarMover() {
        for (let i = 0; i < 6; i++) {
            this.medicines[i].soltarMover();
        }
    }





    //VERIFICACION
    funcionarMedicina(index, posX, posY, tamX, tamY) {

        for (let i = 0; i < this.medicines.length; i++) {
            if (this.medicines[i].getPosX() > posX && this.medicines[i].getPosX() < posX + tamX &&
                this.medicines[i].getPosY() > posY && this.medicines[i].getPosY() < posY + tamY) {

                if (this.medicines[i].getIndex() === index) {
                    this.puntos++;
                    console.log(this.puntos);
                    console.log("MEDICINA CORRECTA");
                    return true;
                } else {
                    this.errores++;
                    console.log(this.errores);
                    console.log("INCORRECTA");
                    return false;
                }
            }
        }
    }



    //VERIFICACION DE DOS ENFERMEDADES

    funcionarMedicina2(index1, index2, posX, posY, tamX, tamY) {
        for (let i = 0; i < this.medicines.length; i++) {
            if (this.medicines[i].getPosX() > posX && this.medicines[i].getPosX() < posX + tamX &&
                this.medicines[i].getPosY() > posY && this.medicines[i].getPosY() < posY + tamY) {

                if (this.medicines[i].getIndex() === index1 || this.medicines[i].getIndex() === index2) {
                    console.log("entra a primera");
                    if (this.medicines[i].getIndex() === index1 || this.medicines[i].getIndex() === index2) {
                        this.puntos++;
                        console.log(this.puntos);
                        console.log("MEDICINA CORRECTA");
                        return true;
                    } else {
                        this.errores++;
                        console.log(this.errores);
                        console.log("INCORRECTA");
                        return false;
                    }

                }
            }
        }
    }



    //VERIFICACION DE TRES ENFERMEDADES

    funcionarMedicina3(index1, index2, index3, posX, posY, tamX, tamY) {
        for (let i = 0; i < this.medicines.length; i++) {
            if (this.medicines[i].getPosX() > posX && this.medicines[i].getPosX() < posX + tamX &&
                this.medicines[i].getPosY() > posY && this.medicines[i].getPosY() < posY + tamY) {

                if (this.medicines[i].getIndex() === index1 || this.medicines[i].getIndex() === index2 || this.medicines[i].getIndex() === index3) {
                    if (this.medicines[i].getIndex() === index1 || this.medicines[i].getIndex() === index2 || this.medicines[i].getIndex() === index3) {
                        if (this.medicines[i].getIndex() === index1 || this.medicines[i].getIndex() === index2 || this.medicines[i].getIndex() === index3) {
                            this.puntos++;
                            console.log(this.puntos);
                            console.log("MEDICINA CORRECTA");
                            return true;
                        } else {
                            this.errores++;
                            console.log(this.errores);
                            console.log("INCORRECTA");
                            return false;
                        }


                    }
                }
            }
        }
    }

}