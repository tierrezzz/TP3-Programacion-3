// palabras predefinidas
const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

const form = document.getElementById("filtroForm"); 
const input = document.getElementById("palabraInput"); 
const resultadoDiv = document.getElementById("resultado"); 

// evento "submit" del formulario
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtiene el texto ingresado, quitando espacios y convirtiendolo a minusculas
  const texto = input.value.trim().toLowerCase();

  // Si no se ingreso texto, muestra un mensaje de error
  if (texto === "") {
    resultadoDiv.innerHTML = '<p class="error">Por favor, ingrese una palabra para filtrar.</p>';
    return; 
  }

  // Filtra las palabras que contienen el texto ingresado (sin importar mayúsculas/minúsculas)
  const filtradas = palabras.filter(palabra =>
    palabra.toLowerCase().includes(texto)
  );

  // Si no se encontraron coincidencias
  if (filtradas.length === 0) {
    resultadoDiv.innerHTML = "<p>No se encontraron coincidencias.</p>";
  } else {

    // Muestra la lista filtrada como una lista HTML
    resultadoDiv.innerHTML = "<ul>" + 
      filtradas.map(p => `<li>${p}</li>`).join("") +
      "</ul>";
  }
});