// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Importa los estilos CSS específicos para esta página

/**
 * Componente Home
 * 
 * Este componente representa la página de inicio de la aplicación.
 * Muestra un mensaje de bienvenida y redirige al usuario a la página de inicio de sesión cuando se hace clic en cualquier parte de la página.
 * 
 * @returns {JSX.Element} La página de inicio.
 */
const Home = () => {
  // Hook para la navegación programática
  const navigate = useNavigate();

  /**
   * Función para redirigir a la página de inicio de sesión.
   */
  const goToLogin = () => {
    navigate('/login'); // Navega a la ruta de inicio de sesión
  };

  return (
    // Contenedor principal con un evento de clic para redirigir al inicio de sesión
    <div className="home-container" onClick={goToLogin}>
      <div className="welcome-message">
        <h1>BIENVENIDOS A MI APLICACIÓN DE MÚSICA</h1>
        <p>Haga clic para iniciar sesión o registrarse</p>
      </div>
    </div>
  );
};

export default Home;