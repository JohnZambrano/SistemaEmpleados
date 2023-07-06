// Clase Empleado
class Empleado {
  constructor(nombre, apellido, genero, fechaNacimiento, fechaIngreso, salario,tipoUsuario,nombreUsuario,areaTrabajo,correo,clave) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
    this.fechaNacimiento = fechaNacimiento;
    this.fechaIngreso = fechaIngreso;
    this.salario = salario;
    this.tipoUsuario = tipoUsuario;
    this.nombreUsuario = nombreUsuario;
    this.areaTrabajo = areaTrabajo;
    this.correo = correo;
    this.clave = clave;
  }
}


// Variables globales
let empleado;

// Funciones de la aplicación
function visualizarEmpleado() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const genero = document.getElementById("genero").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const fechaIngreso = document.getElementById("fechaIngreso").value;
  const salario = document.getElementById("salario").value;

  empleado = new Empleado(nombre, apellido, genero, fechaNacimiento, fechaIngreso, salario);

  // Mostrar la información del empleado en una alerta o modal
  alert(`Nombres: ${empleado.nombre}\nApellidos: ${empleado.apellido}\nGénero: ${empleado.genero}\nFecha de nacimiento: ${empleado.fechaNacimiento}\nFecha de ingreso: ${empleado.fechaIngreso}\nSalario : ${empleado.salario}`);
}

function modificarSalario() {
  const salarioModificado = document.getElementById("salarioModificado").value;

  empleado.salario = salarioModificado;

  // Actualizar la información del empleado en la alerta o modal
  alert(`Salario actualizado: ${empleado.salario}`);
}

//Función para validar que los campos de tipo text no tengan numeros
function validateInput() {
  var input = document.getElementById("nombre").value;
  var input2 = document.getElementById("apellido").value;
  var pattern = /^[a-zA-Z]+$/;

  if (!pattern.test(input) && !pattern.test(input2)) {
    // Si no se ingresaron solo letras, muestra un mensaje de error o toma alguna otra acción
    Swal.fire({
      text: 'El campo solo debe contener letras',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    // También puedes limpiar el campo de entrada si lo deseas
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
  }
}


//Función para validar que los campos de institucion no tengan numeros
function validarIntitucion() {
  var input3 = document.getElementById("institucion").value;
  var pattern = /^[a-zA-Z]+$/;
  if (!pattern.test(input3)) {
    // Si no se ingresaron solo letras, muestra un mensaje de error o toma alguna otra acción
    Swal.fire({
      text: 'El campo solo debe contener letras',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    // También puedes limpiar el campo de entrada si lo deseas
    document.getElementById("institucion").value = "";
  }
}

function calcularEdad() {
  const fechaNacimiento = new Date(empleado.fechaNacimiento);
  const hoy = new Date();

  const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

  document.getElementById("edadLabel").textContent = `Edad: ${edad} años`;
}

function calcularAntiguedad() {
  const fechaIngreso = new Date(empleado.fechaIngreso);
  const hoy = new Date();

  const antiguedad = hoy.getFullYear() - fechaIngreso.getFullYear();

  document.getElementById("antiguedadLabel").textContent = `Antigüedad: ${antiguedad} años`;
}

function calcularPrestaciones() {
  const fechaIngreso = new Date(empleado.fechaIngreso);
  const hoy = new Date();

  const antiguedad = hoy.getFullYear() - fechaIngreso.getFullYear();
  const prestaciones = (antiguedad * empleado.salario) / 12;

  document.getElementById("prestacionesLabel").textContent = `Prestaciones: ${prestaciones}`;
}



// Opción 1 Información academica

function guardarInformacionAcademica() {
  if (
    document.getElementById('nivelacademico').value != '' &&
    document.getElementById('institucion').value != '' &&
    document.getElementById('titulo').value != ''
  ) {

    empleado.agregarInformacionAcademica(document.getElementById('nivelacademico').value);
    empleado.agregarInformacionAcademica(document.getElementById('institucion').value);
    empleado.agregarInformacionAcademica(document.getElementById('titulo').value);

    Swal.fire({
      title: 'Información acádemica',
      html: '<pre>' +
        'Nivel:       ' + empleado.getInformacionAcademica(0) + '\n' +
        'Institución: ' + empleado.getInformacionAcademica(1) + '\n' +
        'Título:      ' + empleado.getInformacionAcademica(2) + '\n'
        + '</pre>',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      customClass: {
        popup: 'format-pre'
      }
    });

  } else {
    Swal.fire({
      text: 'No se ha ingresado la información acádemica',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}


// Opción 2 Generación de credenciales

function generarDatosCredenciales() {
  
  if (
    document.getElementById('tipousuario').value != '' &&
    document.getElementById('nombre-usuario').value != '' &&
    document.getElementById('area').value != '' ) {

    empleado.setTipoUsuario(document.getElementById('tipousuario').value);
    empleado.setNombreUsuario(document.getElementById('nombre-usuario').value);
    empleado.setAreaTrabajo(document.getElementById('area').value);
    
    generarCorreoClave();

    Swal.fire({
      title: 'Credenciales generadas satisfactoriamente',
      html: '<pre>' +  empleado.toStringCredenciales() + '</pre>',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      customClass: {
        popup: 'format-pre'
      }
    });   

  } else {
    Swal.fire({
      text: 'Faltan campos por completar',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }

}


function generarCorreoClave() {

  if (empleado.getNombreUsuario()) {
    let correoPersonalizado = empleado.getNombreUsuario().toLowerCase().replace(/\s+/g, '') + '@dominio.com';
    empleado.setCorreo(correoPersonalizado);
    empleado.setClave(generarClaveAleatoria(8));
    
    document.getElementById('input-correo').value = empleado.getCorreo();
    document.getElementById('input-clave').value = empleado.getClave();
    
  } else {
    Swal.fire({
      text: 'Ingrese un nombre de usuario',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}

function generarClaveAleatoria(longitud) {
  let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let clave = '';

  for (let i = 0; i < longitud; i++) {
    clave += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  return clave;
}









