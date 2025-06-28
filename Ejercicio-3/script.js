// URL del endpoint
const todosEndpoint = "https://jsonplaceholder.typicode.com/todos";
  
// Obtener referencias a elementos del DOM
const todosList = document.getElementById("todos-list");
const errorMessageDiv = document.getElementById("error-message");
const loadingDiv = document.getElementById("loading");
const fetchTodosBtn = document.getElementById("fetch-todos-btn");

// Evento que se activa al hacer clic en el boton
fetchTodosBtn.addEventListener("click", async () => {
  todosList.innerHTML = "";
  errorMessageDiv.textContent = "";
  loadingDiv.style.display = "block"; 
  try {
    // Hacer la solicitud GET a la API
    const response = await fetch(todosEndpoint);

    // Ocultar el mensaje de carga
    loadingDiv.style.display = "none";

    // Verificar si hubo error en la respuesta
    if (!response.ok) {
      errorMessageDiv.textContent = `Hubo un problema: ${response.status} - ${response.statusText}`;
      return; 
    }

    // Convertir los datos de respuesta a formato JSON
    const data = await response.json();

    // Filtrar solo las tareas completadas 
    const completadas = data.filter((todo) => todo.completed);

    // Recorrer las tareas completadas y mostrarlas en la lista <ul>
    completadas.forEach((todo) => {
      const li = document.createElement("li"); 
      li.classList.add("completed"); 
      li.innerHTML = `<strong>${todo.title}</strong> (ID: ${todo.id})`; 
      todosList.appendChild(li);
    });

    // Si no hay tareas completadas entre las 5
    if (completadas.length === 0) {
      todosList.innerHTML = "<li>No hay tareas completadas.</li>";
    }
  } catch (error) {
    // Mostrar mensaje de error si falla la conexión o la API
    loadingDiv.style.display = "none";
    errorMessageDiv.textContent = "Error al cargar las tareas.";
    console.error(error);
  }
});