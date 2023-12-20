// Body.js
import React from 'react';
import './Body.css';
import Imagen from './SentimentAI.png';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className="search-container">
      <div className="search-content">
        <div className="search-text">
          <p className="slogan">ENTIENDE LO QUE OPINAN TUS CLIENTES</p>
          <h1 className="title">Mejores análisis, Mejores decisiones</h1>
          <p className="subtitle"> En SentimentAI buscamos ayudar en la toma de decisiones con un análisis aplicando las últimas tecnologías de la información.</p>
          <br></br>
          <input type="text" placeholder="Ingresa tu búsqueda" className="search-input"/>
          <button className="search-button">Consultar</button>
        </div>
        <img src={Imagen}  alt="Propósito del sitio" className="search-img" />
      </div>
    </div>
  );
};

export default Body;
