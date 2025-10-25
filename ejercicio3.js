let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt(`Ingresa el número ${i}:`));
  if (num % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}
console.log("Números pares: " + pares);
console.log("Números impares: " +impares);