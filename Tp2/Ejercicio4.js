function jugador(nombre){
    this.nombre = nombre,
    this.pv = 100,
    this.sp = 100
};

jugador.prototype.curar = function(oponente){
    oponente.pv +=5;
    this.sp -=5;
    console.log(`${oponente.nombre} recibió 5 puntos por parte de ${this.nombre}`);
}

jugador.prototype.tirarFlecha = function(oponente) {
    if (this.sp < 25) {
        console.log(`${this.nombre} no cuenta con los puntos de vida suficientes para tirar flechas`);
    }
    else {
        this.sp = this.sp - 25
        console.log(`${this.nombre} tiró una flecha`);
        oponente.pv -=25;
    }
}

var orco = new jugador("Orco");
var legolas = new jugador("Legolas");

console.log(orco);
console.log(legolas);
