document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
      mostrarDatos();
    });
  });
  
  function mostrarDatos() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    
    var datos = "Nombre: " + nombre + "\nCorreo Electrónico: " + email + "\nMensaje: " + mensaje;
    alert(datos);
  }
  