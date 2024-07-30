// src/components/NavBar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

/**
 * Componente NavBar
 * 
 * Este componente representa una barra de navegación que muestra diferentes enlaces
 * dependiendo de si el usuario está autenticado o no.
 * 
 * @returns {JSX.Element} La barra de navegación.
 */
const NavBar = () => {
  // Obtiene el usuario y la función de cierre de sesión del contexto de autenticación
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      {/* Enlace a la página principal */}
      <Link to="/">Home</Link>
      {user ? (
        <>
          {/* Enlace al perfil del usuario si está autenticado */}
          <Link to="/profile">Profile</Link>
          {/* Botón para cerrar sesión */}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          {/* Enlace a la página de inicio de sesión si el usuario no está autenticado */}
          <Link to="/login">Login</Link>
          {/* Enlace a la página de registro si el usuario no está autenticado */}
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;