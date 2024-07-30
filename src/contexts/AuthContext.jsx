// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Crear el contexto de autenticación
const AuthContext = createContext();

/**
 * Proveedor de autenticación
 * 
 * Este componente envuelve a los componentes hijos y proporciona el contexto de autenticación.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {React.ReactNode} props.children - Los componentes hijos que serán envueltos por el proveedor.
 * @returns {JSX.Element} El proveedor de autenticación.
 */
export const AuthProvider = ({ children }) => {
  // Estado para almacenar el usuario autenticado
  const [user, setUser] = useState(null);
  // Hook para la navegación programática
  const navigate = useNavigate();

  /**
   * Función de inicio de sesión
   * 
   * @param {string} email - El correo electrónico del usuario.
   * @param {string} password - La contraseña del usuario.
   */
  const login = async (email, password) => {
    if (email && password) {
      // Establece el usuario autenticado
      setUser({ email });
      // Navega al dashboard
      navigate('/dashboard');
    }
  };

  /**
   * Función de registro
   * 
   * @param {string} email - El correo electrónico del usuario.
   * @param {string} password - La contraseña del usuario.
   */
  const register = async (email, password) => {
    if (email && password) {
      // Establece el usuario registrado
      setUser({ email });
      // Navega al dashboard
      navigate('/dashboard');
    }
  };

  /**
   * Función de cierre de sesión
   */
  const logout = () => {
    // Elimina el usuario autenticado
    setUser(null);
    // Navega a la página de inicio de sesión
    navigate('/login');
  };

  return (
    // Proveer el contexto de autenticación a los componentes hijos
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook personalizado para usar el contexto de autenticación
 * 
 * @returns {Object} El contexto de autenticación.
 */
export const useAuth = () => useContext(AuthContext);