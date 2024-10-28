// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente principal de la aplicación

// Crea el root donde se montará la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro de React.StrictMode para detectar problemas
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
