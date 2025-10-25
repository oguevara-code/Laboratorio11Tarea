let numero = parseInt(prompt("Ingresa un número:"));
let texto = numero.toString();
let nDigitos = texto.length;
let suma = 0;

for (let i = 0; i < nDigitos; i++) {
    let digito = parseInt(texto[i]);
    suma += digito ** nDigitos;
}

if (suma === numero) {
    console.log(numero + " es un número Armstrong.");
} else {
    console.log(numero + " NO es un número Armstrong.");
}