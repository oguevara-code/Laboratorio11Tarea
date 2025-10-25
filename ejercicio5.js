let monto = parseInt(prompt("Ingresa el monto a retirar( multiplo de 10):"));

if (isNaN(monto) || monto < 10 || monto % 10 !== 0) {
  console.log("Monto no válido. Debe ser un número múltiplo de 10.");
} else {
  let billetes100 = Math.floor(monto / 100);
  monto %= 100;

  let billetes50 = Math.floor(monto / 50);
  monto %= 50;

  let billetes20 = Math.floor(monto / 20);
  monto %= 20;

  let billetes10 = Math.floor(monto / 10);
  monto %= 10;

  console.log("Billetes entregados: 100 -> " + billetes100 + 
    ", 50 -> " + billetes50 + 
    ", 20 -> " + billetes20 + 
    ", 10 -> " + billetes10); 
}