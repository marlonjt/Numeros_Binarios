$(document).ready(function(){
});

function dec2bin() {
    //Tomo el valor desde HTML
    let numero = document.getElementById('numero').value;
    //Defino un array vacío
    let pares = [];
    //Lleno de los números multiplos de 2 desde 1 hasta el numero, 
    //mientras i sea menos que el numero
    for(let i = 1; i<=numero; i = i * 2){
        pares.push(i);
    }
    //Ordeno el array de forma descendente
    pares.sort(function(a, b){return b-a});
    //Defino variable suma
    let suma = 0;
    let salida = '';
    for(let i = 0; i<pares.length ; i++){
        if(suma + pares[i] <= numero){
            salida = salida + '1';
            suma = suma + pares[i];
        } else {
            salida = salida + '0';
        }
    }
    //Envío el valor al HTML
    document.getElementById('resultado').value = salida;
}