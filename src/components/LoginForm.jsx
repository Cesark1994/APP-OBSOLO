import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';

/**
 * Componente LoginForm
 * 
 * Este componente representa un formulario de inicio de sesión.
 * Permite a los usuarios ingresar su correo electrónico y contraseña para iniciar sesión.
 * 
 * @returns {JSX.Element} El formulario de inicio de sesión.
 */
const LoginForm = () => {
  // Estado para almacenar el correo electrónico ingresado por el usuario
  const [email, setEmail] = useState('');
  // Estado para almacenar la contraseña ingresada por el usuario
  const [password, setPassword] = useState('');
  // Estado para almacenar mensajes de error
  const [error, setError] = useState('');
  // Hook de navegación para redirigir a diferentes rutas
  const navigate = useNavigate();

  /**
   * Maneja el envío del formulario.
   * Intenta iniciar sesión con el correo electrónico y la contraseña proporcionados.
   * Si la autenticación falla, muestra un mensaje de error y redirige a la página de canciones.
   * 
   * @param {Event} e - El evento de envío del formulario.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Intentar iniciar sesión
      await loginUser(email, password);
      // Redirigir a la página de canciones si el inicio de sesión es exitoso
      navigate('/songs');
    } catch (err) {
      // Mostrar el error pero redirigir de todos modos
      setError('Login failed. Redirecting to songs...');
      navigate('/songs');
    }
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
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;