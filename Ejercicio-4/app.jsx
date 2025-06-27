function App() {
    const [botonHabilitado, setBotonHabilitado] = React.useState("izquierdo");
  
    // Recibe como parámetro el lado que fue presionado ("izquierdo" o "derecho")
    // si se hace clic en "izquierdo", habilita "derecho" y viceversa
    const manejarClick = (lado) => {
      
      setBotonHabilitado(lado === "izquierdo" ? "derecho" : "izquierdo");
    };
  
    // Lo que se muestra en pantalla
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {/* Botón izquierdo */}
        <button
          onClick={() => manejarClick("izquierdo")}
          disabled={botonHabilitado !== "izquierdo"}
        >
          Izquierdo
        </button>
  
        {/* Botón derecho */}
        <button
          onClick={() => manejarClick("derecho")} 
          disabled={botonHabilitado !== "derecho"} 
          style={{ marginLeft: "20px" }} 
        >
          Derecho
        </button>
      </div>
    );
  }