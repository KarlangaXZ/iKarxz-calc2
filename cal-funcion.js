//Declaracion de  variables
var operandorA;
var operandorB;
var operacionIgual;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
  }

  //La funcionalidad de click
  uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandorA = resultado.textContent;
    operacionIgual = "+";
    limpiar();
}
resta.onclick = function(e){
    operandorA = resultado.textContent;
    operacionIgual = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandorA = resultado.textContent;
    operacionIgual = "*";
    limpiar();
}
division.onclick = function(e){
    operandorA = resultado.textContent;
    operacionIgual = "/";
    limpiar();
}
igual.onclick = function(e){
    operandorB = resultado.textContent;
    resolver();
}

//
function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operandorA = 0;
    operandorB = 0;
    operacionIgual = "";
  }

  //resolver

  function resolver(){
    var res = 0;
    switch(operacionIgual){
      case "+":
        res = parseFloat(operandorA) + parseFloat(operandorB);
        break;
      case "-":
          res = parseFloat(operandorA) - parseFloat(operandorB);
          break;
      case "*":
        res = parseFloat(operandorA) * parseFloat(operandorB);
        break;
      case "/":
        res = parseFloat(operandorA) / parseFloat(operandorB);
        break;
    }
    resetear();
    resultado.textContent = res;
  }