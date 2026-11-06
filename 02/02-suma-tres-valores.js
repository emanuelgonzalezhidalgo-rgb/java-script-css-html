//=====================================================
//EJERICIO 3 -SUMAR 4 VALORES Y RESTAR EL ULTIMO
//leer 4 valores, cumarlos y a la suma restarle el yultimo valor
//=====================================================

// Budcamos en el html los 4 inputs y la caja de resultado (por su id)
const inputPrimero = document.getElementById("valorUno");
const inputSegundo = document.getElementById("valorDos");
const inputTercero = document.getElementById("valorTres");
//const inputCuarto = document.getElementById("cuartovalor");
const cajaResultado = document.getElementById("solucion");

function calcular () {
    // si falta  algun valor no se calcula
    if (inputPrimero. value === "" || inputSegundo.evalue === "" || inputTercero.evalue === ""  ){
        cajaResultado.textContent = "escriba los 3 valores";
        return;
    }
    // lo que se escribe en un unput es texto: Number ()lo convierte a numero
    const valorUno = Number(inputPrimero.value);
    const valorDos = Number(inputSegundo.value);
    const valorTres = Number(inputTercero.value);
    //const cuartovalor = Number(inputCuarto.value);

    //sumar 3 valores 
    const sumaValores = valorUno + valorDos + valorTres;

    //Mostrar el resultado en la caja de resultado
    cajaResultado.innerHTML =
    "Suma de los 3 valores: <b>" + sumaValores + "</b><br>";
    //"suma menos el tercer valor: <b>" + resultadoResta + "</b>";
}

//cada vez que se escriba un valor cualquiera de los inputs, se resuelve a calcular
inputPrimero.addEventListener("input", calcular);   
inputSegundo.addEventListener("input", calcular);
inputTercero.addEventListener("input", calcular);
//inputCuarto.addEventListener("input", calcular);    