$(function(){
    $("#binario").keyup(function(){
        $("#decimal").val(dec2bin($(this).val()));
    });
    $("#numero").keyup(function(){
        $("#resultado").val(bin2dec($(this).val()));
    });
});

//Validar números del 0 al 1
function validarNumericos(event) {
    if(event.charCode >= 48 && event.charCode < 50){
      return true;
     }
     return false;        
}

//Convertir binario a decimal
function bin2dec(valor){
    let array = [];
    //divido el valor ingresado de tipo String en un array
    let numbers = valor.split("");
    let decimal = 0;

    let counter = 0;
    for(let i = numbers.length-1; i>=0;i--){
        if(numbers[i] == 1){
            array[i] = Math.pow(2,counter);
        }
        else{
            array[i] = 0;
        }
        counter++;
    }
    //Sumatoria del array
    for(let i = 0; i < array.length; i++){
        decimal += array[i];
    }
    return valor + " = " +decimal;
}

//Convertir decimal a binario
function dec2bin(valor2) {
    let numero = valor2;
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
    return valor2 + " = " + salida;
}
