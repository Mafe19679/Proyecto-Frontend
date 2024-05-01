document.addEventListener("DOMContentLoaded", function() {
  
    var loginForm = document.getElementById('loginForm');

    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var contraseña = document.getElementById('contraseña').value;

        // Obtener los datos del usuario desde sessionStorage
        var userData = JSON.parse(sessionStorage.getItem('userData'));

        
        if (userData && userData.email === email && userData.contraseña === contraseña) {
            alert('Inicio de sesión exitoso');
            
            window.location.href = 'admin.html';
        } else {
            alert('Correo electrónico o contraseña incorrectos');
        }
    });
});
