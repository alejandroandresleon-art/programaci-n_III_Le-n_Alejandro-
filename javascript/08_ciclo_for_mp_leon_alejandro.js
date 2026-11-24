console.log('Ciclo for:');
for (let i = 1; i <= 5; i++) {
    console.log("Interacción número: " + i);
}


console.log('Cuenta regresesiva despegue de la nave de Morty');
for (let i = 10; i >= 0; i--) {
    console.log('Faltan ' +i + ' segundos para el despegue de la nave de Morty');
}

console.log("cuenta regresiva despegue de la nave de Rick");
for (let i = 10; i >= 0; i--) {
    if (i == 0) {
        console.log("Despegue de la nave de Rick");
    } else {
        console.log('Faltan ' +i + ' segundos para el despegue de la nave de Rick');
    }
}

console.log("nivel de energía de Rick");
let energia = 50;
for (let i = 0; i <= 100; i += 10) {
    if (energia >= i) {
        console.log("Nivel de energía: " + i + "%");
    }
}

const consumoPorviaje = 10;
let totalConsumido = 0;
for (let viaje =1; viaje <= 5; viaje++) {
    totalConsumido += consumoPorviaje;
    console.log("Viaje número: " + viaje);
    console.log("Total consumido hasta el momento: " + totalConsumido + " unidades de energía");
}
console.log("Total consumido: " + totalConsumido + " unidades");

console.log("Promedio de cristales");
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cristales = dia *5+5;
    totalCristales += cristales;
    console.log("Día " + dia + ": " + cristales + " cristales recolectados");
}
console.log("Total de cristales recolectados: " + totalCristales);
console.log("Promedio de cristales por día: " + (totalCristales / dias));

console.log("Dimensión Peligrosa");
let seguras =0;
let peligrosas =0;
for (let dimension = 1; dimension <= 10; dimension++) {
    if (dimension % 2 === 0) {
        console.log("Dimensión " + dimension + " es peligrosa");
        peligrosas++;
    } else {
        console.log("Dimensión " + dimension + " es segura");
        seguras++;
    }
}
console.log("Total de dimensiones seguras: " + seguras);
console.log("Total de dimensiones peligrosas: " + peligrosas);

console.log("Recolección de cristales de Morty");
let cristales= [35, 60, 45, 80, 70,90,55];
let total=0;
let viajExitoso=0;
for (let i=0; i<cristales.length; i++) {
    total+=cristales[i];
    console.log("Viaje " + (i+1) + ": " + cristales[i] + " cristales recolectados");
    if (cristales[i]>=50) {
        viajExitoso++;
    }else {
        console.log("Viaje " + (i+1) + " no fue exitoso, se recolectaron menos de 50 cristales");
    }
}
console.log("Total de cristales recolectados: " + total);
console.log("Número de viajes exitosos: " + viajExitoso); 

console.log("Recorrer personajes con for...of");
const personajes = ["Morty", "Rick", "Summer", "Beth", "Jerry"];
for (let personaje of personajes) {
    console.log("Personaje: " + personaje);
}

let nave ={
    nombre: "Nave de Rick",
    combustible: 100,
    energia: 80,
    tripulantes: ["Rick", "Morty", "Summer"]
}
console.log("Recorrer propiedades de la nave con for...in");
for (let propiedad in nave) {
    console.log(propiedad + ": " + nave[propiedad]);
    if (propiedad === "tripulantes") {
        console.log("Tripulantes de la nave:");
        for (let tripulante of nave[propiedad]) {
            console.log("- " + tripulante);
        }
    }
}    

let misiones = [ 
    { nombre: "Misión 1", cristales: 50, meta: 100, persoanje: "Rick" },
    { nombre: "Misión 2", cristales: 30, meta: 80, persoanje: "Morty" },
    { nombre: "Misión 3", cristales: 70, meta: 90, persoanje: "Summer" }
];

let exitosas = 0;
for (let mision of misiones) {
    let porcentaje = (mision.cristales / mision.meta) * 100;
    console.log(mision.nombre + " - " + mision.persoanje + ": " + porcentaje.toFixed(2) + "% de cristales recolectados");
    if (porcentaje >= 90) {
        exitosas++;
    }else {
        console.log(mision.nombre + " - " + mision.persoanje + ": No se alcanzó la meta de cristales");
    }
}
console.log("Número de misiones exitosas: " + exitosas);

console.log ("Uso de break y continue");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se encontró el número 5, se detiene el ciclo");
        break;
    }
    console.log("Número: " + i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se encontró el número 5, se omite esta iteración");
        continue;
    }
    console.log("Número: " + i);
}