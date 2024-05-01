let tipo = "Usuarios"
let opcion = "users"
let metodo = "POST"
let ID = ""
const { createApp, ref } = Vue
createApp({
    delimiters: ['${', '}'],
    data() {
        return {

            ViewUsers: [],
            users: {
                nombre: "",
                apellido: "",
                celular: "",
                email: "",
                contraseña: ""

            },
            Viewservicios: [],
            servicios: {
                nombre: "",
                descripcion: "",
                destacado: ""

            },
            Viewcontactenos: [],
            contactenos: {
                nombre: "",
                correo: "",
                celular: "",
                mensaje: ""

            },
        }
    },

    methods: {
        alterbuttons(accion, tipo) {
            console.log(tipo)
            console.log(document.getElementById("titulo" + tipo))
            document.getElementById("titulo" + tipo).innerHTML = accion + " " + tipo
            document.getElementById("boton" + tipo).innerHTML = accion

            document.getElementById("floatingInputNombre").value = ""
            document.getElementById("floatingInputApellido").value = ""
            document.getElementById("floatingInputCelular").value = ""
            document.getElementById("floatingInputCorreo").value = ""
            document.getElementById("floatingInputContraseña").value = ""
            $("#nuevo" + tipo).modal("show")
            console.log("accion", tipo)
            if (tipo == "Usuario") {
                tipo = tipo
                opcion = "users"
            } else if (tipo == "Servicio") {
                tipo = tipo
                opcion = "servicios"
            }

        },

        getUsers(id) {
            ID = id
            metodo = "PUT"
            this.alterbuttons("Actualizar", "Usuario")

            fetch(`http://localhost:3000/users/${id}`)
                .then(response => response.json())
                .then(data => {
                    this.users.nombre = data.nombre
                    this.users.apellido = data.apellido
                    this.users.celular = data.celular
                    this.users.email = data.email
                    this.users.contraseña = data.contraseña
                    $("#nuevoUsuario").modal("show")


                });


        },

        getServicios(id) {
            ID = id
            metodo = "PUT"
            this.alterbuttons("Actualizar", "Servicio")

            fetch(`http://localhost:3000/servicios/${id}`)
                .then(response => response.json())
                .then(data => {
                    this.servicios.nombre = data.nombre
                    this.servicios.descripcion = data.descripcion
                    this.servicios.destacado = data.destacado
                    $("#nuevoServicio").modal("show")


                });


        },
        async post_put() {
            if (metodo == "PUT") {

                let URL = `http://localhost:3000/${opcion}/${ID}`;
                try {
                    const response = await fetch(URL, {
                        method: 'PUT',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this[opcion]),

                    });



                    if (!response.ok) throw new Error('Error al actualizar el registro');

                    await Swal.fire('Exitoso', 'Registro actualizado correctamente', 'success');
                }
                catch (error) {
                    await Swal.fire('Error', 'No se pudo actualizar el registro.', 'error');
                }

            } else if (metodo == "POST") {
                let URL = 'http://localhost:3000/' + opcion;
                try {
                    const response = await fetch(URL, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this[opcion]),
                    });
                    if (!response.ok) throw new Error('Error al crear el registro');

                    await Swal.fire('Exitoso', 'Registro creado correctamente', 'success');
                }
                catch (error) {
                    await Swal.fire('Error', 'No se pudo crear el registro.', 'error');
                }

            }

        },
        async deleteRegistro(id, opcion_u_s) {
            console.log("delete")

            console.log(`http://localhost:3000/${opcion_u_s}/${id}`)
            try {
                const response = await fetch(`http://localhost:3000/${opcion_u_s}/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }

                });
                if (!response.ok) throw new Error('Error al actualizar el registro');
                const data = await response.json();
                await Swal.fire('Exitoso', 'Registro eliminado correctamente', 'success');


            }
            catch (error) {
                await Swal.fire('Error', 'No se pudo crear el registro.', 'error');
            }

        },
        // Get
        get(opcion) {
            // event.preventDefault();
            console.log("View" + opcion)
            let Viewopcion = "View" + opcion
            fetch('http://localhost:3000/' + opcion)
                .then(response => response.json())
                .then(data => {
                    this[Viewopcion] = data
                });

        },

    },
    mounted() {
        // Get users en la carga inicial
       
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => {
                this.ViewUsers = data
            });
    },
}).mount('#Admin');



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

function cerrarSesion(){
    localStorage.removeItem('sesion');
    window.location.href = 'home.html';
}

// history.replaceState(null, '', 'home.html');