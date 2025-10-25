let n = parseInt(prompt("Ingresa un número:"));
console.log("Números primos entre 1 y " + n + ":");

for (let i = 2; i <= n; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(i);
    }
}