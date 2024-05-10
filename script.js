const formulario = document.getElementById('formularioLogin');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const usuario = document.getElementById('usuario').value;
  const contrasena = document.getElementById('contrasena').value;

  // Validación básica (reemplazar)
  if (usuario === "admin" && contrasena === "6AkIBtoZvJ") {
    // Obtener datos de usuario (ejemplo ficticio)
    const nombreUsuario = "Juan Pérez";
    const datosUsuario = JSON.stringify({ // Serializar datos en formato JSON
      email: "juan.perez@ejemplo.com",
      telefono: "+56 9 12345678"
    });

    // Asignar valores a campos ocultos
    document.getElementById('nombreUsuario').value = nombreUsuario;
    document.getElementById('datosUsuario').value = datosUsuario;

    // Redirigir a la nueva página con datos
    window.location.href = "Troubles-Shoutings-930.html"; // Cambiar por la URL real
    mensaje.textContent = "¡Inicio de sesión exitoso!"; // Mensaje opcional
  } else {
    mensaje.textContent = "Usuario o contraseña incorrectos.";
  }
});

