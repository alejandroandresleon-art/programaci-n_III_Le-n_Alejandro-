const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Mensaje desde Inmobiliaria Horizonte";
saludo.innerHTML = `<h1>Hello con innerHTML</h1>`;

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
<h1>Casa Los Pinos</h1>
<p>Zona: Cumbayá</p>
<p>Tipo: Casa</p>
<p>Estado: Disponible</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function() {
    console.log("Ejecutando click", nombre.value);
    saludar.textContent = "Hola " + nombre.value;
});
