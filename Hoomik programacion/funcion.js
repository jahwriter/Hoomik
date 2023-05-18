document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("boton");
    boton.addEventListener("click", function() {
      mostrarMensaje();
    });
  });
  
  function mostrarMensaje() {
    alert("¡Hola! Has hecho clic en el botón.");
  }
  