let valor;
valor = parseInt (prompt("ingrese valores numericos entre 1 y 3"));

switch (valor) {
    case 1:
        document.writeln ("usted ingreso el numero: ", valor);
        break;
    case 2:
        document.writeln ("usted ingreso el numero: ", valor);
        break;
    case 3:
        document.writeln ("usted ingreso el numero: ", valor);
        break;
    default:
        document.writeln ("el numero esta fuera del rango que no es un numero valido");
        break;
}

document.writeln (`<br>-------------------------------------------------<br>`);

let color;
color = prompt("ingrese uno de estos colores: Rojo, Verde o Azul");

switch (color) {
    case "Rojo":
        document.writeln ("usted ingreso el color: ", color);
        break;
    case "Verde":
        document.writeln ("usted ingreso el color: ", color);
        break;
    case "Azul":
        document.writeln ("usted ingreso el color: ", color);
        break;
    default:
        document.writeln ("el color esta fuera del rango que no es un color valido");
        break;
}