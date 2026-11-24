function calculeTotal(cristales) {
    let cristalesTotal = 0;

    for (let i = 0; i < cristales.length; i++) {
        cristalesTotal += cristales[i].cantidad;
    }

    return cristalesTotal;
}

let cristal = [
    { cantidad: 10 },
    { cantidad: 20 },
    { cantidad: 15 }
];

let cristalesRecolectados = calculeTotal(cristal);

console.log("Total de cristales:", cristalesRecolectados);

console.log("---------------------------------------------------");

let misiones = [60, 30, 80, 50];

function calcularMisionesExitosas(misiones) {
    let exitosas = 0;

    for (let i = 0; i < misiones.length; i++) {
        if (misiones[i] > 50) {
            exitosas++;
        }
    }

    return exitosas;
}

let totalExitosas = calcularMisionesExitosas(misiones);

console.log("Misiones exitosas:", totalExitosas);

console.log("---------------------------------------------------");

let puntuaciones = [85, 40, 70, 55, 30, 95];

function contarAprovados(puntaciones){
    let aprovados =0;

    for (let i=0; i<puntaciones.length; i++){
        if (puntaciones[i]>=70){
            aprovados++;
        }
    }
    return aprovados;
}

let totalAprovados = contarAprovados(puntuaciones);
console.log("Total de aprobados:", totalAprovados);

console.log("---------------------------------------------------");

let numerodeByrons = [80,20,40,80,90,100];

function contarByronsAprovados(numerodeByrons){
    let contador=0;
    for (let i=0; i<numerodeByrons.length; i++){
        if (numerodeByrons[i]>=50)
            contador++;
    }
    return contador;
}

let totalContador = contarByronsAprovados (numerodeByrons);
console.log ("Total de Byrons", totalContador);

console.log("---------------------------------------------------");


