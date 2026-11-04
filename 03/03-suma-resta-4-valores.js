//=====================================================
//EJERICIO 3 -SUMAR 4 VALORES Y RESTAR EL ULTIMO
//leer 4 valores, cumarlos y a la suma restarle el yultimo valor
//=====================================================

// Budcamos en el html los 4 inputs y la caja de resultado (por su id)
const inputPrimero = document.getElementById("primervalor");
const inputSegundo = document.getElementById("segundovalor");
const inputTercero = document.getElementById("tercervalor");
const inputCuarto = document.getElementById("cuartovalor");
const cajaResultado = document.getElementById("resultado");

function calcular (){
    // si falta  algun valor no se calcula
    if (inputPrimero. value === "" || inputSegundo.evalue === "" || inputTercero.evalue === "" || inputCuarto.evalue === "" ){
        cajaResultado.textContent = "escriba los 4 valores";
        return;
    }
// lo que se escribe en un unput es texto: Number ()lo convierte a numero
const primervalor = Number(inputPrimero.value);
const segundovalor = Number(inputSegundo.value);
const tercervalor = Number(inputTercero.value);
const cuartovalor = Number(inputCuarto.value);

//sumar 4 valores 
const sumaValores = primervalor + segundovalor + tercervalor + cuartovalor;
//restar el ultimo valor a la suma
const resultadoResta = sumaValores - cuartovalor;

//Mostrar el resultado en la caja de resultado
cajaResultado.innerHTML =
"Suma de los 4 valores: <b>" + sumaValores + "</b><br>" +
"suma menos el cuarto valor: <b>" + resultadoResta + "</b>";
}

//cada vez que se escriba un valor cualquiera de los inputs, se resuelve a calcular
inputPrimero.addEventListener("input", calcular);   
inputSegundo.addEventListener("input", calcular);
inputTercero.addEventListener("input", calcular);
inputCuarto.addEventListener("input", calcular);    