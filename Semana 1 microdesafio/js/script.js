let cantidad_numeros = parseInt(prompt("Cuantos números quieres sumar"));
let array = new Array();

for (i = 0; i < cantidad_numeros; i++) {
    array[i] = parseInt(prompt("Ingresa el número " + (i+1)+" de los "+cantidad_numeros+ " que vas a ingresar: "));
}

function sumatoria(){
    let summarize = 0;
    for (i = 0; i < array.length; i++) {
        summarize += array[i];
    }
    return summarize;
}

alert("La suma de los números ingresado es: "+ sumatoria());