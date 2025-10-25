let presupuesto = parseFloat(prompt("Ingresa tu presupuesto:"));
let total2 = 0;
let seguir = "s";

while (seguir === "s") {
    let precio = parseFloat(prompt("Precio del producto:"));
    if (total2 + precio > presupuesto) {
        console.log("No puedes agregar este producto. Supera el presupuesto.");
        break;
    }
    total2 += precio;
    seguir = prompt("¿Deseas agregar otro producto? (s/n):");
}

console.log("Total parcial: " + total2);

if (total2 > 100) {
    console.log("Tiene un descuento del 10%");
    total2 *= 0.9;
} else 
    if (total2 >= 50) {
    console.log("Gana un cupón del 5%");
    total2 *= 0.95;
} else {
    console.log("No aplica descuento");
}

console.log("Total final a pagar: " + total2);