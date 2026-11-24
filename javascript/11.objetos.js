let nombre ="Rick"
let edad=70;
let planeta="Tierra C-137"
let energiaÇ=100;
let averiada = false;

let nave ={
    nombre: "Rick",
    edad: 70,
    planeta: "Tierra C-137",
    energia: 100,
    averiada: false,
}

console.log("Información de la nave de Rick.");
console.log("Nombre del piloto: " + nave.nombre);
console.log("Edad del piloto: "+nave["edad"]);
console.log("Planete original" + nave.planeta);

let objetosRick ={
    arma: 1,
    cerveza: 5,
    pistolaIntergalactica: 8, 
}
let resultado=0;
for (let i in objetosRick){
    resultado += objetosRick[i];
}
console.log("total de obajetos"+resultado);







