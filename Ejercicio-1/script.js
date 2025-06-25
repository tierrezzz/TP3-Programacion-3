const selectOperacion = document.getElementById("operacion");
const btnCalcular = document.getElementById("btnCalcular");
const numero2Input = document.getElementById("numero2");

// Función para validar y actualizar el estado del botón
function validarDivision() {
  const operacion = selectOperacion.value;
  const numero2 = parseFloat(numero2Input.value);

  // Si es division y n2 <= 0, deshabilitar boton
  if (operacion === "division" && (isNaN(numero2) || numero2 <= 0)) {
    btnCalcular.disabled = true;
  } else {
    btnCalcular.disabled = false;
  }
}

// Validar al cambiar operacion o numero2
selectOperacion.addEventListener("change", validarDivision);
numero2Input.addEventListener("input", validarDivision);

function calcular() {
  const n1 = parseFloat(document.getElementById("numero1").value);
  const n2 = parseFloat(document.getElementById("numero2").value);
  const operacion = selectOperacion.value;
  let resultado;

  // Ejecuta la funcion de la opcion elegida (suma, resta, etc)
  switch (operacion) {
    case "suma":
      resultado = n1 + n2;
      break;
    case "resta":
      resultado = n1 - n2;
      break;
    case "multiplicacion":
      resultado = n1 * n2;
      break;
    case "division":
      resultado = n1 / n2;
      break;
    default:
      resultado = "Operación no válida";
  }

  // guardamos el resultado
  document.getElementById("resultado").textContent = resultado;
}
