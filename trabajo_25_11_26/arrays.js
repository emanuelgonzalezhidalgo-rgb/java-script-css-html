/* ARRAYS
Un array es una estructuraque paramentros pedidos o coleccion
ordenadda de elemnetos 
estos elementos pueden ser cadenas de un texto, valores
numericos, boleanos, entres otros, igualmente podria
hacer un grupo de funciones e inclusibe otros arrays
*/

//declaracion de un array vacio
let numeros = []
//llamar un array con elementos, cada elementos se separa por cosas

numero = [5, 4, 78, 54, 3, 1, 7, 8];
document.writeln ("elementos: ", numero);
document.writeln (`<br>`);

// un array puede crearse directamente sin ser declarado
Numeros = [5, 10, 15, 20, 25, 30, 35];
document.writeln ("elementos: ", Numeros);
document.writeln (`<br>`);

// visualizar unos o algunos de los elementos de array segun el parametro e indice indicado
document.writeln ("elementos discrimados : ", numero[3]);
document.writeln (`<br>`);

document.writeln ("elementos discrimados : ", Numeros[0]);
document.writeln (`<br>`);

//cambiar un elemento de array indicado el indice de posicion y/o ubicacion existente y el valor del elemento a cambiar
numeros [3] = 84;
document.writeln ("cambio de un elemento : ", numero);
document.writeln (`<br---------------------------------->`);
document.writeln (`<br>`);

//array con valores de tipo texto con string
let frutas =["manzanas", "peras", "naranjas", "mandarinas", "kiwi"]
document.writeln (`diversas frutas: `, frutas);
document.writeln (`<br>`);

document.writeln (`cantidad de elementos del array de frutas: `, frutas.length);
document.writeln (`<br>`);
document.writeln (`cantidad de elementos del array de numero: `, numero.length);
document.writeln (`<br>`);
document.writeln (`cantidad de elementos del array de Numeros: `, Numeros.length);
document.writeln (`<br>`);

document.writeln (`<br----------------------------------------------------------->`);

let abadecedario = [`A`, `B`, `C`, `D`, `F`, `J`,`K `, `L`]
document.writeln (abadecedario);
document.writeln (`<br>`);
document.writeln (abadecedario.sort());//organiza en orden alfabetico las letras
document.writeln (`<br>`);

//funcion reverse organiza los elementos alfabeticos pero en inversa
document.writeln (abadecedario.reverse());
document.writeln (`<br>`);