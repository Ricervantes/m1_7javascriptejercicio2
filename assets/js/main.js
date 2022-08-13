console.log("Entro al main.js");
class Perro {
    constructor(nombre) {
        this.nombre = nombre;
    }
    ladrar() {
        console.log(`$ {this.nombre} esta ladrando`);
    }
    sentar() {
        console.log(this.nombre +"esta sentado");
    }
        
}

let perro_firulais= new Perro("Firulais");
perro_firulais.ladrar();
perro_firulais.sentar();
console.log("------------------");

let perro_dalmata= new Perro("Dalmata");
perro_dalmata.ladrar();
perro_dalmata.sentar();
console.log("------------------");