
//Comentario

/*Comentario
largo*/

var errorNom = document.getElementById("errorNombre");
var nom = document.getElementById("nombre").value;

function validarNombre() {

    //Validar Nombre

    let errorNom = ""
    let entrar = false

    if (nom.value.length == 0 || nom.value.length == null) {
        errorNom = 'El campo nombre no puede estar vacio'
        entrar = true
    }
    console.log(nom);
    if(entrar){
        parrafo.innerHTML = errorNom
    }

}

function validarApellidoPa() {

    //Validar Apellido Paterno
    var apPa = document.getElementById("apellidoPa").value;

    console.log(apPa)
}

function validarApellidoMa() {

    //Validar Apellido Materno
    var apMa = document.getElementById("apellidoMa").value;

    console.log(apMa)
}

function validarCorreo() {
    //Validar Correo
    var correo = document.getElementById("correo").value;

    console.log(correo)
}


function validarRut() {
    //Validar Rut
    var rut = document.getElementById("rut").value;

    console.log(rut)
}

function validarEdad() {
    //Validar Edad
    var edad = document.getElementById("edad").value;

    console.log(edad)
}

function validarGenero() {
    //Validar Genero
    var gen = document.getElementById("gen").value;

    console.log(gen)
}

function validarCelular() {
    //Validar Celular
    var celular = document.getElementById("celular").value;

    console.log(celular)
}

function validarFechNac() {
    //Validar Fecha Nacimiento
    var fechNac = document.getElementById("fechNac").value;

    console.log(fechNac)
}

function validarContra() {
    //Validar Contra
    var contra = document.getElementById("contraseña").value;

    console.log(contra)
}

function validarContra2() {
    //Validar Contra Repetir
    var contra2 = document.getElementById("repetirContraseña").value;

    console.log(contra2)
}


