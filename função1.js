
function solicitarNumeros() {
  var numero1 = parseInt(prompt("Insira o primeiro número:"));
  var numero2 = parseInt(prompt("Insira o segundo número:"));
  return [numero1, numero2]; 
}

function verificarMultiplo(numero1, numero2) {
  if (numero1 % numero2 === 0) {
    return numero1 + " é múltiplo de " + numero2 + ".";
  } else {
    return numero1 + " não é múltiplo de " + numero2 + ".";
  }
}

function main() {
  var numeros = solicitarNumeros(); 
  var resultado = verificarMultiplo(numeros[0], numeros[1]); 
  alert(resultado); 
}

main(); 
