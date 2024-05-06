import React, { useState } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState('');
  const [saludo, setSaludo] = useState('');

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeNumero1 = (event) => {
    setNumero1(Number(event.target.value));
  };

  const handleChangeNumero2 = (event) => {
    setNumero2(Number(event.target.value));
  };

  const handleSuma = () => {
    const suma = numero1 + numero2;
    setResultado(`La suma de ${numero1} y ${numero2} es ${suma}`);
  };

  const handleResta = () => {
    const resta = numero1 - numero2;
    setResultado(`La resta de ${numero1} y ${numero2} es ${resta}`);
  };

  const handleSaludo = () => {
    setSaludo(`¡Hola, ${nombre}!`);
  };

  return (
    <div className="app-container">
      <h1>Saludo Personalizado</h1>
      <label>
        Ingresa tu nombre:
        <input type="text" value={nombre} onChange={handleChangeNombre} />
      </label>
      <button onClick={handleSaludo}>Saludar</button>
      {saludo && <p>{saludo}</p>}
      <h1>Operaciones Numéricas</h1>
      <label>
        Número 1:
        <input type="number" value={numero1} onChange={handleChangeNumero1} />
      </label>
      <label>
        Número 2:
        <input type="number" value={numero2} onChange={handleChangeNumero2} />
      </label>
      <button onClick={handleSuma}>Sumar</button>
      <button onClick={handleResta}>Restar</button>
      {resultado && <div>{resultado}</div>}
    </div>
  );
}

export default App;
