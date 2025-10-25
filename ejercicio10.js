let opcion2;
let notas = [];

do {
    console.log("\n1. Ingresar N notas");
    console.log("2. Promedio");
    console.log("3. Valor máximo");
    console.log("4. Valor mínimo");
    console.log("5. Cantidad de pares e impares");
    console.log("6. Cuántos están por encima del promedio");
    console.log("7. Contar pares e impares en un rango");
    console.log("8. Tabla de multiplicar");
    console.log("9. Salir");

    opcion2 = parseInt(prompt("Elige una opción:"));

    if (opcion2 === 1) {
        let cantidad = parseInt(prompt("¿Cuántas notas?"));
        notas = [];
        for (let i = 0; i < cantidad; i++) {
            notas.push(parseFloat(prompt("Nota " + (i + 1) + ":")));
        }
    } else 
        if (opcion2 === 2) {
        let suma = 0;
        for (let n of notas) suma += n;
        console.log("Promedio: " + (suma / notas.length));
    } else 
        if (opcion2 === 3) {
        console.log("Máximo: " + Math.max(...notas));
    } else 
        if (opcion2 === 4) {
        console.log("Mínimo: " + Math.min(...notas));
    } else 
        if (opcion2 === 5) {
        let pares = 0, impares = 0;
        for (let n of notas) {
            if (Math.floor(n) % 2 === 0) pares++;
            else impares++;
        }
        console.log("Pares: " + pares + ", Impares: " + impares);
    } else 
        if (opcion2 === 6) {
        let prom = notas.reduce((a, b) => a + b, 0) / notas.length;
        let cont = notas.filter(n => n > prom).length;
        console.log("Notas sobre el promedio: " + cont);
    } else 
        if (opcion2 === 7) {
        let ini = parseInt(prompt("Inicio del rango:"));
        let fin = parseInt(prompt("Fin del rango:"));
        let p = 0, im = 0;
        for (let i = ini; i <= fin; i++) {
            if (i % 2 === 0) p++;
            else im++;
        }
        console.log("Pares: " + p + ", Impares: " + im);
    } else 
        if (opcion2 === 8) {
        let n = parseInt(prompt("Número para la tabla:"));
        for (let i = 1; i <= 10; i++) {
            console.log(n + " x " + i + " = " + (n * i));
        }
    }
} while (opcion2 !== 9);

console.log("Programa finalizado.");