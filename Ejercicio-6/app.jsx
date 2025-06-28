const { useState } = React;

function App() {
  // Estados para peso, altura, resultado del IMC y mensaje visual
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [claseColor, setClaseColor] = useState('');

  // Funcion para calcular el IMC y asignar mensaje + estilo
  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum || alturaNum <= 0) {
      setMensaje('Datos inválidos');
      setClaseColor('rojo');
      setImc(null);
      return;
    }

    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    setImc(imcCalculado.toFixed(2));

    // Determinar el mensaje y color segun el IMC
    if (imcCalculado < 18.5) {
      setMensaje('Nivel bajo de IMC');
      setClaseColor('amarillo');
    } else if (imcCalculado < 25) {
      setMensaje('Nivel normal de IMC');
      setClaseColor('verde');
    } else if (imcCalculado < 30) {
      setMensaje('Nivel de sobrepeso');
      setClaseColor('naranja');
    } else {
      setMensaje('Nivel de obesidad');
      setClaseColor('rojo');
    }
  };

  // Renderizado del formulario y resultados
  return (
    <div>
      <h2>Calculadora de IMC</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Input para peso en kg */}
        <label>Peso (kg):</label><br />
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        /><br />

        {/* Input para altura en metros */}
        <label>Altura (m):</label><br />
        <input
          type="number"
          value={altura}
          step="0.01"
          onChange={(e) => setAltura(e.target.value)}
        /><br />

        {/* Botón para calcular */}
        <button onClick={calcularIMC}>Calcular IMC</button>
      </form>

      {/* Resultado */}
      {imc && (
        <div>
          <h3>Tu IMC es: {imc}</h3>
          <p className={claseColor}>{mensaje}</p>
        </div>
      )}
    </div>
  );
}