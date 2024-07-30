// Importa la biblioteca React
import React from 'react';
// Importa la biblioteca ReactDOM para renderizar componentes React en el DOM
import ReactDOM from 'react-dom/client';
// Importa el componente Router de react-router-dom para manejar las rutas
import { BrowserRouter as Router } from 'react-router-dom';
// Importa el componente principal de la aplicación
import App from './App';
// Importa el proveedor de contexto de autenticación
import { AuthProvider } from './contexts/AuthContext';
// Importa los estilos globales de la aplicación
import './index.css';

// Renderiza la aplicación en el elemento con id 'root' en el DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  // Envolvemos la aplicación en React.StrictMode para activar comprobaciones adicionales y advertencias
  <React.StrictMode>
    {/* Envolvemos la aplicación en el Router para habilitar la navegación */}
    <Router>
      {/* Envolvemos la aplicación en el AuthProvider para proporcionar el contexto de autenticación */}
      <AuthProvider>
        {/* Renderiza el componente principal de la aplicación */}
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);