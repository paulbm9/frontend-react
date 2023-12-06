// Body.js
import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="body">
      <div className="body-content">
        <input type="text" placeholder="Ingrese su texto, producto o servicio" className="input-text" />
        <button className="button">Consultar</button>
      </div>
    </div>
  );
};

export default Body;
