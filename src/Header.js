// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>
        <span className="app-name">Sentiment</span>
        <span className="ai">AI</span>
        </h1>
      </div>
      <div>
        <button className='contacto'>Contacto</button>
      </div>
    </header>
  );
};

export default Header;
