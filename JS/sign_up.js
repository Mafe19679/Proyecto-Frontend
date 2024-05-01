document.addEventListener("DOMContentLoaded", function() {
   
    var registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var celular = document.getElementById('celular').value;
        var email = document.getElementById('email').value;
        var contraseña = document.getElementById('contraseña').value;
        var confirmarContraseña = document.getElementById('confirmar-contraseña').value;

        // Verificar si las contraseñas coinciden
        if (contraseña !== confirmarContraseña) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Guardar los datos del usuario en sessionStorage
        var userData = {
            nombre: nombre,
            apellido: apellido,
            celular: celular,
            email: email,
            contraseña: contraseña
        };
        sessionStorage.setItem('userData', JSON.stringify(userData));

        alert('Usuario registrado con éxito');
    
        window.location.href = 'inicio_sesion.html';
    });
});
