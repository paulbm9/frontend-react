import React from 'react';
import './SentimentAIBanner.css';

const SentimentAIBanner = ({ setTextInput }) => {
  const handleButtonClick = () => {
    // Aquí puedes agregar la lógica para procesar el texto ingresado
    // Puedes utilizar librerías o servicios de análisis de sentimientos

    // Por ahora, simplemente mostramos una alerta con el texto ingresado
    alert(`Texto ingresado: ${setTextInput}`);
  };

  return (
    <div className="sentiment-ai-banner">
      <div className="left-section">
        <h1>SentimentAI</h1>
      </div>
      <div className="right-section">
        <button onClick={handleButtonClick}>Contacto</button>
      </div>
    </div>
  );
};

export default SentimentAIBanner;
