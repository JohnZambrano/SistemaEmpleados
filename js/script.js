// Clase Empleado
class Empleado {
  constructor(nombre, apellido, genero, fechaNacimiento, fechaIngreso, salario) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
    this.fechaNacimiento = fechaNacimiento;
    this.fechaIngreso = fechaIngreso;
    this.salario = salario;
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
  alert(`Nombre: ${empleado.nombre} ${empleado.apellido}\nGénero: ${empleado.genero}\nFecha de nacimiento: ${empleado.fechaNacimiento}\nFecha de ingreso: ${empleado.fechaIngreso}\nSalario : ${empleado.salario}`);
}

function modificarSalario() {
  const salarioModificado = document.getElementById("salarioModificado").value;

  empleado.salario = salarioModificado;

  // Actualizar la información del empleado en la alerta o modal
  alert(`Salario actualizado: ${empleado.salario}`);
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

function agregarInformacionComplementaria() {
  const nivelAcademico = document.getElementById("nivelAcademico").value;

  // Almacenar en un arreglo
  const informacionComplementaria = [nivelAcademico];

  // Visualizar en una alerta o modal
  alert(`Información complementaria:\n- Nivel académico: ${informacionComplementaria}`);
}
