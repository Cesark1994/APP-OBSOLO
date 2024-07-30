// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Componente Login
 * 
 * Este componente representa la página de inicio de sesión de la aplicación.
 * Permite a los usuarios ingresar su correo electrónico y contraseña para iniciar sesión.
 * 
 * @returns {JSX.Element} La página de inicio de sesión.
 */
const Login = () => {
  // Estado para almacenar el correo electrónico del usuario
  const [email, setEmail] = useState('');
  // Estado para almacenar la contraseña del usuario
  const [password, setPassword] = useState('');
  // Hook para la navegación programática
  const navigate = useNavigate();

  /**
   * Maneja el envío del formulario de inicio de sesión.
   * 
   * @param {Event} e - El evento de envío del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    // Simular inicio de sesión
    navigate('/songs'); // Navega a la página de canciones después del inicio de sesión
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;