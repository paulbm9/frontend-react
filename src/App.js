import React, { useState } from 'react';
import SentimentAIBanner from './SentimentAIBanner';
import './App.css'; // Asegúrate de tener un archivo CSS para tus estilos generales

function App() {
  const [textInput, setTextInput] = useState('');

  return (
    <div className="App">
      <SentimentAIBanner setTextInput={setTextInput} />
      <div className="text-input">
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Ingresa tu texto aquí"
        />
      </div>
      {/* Otras partes de tu aplicación */}
    </div>
  );
}

export default App;
