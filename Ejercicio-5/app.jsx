const { useState } = React;

function App() {
  // Estados para los dos numeros, la operacion seleccionada y el resultado
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacion, setOperacion] = useState('suma');
  const [resultado, setResultado] = useState('');

  // Funcion que se ejecuta al hacer clic en "Calcular"
  const handleCalcular = () => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    let res;

    // Se realiza la operacion segun el valor seleccionado
    switch (operacion) {
      case 'suma':
        res = n1 + n2;
        break;
      case 'resta':
        res = n1 - n2;
        break;
      case 'multiplicacion':
        res = n1 * n2;
        break;
      case 'division':
        // Aunque esta deshabilitado desde el boton, se valida por seguridad
        res = n2 !== 0 ? n1 / n2 : 'No se puede dividir por cero';
        break;
      default:
        res = 'Operación inválida';
    }

    // Se guarda el resultado en el estado
    setResultado(res);
  };

  // Condicion especial: se deshabilita SOLO si es division Y el segundo numero es 0
  const deshabilitar = operacion === 'division' && parseFloat(numero2) === 0;

  // Renderizado del formulario y resultado
  return (
    <div>
      <h2>Calculadora con React</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Input para el primer numero */}
        <label>Numero 1:</label><br />
        <input
          type="number"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
        /><br />

        {/* Input para el segundo numero */}
        <label>Numero 2:</label><br />
        <input
          type="number"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
        /><br />

        {/* Selector de operacion */}
        <label>Operación:</label><br />
        <select
          value={operacion}
          onChange={(e) => setOperacion(e.target.value)}
        >
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multiplicacion">Multiplicacion</option>
          <option value="division">Division</option>
        </select><br />

        {/* Boton calcular, se desactiva solo si la operacion es division y numero2 es 0 */}
        <button onClick={handleCalcular} disabled={deshabilitar}>
          Calcular
        </button>
      </form>

      {/* Muestra el resultado */}
      <h3>Resultado: {resultado !== '' ? resultado : '---'}</h3>
    </div>
  );
}