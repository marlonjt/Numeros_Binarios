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
    var array = [];
    var numbers = valor.split("");
    var decimal = 0;
    var counter = 0;
    for(var i = numbers.length-1; i>=0;i--){
        if(numbers[i] == 0){
            array[i] = 0;
        }
        else{
            array[i] = Math.pow(2,counter);
        }
        counter++;
    }
    for(var a = 0; a < array.length; a++){
        decimal += array[a];
    }
    return decimal;
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
    return salida;
}
