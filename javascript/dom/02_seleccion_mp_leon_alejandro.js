const inventario = document.getElementById("inventario");
const zona = document.getElementById("zona");
const contrato = document.getElementById("contrato");

inventario.textContent = "Inmuebles: 100";
zona.textContent = "Zona: Norte-12";
contrato.textContent = "Contrato Firmado";

const agente = document.querySelector(".agente");
agente.textContent = "Ana Torres - Agente Senior";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Proceso de Venta";

const proceso = document.querySelector("#proceso");
proceso.textContent = "Preparando Contrato";

const estadoCliente = document.querySelector("#cliente .estado");
estadoCliente.textContent = "Listo para Firmar";

const sectores = document.querySelectorAll(".sectores");
console.log(sectores);
console.log(sectores.length);

console.log(sectores[0].textContent);
console.log(sectores[1].textContent);
console.log(sectores[2].textContent);
console.log(sectores[3].textContent);
console.log(sectores[4].textContent);
console.log(sectores[5].textContent);

console.log("Recorrer a través de for");
for (let i = 0; i < sectores.length; i++) {
    console.log(sectores[i].textContent);
}

console.log("Con forEach");
sectores.forEach(function(sector) {
    console.log(sector.textContent);
});

console.log("Con for of");
for (let sector of sectores) {
    console.log(sector.textContent);
}
