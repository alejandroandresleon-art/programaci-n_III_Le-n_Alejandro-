const prompt = require('prompt-sync')();

console.log("Condicionales If");
let energia = Number(prompt("Rick cuanta energía tienes?"));

if (energia > 0) {
    console.log("Tienes energía para continuar la aventura");
}

console .log("Condicionales If-Else");
let combustible = Number(prompt("Rick cuanto combustible tienes?"));
if (combustible > 0) {
    console.log("Tienes combustible para continuar la aventura");
} else {
    console.log("No tienes combustible para continuar la aventura");
}

console.log("Condicionales If-Else If-Else");
let dimension = prompt("Rick en que dimensión estas?");
if (dimension === "C-137") {
    console.log("Estas en la dimensión correcta");
} else if (dimension === "C-140") {
    console.log("Estas en la dimensión equivocada");
} else {
    console.log("No se que dimensión es esa");
}

console.log("Condicional If pero con operadores lógicos");
let energia3=50;
let combustible3=400;

if (energia3 > 0 && combustible3 > 0) {
    console.log("Tienes energía y combustible para continuar la aventura");
} else {
    console.log("No tienes energía o combustible para continuar la aventura");
}

console.log("Control de viajes internacionales");
let combustible4=400;
let energia4=50;
let rick_disponible="si";
let summer_disponible="no";
let nave_averiada="no";

if (combustible4 >= 50 && energia4 >= 50 && rick_disponible === "si" && summer_disponible === "si" && nave_averiada === "no") {
    console.log("Viaje autorizado");

} else {
    if (combustible4 < 50) {
        console.log("No hay suficiente combustible para el viaje");
    }
}
if (energia4<50) {
    console.log("No hay suficiente energía para el viaje");
}
if (rick_disponible==="no") {
    console.log("Rick no está disponible para el viaje");
}
if (summer_disponible==="no") {
    console.log("Summer no está disponible para el viaje");
}
if (nave_averiada==="si") {
    console.log("La nave está averiada y no puede realizar el viaje");
}

console.log("Misión de rescate");

let cristalesObjetivos = 200;
let cristalesRecogidos = 150;
let combustibleInicial = 1000;
let combustibleGastado = 800;
let mortyHerido = "si";
let naveAveriada = "no";
let bonificacion = 0;

let porcentajeCumplimiento = (cristalesRecogidos / cristalesObjetivos) * 100;
let combustibleRestante = combustibleInicial - combustibleGastado;

console.log("Resultados de la misión:");

if (porcentajeCumplimiento >= 90) {
    console.log("Misión cumplida con éxito");
} else if (porcentajeCumplimiento > 70 && porcentajeCumplimiento < 90) {
    console.log("Misión cumplida parcialmente");
} else if (porcentajeCumplimiento > 50 && porcentajeCumplimiento <= 70) {
    console.log("Misión regular, se requiere mejorar");
} else {
    console.log("Misión fallida");
}

console.log("Evaluación de bonificación por desempeño");

if (porcentajeCumplimiento >= 90 && combustibleRestante >= 200) {
    bonificacion = 1000;
    console.log("Bonificación otorgada por desempeño excelente.");
} else {
    console.log("No se otorga bonificación por desempeño.");
}

console.log("Regreso seguro a la dimensión original");

if (mortyHerido === "no" && naveAveriada === "no") {
    console.log("Regreso seguro a la dimensión original.");
} else if (mortyHerido === "si" && naveAveriada === "no") {
    console.log("Regreso a la dimensión original con precaución, Morty está herido.");
} else if (mortyHerido === "no" && naveAveriada === "si") {
    console.log("Regreso a la dimensión original con precaución, la nave está averiada.");
} else {
    console.log("Regreso a la dimensión original con precaución, Morty está herido y la nave está averiada.");
}

console.log("Resumen de la misión");
console.log("Cristales Objetivos:", cristalesObjetivos);
console.log("Cristales Recolectados:", cristalesRecogidos);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible Inicial:", combustibleInicial);
console.log("Combustible Consumido:", combustibleGastado);
console.log("Combustible Restante:", combustibleRestante);
console.log("Morty Herido:", mortyHerido);
console.log("Nave Averiada:", naveAveriada);
console.log("Bonificación Otorgada:", bonificacion);












