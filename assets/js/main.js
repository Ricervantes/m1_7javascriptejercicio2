console.log("Entro al main.js");
class Perro {
    constructor(nombre) {
        this.nombre = nombre;
    }
    ladrar() {
        console.log(`$ {this.nombre} esta ladrando`);
    }
    sentar() {
        console.log(this.nombre + "esta sentado");
    }

}

let perro_firulais = new Perro("Firulais");
perro_firulais.ladrar();
perro_firulais.sentar();
console.log("------------------");

let perro_dalmata = new Perro("Dalmata");
perro_dalmata.ladrar();
perro_dalmata.sentar();
console.log("------------------");


//ejemplo de herencia 

class Persona {
    // constructor(nombre,apellido,edad,genero,intereses){

    // }
    constructor(nombre, apellido, edad, genero, intereses) {
        this.edad = edad;
        this.genero = genero;
        this.intereses = intereses;
        this.nombre_completo = {
            nombre: nombre,
            apellido: apellido
        };
    }
    saludo() {
        console.log("hola soy la clase persona");
    }
    despedida() {
        console.log(`la persona ${this.nombre_completo.nombre`});
        
}
}
let maestro=new Persona("jesus",
"cardena","29","maesculino",
["programacion","acuarofilia","ajedrez"]);
let alumno=new Persona("juan",
"cardena","29","maesculino",
["futball","golf","ajedrez"]);

alumno.saludo();



