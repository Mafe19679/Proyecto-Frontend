function alterbuttons(accion, tipo) {
    document.getElementById("titulo" + tipo).innerHTML = accion + " " + tipo
    document.getElementById("boton" + tipo).innerHTML = accion
    $("#nuevo" + tipo).modal("show")
}
