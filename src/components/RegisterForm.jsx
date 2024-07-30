// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

/**
 * Componente RegisterForm
 * 
 * Este componente representa un formulario de registro de usuario.
 * Permite a los usuarios ingresar su correo electrónico, nombre de usuario, contraseña y confirmación de contraseña para registrarse.
 * 
 * @returns {JSX.Element} El formulario de registro.
 */
const RegisterForm = () => {
  // Estado para almacenar el correo electrónico ingresado por el usuario
  const [email, setEmail] = useState('');
  // Estado para almacenar el nombre de usuario ingresado por el usuario
  const [username, setUsername] = useState('');
  // Estado para almacenar la contraseña ingresada por el usuario
  const [password, setPassword] = useState('');
  // Estado para almacenar la confirmación de la contraseña ingresada por el usuario
  const [confirmPassword, setConfirmPassword] = useState('');
  // Obtiene la función de registro del contexto de autenticación
  const { register } = useAuth();

  /**
   * Maneja el envío del formulario.
   * Verifica que las contraseñas coincidan antes de llamar a la función de registro.
   * 
   * @param {Event} e - El evento de envío del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica que las contraseñas coincidan
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Llama a la función de registro con los datos del formulario
    register(email, username, password);
  };

  return (
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
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
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
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;