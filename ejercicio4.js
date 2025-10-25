let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
let resultado = "";

for (let i = 1; i <= 12; i++) {
  resultado += `${numero} x ${i} = ${numero * i}\n`;
}

console.log(resultado);