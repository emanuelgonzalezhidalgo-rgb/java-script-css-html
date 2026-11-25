/* (POO) Progrmacion orientada de odjetos
La poo es un paradigma de programacion que organaiza el sotfware en clases y odjetos para modelar
conceptos del mundo real. Este enfoque promueve la reutilizacion del codigo
y mejor organizaion del software.
*/

// crear el odjeto automovil

document.writeln (`creacion de odjetos automovil <br>`);

var Auto = {
    marca: `toyota`,
    modelo : `corolla`,
    color: `negro`,
    año : `2026`,
    combustible : `diesel`,
    tipo: `Sedan`,
    radio: [`Fm`,`mp4`,`USB`],

}

//acceso a las propiedades se utiliza la notacion de punto (auto marca) para aceder a las prioridades deñ odjeto.

document.writeln (`marca: ${Auto.marca}`, `<br>`)

class vehiculos {
    marca= "toyota";
    modelo = "corolla";
    color= "negro";
    año = "2026";
    combustible = `diesel`;
    tipo = "Sedan";
    precio = "$78.285.000";

    //metodos
    // un metodo representa acciones o comportamientos e este caso del vehiculo
    acelerar(){
        return `El ${this.marca} acelera de 0 a 100 km/h tan solo en 3 segundos`;
    }
    frenar (){
        return `El ${this.marca} ${this.modelo} puede frenar de 100 a 0 km/h en tan solo 2.5 seguntos.`

    }

}

//crear un odjetos basado en la clase vehiculos.
const ferrari = new vehiculos();
// se declaro una constante, luego la palabra reservada ne que significa que est acrenad una distancia nueva
// y al colocar el nombre de la clase , para este nuevo odjeto tendra a disposicion los atributos y metodos de la clase previamente creada

// Mostrar las propiedades y metodos del odjetos ferrari
document.writeln(`Marca: ${ferrari.marca} <br>`)
document.writeln (`<br>`);
document.writeln(`modelo: ${ferrari.modelo} <br>`)
document.writeln (`<br>`);
document.writeln(`color: ${ferrari.color} <br>`)
document.writeln (`<br>`);
document.writeln(`año: ${ferrari.año} <br>`)
document.writeln (`<br>`);
document.writeln(`conbustibe: ${ferrari.combustible} <br>`)
document.writeln (`<br>`);
document.writeln(`tipo: ${ferrari.tipo} <br>`)
document.writeln (`<br>`);
document.writeln(`radio: ${ferrari.radio} <br>`)
document.writeln (`<br>`);
document.writeln(`precio: ${ferrari.precio} <br>`)