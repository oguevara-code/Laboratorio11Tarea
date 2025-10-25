let total = 0;
let continuar = "s";

while (continuar === "s") {
    let precio = parseFloat(prompt("Precio del producto:"));
    total += precio;
    continuar = prompt("¿Deseas agregar otro producto? (s/n):");
}

console.log("Total parcial: " + total);

if (total > 100) {
    console.log("Tiene un descuento del 10%");
    total *= 0.9;
} else 
    if (total >= 50) {
    console.log("Gana un cupón del 5%");
    total *= 0.95;
} else {
    console.log("No aplica descuento");
}

console.log("Total final a pagar: " + total);