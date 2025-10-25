let opcion;

do {
    console.log("1. Área del círculo");
    console.log("2. Área del rectángulo");
    console.log("3. Salir");
    opcion = parseInt(prompt("Elige una opción:"));

    if (opcion === 1) {
        let r = parseFloat(prompt("Radio:"));
        let area = 3.1416 * r * r;
        console.log("Área del círculo: " + area);
    } else if (opcion === 2) {
        let base = parseFloat(prompt("Base:"));
        let altura = parseFloat(prompt("Altura:"));
        let area = base * altura;
        console.log("Área del rectángulo: " + area);
    }
} while (opcion !== 3);

console.log("Programa terminado.");