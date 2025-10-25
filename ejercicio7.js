let num = parseInt(prompt("Ingresa un número:"));
let suma = 0;

for (let i = 1; i <= num; i++) {
    if (i % 5 !== 0) {
        suma += i;
    }
}

console.log("La suma (sin múltiplos de 5) es: " + suma);