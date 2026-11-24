let propiedades = [
    {
        id: 1,
        nombre: "Casa en el Parque",
        zona: "Norte",
        estado: "Disponible"
    },
    {
        id: 2,
        nombre: "Departamento Centro",
        zona: "Centro",
        estado: "Vendida"
    },
    {
        id: 3,
        nombre: "Villa Vista al Norte",
        zona: "Norte",
        estado: "En negociación"
    },
    {
        id: 4,
        nombre: "Suite La Carolina",
        zona: "Sur",
        estado: "Disponible"
    }
];

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const zona = document.getElementById("zona");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");
const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

let idEditando = null;
let siguienteId = 5;

function mostrarPropiedades() {

    contenedor.replaceChildren();

    cantidad.textContent = "Cantidad: " + propiedades.length;

    propiedades.forEach(function(propiedad) {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = propiedad.nombre;

        const parrafoZona = document.createElement("p");
        parrafoZona.textContent = "Zona: " + propiedad.zona;

        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado: " + propiedad.estado;

        const acciones = document.createElement("div");
        acciones.classList.add("acciones");

        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.classList.add("editar");

        botonEditar.addEventListener("click", function() {
            editarPropiedad(propiedad.id);
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");

        botonEliminar.addEventListener("click", function() {
            eliminarPropiedad(propiedad.id);
        });

        acciones.append(botonEditar, botonEliminar);

        tarjeta.append(titulo, parrafoZona, parrafoEstado, acciones);

        contenedor.appendChild(tarjeta);
    });
}

function eliminarPropiedad(id) {

    const propiedad = propiedades.find(function(p) {
        return p.id === id;
    });

    if (!propiedad) {
        return;
    }

    const confirmar = confirm("¿Eliminar " + propiedad.nombre + "?");

    if (!confirmar) {
        return;
    }

    propiedades = propiedades.filter(function(propiedad) {
        return propiedad.id !== id;
    });

    mostrarPropiedades();
}

function editarPropiedad(id) {

    const propiedad = propiedades.find(function(p) {
        return p.id === id;
    });

    if (!propiedad) {
        return;
    }

    nombre.value = propiedad.nombre;
    zona.value = propiedad.zona;
    estado.value = propiedad.estado;

    idEditando = id;

    guardar.textContent = "Editar";
    cancelar.hidden = false;

    nombre.focus();
}

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombrePropiedad = nombre.value.trim();
    const zonaPropiedad = zona.value;
    const estadoPropiedad = estado.value;

    if (nombrePropiedad === "") {
        alert("Ingresa el nombre de la propiedad");
        return;
    }

    if (idEditando === null) {

        const nuevaPropiedad = {
            id: siguienteId,
            nombre: nombrePropiedad,
            zona: zonaPropiedad,
            estado: estadoPropiedad
        };

        siguienteId++;

        propiedades.push(nuevaPropiedad);

    } else {

        const propiedad = propiedades.find(function(p) {
            return p.id === idEditando;
        });

        propiedad.nombre = nombrePropiedad;
        propiedad.zona = zonaPropiedad;
        propiedad.estado = estadoPropiedad;
    }

    mostrarPropiedades();

    limpiarFormulario();
});

function limpiarFormulario() {

    formulario.reset();

    idEditando = null;

    guardar.textContent = "Agregar";

    cancelar.hidden = true;
}

cancelar.addEventListener("click", function() {
    limpiarFormulario();
});

mostrarPropiedades();
