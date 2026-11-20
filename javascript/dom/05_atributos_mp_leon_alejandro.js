const propiedad = document.getElementById("propiedad");
const cambiar = document.getElementById("cambiar");
const verZona = document.getElementById("verZona");
const zona = document.getElementById("zona");

cambiar.addEventListener("click", function() {
    if (propiedad.getAttribute("title") == "Casa") {
        propiedad.setAttribute("src", "departamento.jpeg");
        propiedad.setAttribute("title", "Departamento");
        propiedad.dataset.zona = "Centro";
    } else {
        propiedad.setAttribute("src", "casa.jpeg");
        propiedad.setAttribute("title", "Casa");
        propiedad.dataset.zona = "Norte";
    }
});

verZona.addEventListener("click", function() {
    zona.textContent = propiedad.dataset.zona;
});

const estadoPropiedad = document.getElementById("estadoPropiedad");
const cambiarEstado = document.getElementById("cambiarEstado");

cambiarEstado.addEventListener("click", function() {
    if (estadoPropiedad.textContent == "Propiedad Disponible") {
        estadoPropiedad.style.backgroundColor = "red";
        estadoPropiedad.style.color = "white";
        estadoPropiedad.textContent = "Propiedad Vendida";
    } else {
        estadoPropiedad.style.backgroundColor = "green";
        estadoPropiedad.style.color = "white";
        estadoPropiedad.textContent = "Propiedad Disponible";
    }
});
