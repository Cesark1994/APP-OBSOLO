// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Componente Register
 * 
 * Este componente representa la página de registro de la aplicación.
 * Permite a los usuarios ingresar su correo electrónico y contraseña para registrarse.
 * 
 * @returns {JSX.Element} La página de registro.
 */
const Register = () => {
  // Estado para almacenar el correo electrónico del usuario
  const [email, setEmail] = useState('');
  // Estado para almacenar la contraseña del usuario
  const [password, setPassword] = useState('');
  // Hook para la navegación programática
  const navigate = useNavigate();

  /**
   * Maneja el envío del formulario de registro.
   * 
   * @param {Event} e - El evento de envío del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    // Simular registro
    navigate('/login'); // Navega a la página de inicio de sesión después del registro
  };

  return (
    <div>
      <h1>Register</h1>
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
            autoComplete="new-password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;