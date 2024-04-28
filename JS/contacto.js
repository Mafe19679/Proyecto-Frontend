const { createApp, ref } = Vue
createApp({
    delimiters: ['${', '}'],
    data() {
        return {

            
            contactenos: {
                nombre: "",
                correo: "",
                celular: "",
                mensaje: ""

            },
        }
    },

    methods: {
     
        async post() {
           
                let URL = 'http://localhost:3000/contactenos';
                try {
                    const response = await fetch(URL, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.contactenos),
                    });
                    if (!response.ok) throw new Error('Error al crear el registro');

                    await Swal.fire('Exitoso', 'Registro creado correctamente', 'success');
                }
                catch (error) {
                    await Swal.fire('Error', 'No se pudo crear el registro.', 'error');
                

            }

        },
       
        
    },
    mounted() {
        // // Get users en la carga inicial
       
        // fetch('http://localhost:3000/users')
        //     .then(response => response.json())
        //     .then(data => {
        //         this.ViewUsers = data
        //     });
    },
}).mount('#Contacto');