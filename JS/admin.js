// Cambiar info del modal cuando sea editar o crear
function alterbuttons(accion, tipo) {
    document.getElementById("titulo" + tipo).innerHTML = accion + " " + tipo
    document.getElementById("boton" + tipo).innerHTML = accion
    $("#nuevo" + tipo).modal("show")
}

// Confirmación elimar un registro
function mostrarConfirmacion(e) {
    Swal.fire({
        title: '¿Estás seguro de eliminar este registro?',
        //   text: 'Esta acción es irreversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Eliminado', 'El registro ha sido eliminado', 'success');
            console.log(e, result)
        } else {
            Swal.fire('Cancelado', 'La acción ha sido cancelada', 'error');
        }
    });
}

// Responder por email mensaje de contactenos
function enviarCorreo() {
    var correo = document.getElementById("correo").innerHTML;
    var asunto = "Respuesta a tu consulta FRAME://WORK";
    var cuerpoMensaje = "Hola, \n";
    cuerpoMensaje += "De acuerdo a tu consulta te contamos que: \n\n";
    cuerpoMensaje += "--- EDITA EL MENSAJE ACÁ --- \n\n";
    cuerpoMensaje += "Gracias por contáctarnos.\n Equipo FRAME://WORK"
    var enlaceCorreo = "mailto:" + correo + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpoMensaje);
    window.location.href = enlaceCorreo;
}