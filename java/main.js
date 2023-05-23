

//Comentario

/*Comentario
largo*/

function validarFormulario() {
  // Obtener referencias a los elementos del formulario
  var nombre = document.getElementById("nombre").value;
  var apellidoPaterno = document.getElementById("apellidoPa").value;
  var apellidoMaterno = document.getElementById("apellidoMa").value;
  var rut = document.getElementById("rut").value;
  var edad = document.getElementById("edad").value;
  var fechaNacimiento = document.getElementById("fechNac").value;
  var radios = document.getElementsByName("genero");
  var correoElectronico = document.getElementById("correo").value;
  var celular = document.getElementById("celular").value;
  var contrasena = document.getElementById("contrasena").value;
  var repetirContrasena = document.getElementById("repetirContrasena").value;
  // Validar cada campo del formulario


  // --Validación nombre--

  // Campo vacio
  if (nombre === "") {
    alert("Por favor, ingrese un nombre valido.");
    return;
  }
  // Solo letras
  if (!/^[a-zA-Z]+$/.test(nombre)) {
    alert("El nombre debe contener solo letras.");
    return;
  }

  // --Validación ApellidoPa--

  // ApellidoPa vacio
  if (apellidoPaterno === "") {
    alert("Por favor, ingresa tu apellido paterno.");
    return;
  }
  // ApellidoPa Solo letras
  if (!/^[a-zA-Z]+$/.test(apellidoPaterno)) {
    alert("El nombre debe contener solo letras.");
    return;
  }


  // --Validación ApellidoMa--

  // ApellidoMa Vacio
  if (apellidoMaterno === "") {
    alert("Por favor, ingresa tu apellido materno.");
    return;
  }
  // ApellidoMa Solo letras
  if (!/^[a-zA-Z]+$/.test(apellidoMaterno)) {
    alert("El nombre debe contener solo letras.");
    return;
  }

  // --Validación Correo--

  if (correoElectronico.indexOf("@") === -1 || correoElectronico.indexOf(".") === -1) {
    alert("El correo electrónico debe contener un símbolo de arroba (@) y un punto (.)");
    return;
  }

  // --Validación Rut--

  // Validar longitud mínima de 9 caracteres
  if (rut.length < 9) {
    alert("El Rut debe tener al menos 9 caracteres.");
    return;
  }

  // Validar presencia de un guion "-"
  if (rut.indexOf("-") === -1) {
    alert("El Rut debe contener un guion.");
    return;
  }

  // --Validación Edad--

  if (!/^[0-9]+$/.test(edad)) {
    this.value = "";
    alert("La edad debe contener solo números.");
    return;
  }

  // Validar longitud máxima de 3 caracteres
  if (edad.length > 3 || edad === "") {
    this.value = "";
    alert("La edad no puede ser mayor a 3 caracteres ni estar vacia.");
    return;

  }

    var seleccionado = false;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        seleccionado = true;
        break;
      }
    }

    // Si no se ha seleccionado ninguna opción, mostrar alerta
    if (!seleccionado) {
      alert("Debes seleccionar una opción en genero.");
      return false;
    }

    if (celular === "") {
        alert("Por favor, ingresa tu número de celular.");
        return ;
    }

    // Validación solo numeros

    if (!/^[0-9]+$/.test(celular)) {
      this.value = "";
      alert("El Celular debe contener solo números.");
      return;
    }

    // Validar longitud mínima de 9 caracteres
    if (celular.length < 8) {
      alert("El Celular debe tener al menos 8 caracteres.");
      return;
    }

    if (correoElectronico.indexOf("@") === -1 || correoElectronico.indexOf(".") === -1) {
        alert("El correo electrónico debe contener un símbolo de arroba (@) y un punto (.)");
        return ;
      }


    // Validar contraseña
    if (contrasena.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return ;
    }

      // Validar presencia de una letra
      if (!/[a-zA-Z]/.test(contrasena)) {
        alert("La contraseña debe contener al menos una letra.");
        return ;
    }

      // Validar presencia de un número
    if (!/[0-9]/.test(contrasena)) {
        alert("La contraseña debe contener al menos un número.");
        return ;
    }

    // Validar presencia de algún símbolo
    if (!/[^a-zA-Z0-9]/.test(contrasena)) {
        alert("La contraseña debe contener al menos un símbolo.");
        return ;
    }

    if (contrasena !== repetirContrasena) {
      alert("Las contraseñas no coinciden.");
      return ;
    }

    // Si todos los campos son válidos, se puede enviar el formulario
    return true;
}

    function validarLogin() {
        var usuario = document.getElementById("loginName").value;
        var contraseña = document.getElementById("loginPassword").value;

        // Validar que los campos no estén vacíos
        if (usuario === "" || contraseña === "") {
          alert("Por favor, ingresa el usuario y la contraseña.");
          return false;
        }

        // Validar las credenciales
        // Aquí puedes agregar tu lógica para comparar las credenciales ingresadas con las válidas
        if (usuario === "na.rubilar@gmail.com" && contraseña === "narubilar123") {
          alert("Inicio de sesión exitoso.");
          window.location.href = "index.html";
          return true;
        } else {
          alert("Usuario o contraseña incorrectos. Por favor, intenta nuevamente.");
          return false;
        }
    }

/*

    // Extra small devices (phones, 600px and down)
    @media only screen and (max-width: 600px) {
    img {
        width: 20%;
    }


    }

    // Small devices (portrait tablets and large phones, 600px and up)
    @media only screen and (min-width: 600px) {
    img {
        width: 20%;
    }
    }
    // Medium devices (landscape tablets, 768px and up)
    @media only screen and (min-width: 768px) {
    img {
        width: 90%;
    }
    }

*/

/*
$(window).on("resize", function() {
    ajustarImagenesResponsivas();
  });

  $(document).ready(function() {
    ajustarImagenesResponsivas();
  });

  function ajustarImagenesResponsivas() {
    $("img").each(function() {
      $(this).css("max-width", "100%");
      $(this).css("height", "auto");
    });
  }
*/

