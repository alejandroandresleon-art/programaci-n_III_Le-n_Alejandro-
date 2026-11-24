console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);

titulo.textContent = "Inmobiliaria Horizonte Bienes Raíces";

const estado = document.getElementById("estado");
const botonPropiedad = document.getElementById("botonPropiedad");

botonPropiedad.addEventListener("click", function() {
    console.log("Ejecutando click!");
    estado.textContent = "¡Propiedad Reservada!";
    console.log("Texto cambiado en el elemento estado");
    alert("Proceso de Reserva de la Propiedad Terminado");
});

const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");

botonMensaje.addEventListener("click", function() {
    mensaje.textContent = "Cliente listo para visitar la propiedad";
});

let visitas = 0;
const contador = document.getElementById("contador");
const nuevaVisita = document.getElementById("nuevaVisita");

nuevaVisita.addEventListener("click", function() {
    visitas += 1;
    contador.textContent = visitas;
});
