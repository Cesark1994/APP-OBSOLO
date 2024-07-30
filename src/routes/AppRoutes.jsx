// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Songs from '../pages/Songs';
import Login from '../pages/Login';
import Register from '../pages/Register';

/**
 * Componente AppRoutes
 * 
 * Este componente define las rutas de la aplicación utilizando react-router-dom.
 * 
 * Rutas definidas:
 * - /songs: Renderiza el componente Songs.
 * - /login: Renderiza el componente Login.
 * - /register: Renderiza el componente Register.
 * - /: Redirige a /songs.
 * 
 * @returns {JSX.Element} Las rutas de la aplicación.
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta para la página de canciones */}
      <Route path="/songs" element={<Songs />} />
      
      {/* Ruta para la página de inicio de sesión */}
      <Route path="/login" element={<Login />} />
      
      {/* Ruta para la página de registro */}
      <Route path="/register" element={<Register />} />
      
      {/* Ruta por defecto que redirige a /songs */}
      <Route path="/" element={<Navigate to="/songs" />} />
    </Routes>
  );
};

export default AppRoutes;