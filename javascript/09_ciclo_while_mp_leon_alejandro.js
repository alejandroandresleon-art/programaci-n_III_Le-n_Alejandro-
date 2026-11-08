console.log("Abriendo portal de la nave");
let portal = 10;
while (portal <= 5) {
    console.log("Abriendo Portal" + portal);
    portal++;
}
console.log("Todos los portales han sido abiertos");

console.log("Cuenta regresiva despegue de la nave de Morty");
let i = 10;
while (i >= 0) {
    console.log('Faltan ' + i + ' segundos para el despegue de la nave de Morty');
    i--;
}

console.log("Recarga la pistola de portales de Rick");
let energia = 50;
let recarga = 10;
let totalRecarga = 0;
while (energia < 100) {
    energia += recarga;
    totalRecarga ++;
    console.log("Nivel de energía: " + energia + "%");
}
console.log("Pistola de portales recargada al 100% despues de:" + totalRecarga + "% de recarga");

console.log("Consumo de Combustible de la nave de Rick");
let combustible = 100;
let consumo = 45;
let viaje = 0;
while (combustible >= consumo ) {
    combustible -= consumo;
    viaje++;
    console.log("Viaje número: " + viaje + " realizado, consumo de combustible: " + combustible + "%");
    if(combustible < 50) {
        console.log("Advertencia: Combustible bajo, nivel actual: " + combustible + "%");
    }
}

console.log("Activar portales de dimensiones peligrosas con Do ....... While");
let energiaPortal = 50;
do {
    console.log("Activando portal de dimensión peligrosa, nivel de energía: " + energiaPortal + "%");
    energiaPortal -= 15;
}
while (energiaPortal > 0);
console.log("Nivel de energía insuficiente para activar más portales");

console.log("Comprar una psitola de portales para Rick");
let ahorros = 580;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorros += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorros actuales: " + ahorros + " unidades");
}
while (ahorros < meta);
console.log("Rick ha alcanzado su meta de ahorro después de " + semanas + " semanas.");

