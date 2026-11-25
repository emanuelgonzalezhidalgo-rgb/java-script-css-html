document.writeln(`Creación de animales <br>`);

const dinosaurios = {
    nombre: `Trex`,
    tipo: `terrestre`,
    causa_muerte: `meteorito`,
    habitat: `desconocido`,
    año_extincion: 65000000,
    tamaño: `grande`,
    peso: `25 toneladas`,
};

// Para acceder a las propiedades se usa la notación de punto (.)
// o la notación de corchetes ([])
document.writeln(`tipo: ${dinosaurios.tipo}<br>`);
document.writeln(`peso: ${dinosaurios["peso"]}<br><br>`);

class Trex {
    nombre = `Trex`;
    tipo = `terrestre`;
    causa_muerte = `meteorito`;
    habitat = `desconocido`;
    año_extincion = 65000000;
    tamaño = `grande`;
    peso = `25 toneladas`;

    // Métodos: representan acciones o comportamientos del animal
    cazar() {
        return `El ${this.nombre} caza especies grandes para quedar satisfecho`;
    }

    correr() {
        return `El ${this.nombre}, por lo pesado, corre más lento de lo normal`;
    }
}

const miTrex = new Trex();
document.writeln(`nombre: ${miTrex.nombre}<br><br>`);
document.writeln(`tipo: ${miTrex.tipo}<br><br>`);
document.writeln(`causa de muerte: ${miTrex.causa_muerte}<br><br>`);
document.writeln(`hábitat: ${miTrex.habitat}<br><br>`);
document.writeln(`año de extinción: ${miTrex.año_extincion}<br><br>`);
document.writeln(`tamaño: ${miTrex.tamaño}<br><br>`);
document.writeln(`peso: ${miTrex.peso}<br><br>`);
document.writeln(`${miTrex.cazar()}<br>`);
document.writeln(`${miTrex.correr()}<br>`);

document.writeln(`<br>-------------------------------------------------<br>`);

/* Referencia: subclases (herencia) */
class Deportista {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Futbolista extends Deportista {
    constructor(nombre, apellido, goles) {
        super(nombre, apellido);
        this._goles = goles;
    }

    get goles() {
        return this._goles;
    }

    set goles(nuevosGoles) {
        this._goles = nuevosGoles;
    }
}

const futbolista2 = new Futbolista(`Lionel`, `Messi`, 5);

document.writeln(`Nombre: ${futbolista2.nombre}<br>`);
document.writeln(`Apellido: ${futbolista2.apellido}<br>`);
document.writeln(`Goles: ${futbolista2.goles}<br>`);