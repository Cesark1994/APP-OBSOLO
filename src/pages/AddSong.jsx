// src/pages/AddSong.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addSong } from '../services/api';

/**
 * Componente AddSong
 * 
 * Este componente permite a los usuarios añadir una nueva canción proporcionando un título y un archivo de audio.
 * 
 * @returns {JSX.Element} El formulario para añadir una nueva canción.
 */
const AddSong = () => {
  // Estado para almacenar el título de la canción
  const [title, setTitle] = useState('');
  // Estado para almacenar el archivo de la canción
  const [songFile, setSongFile] = useState(null);
  // Estado para almacenar mensajes de error
  const [error, setError] = useState('');
  // Hook para la navegación programática
  const navigate = useNavigate();

  /**
   * Maneja el envío del formulario.
   * 
   * @param {Event} e - El evento de envío del formulario.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    const formData = new FormData();
    formData.append('title', title); // Añade el título al FormData
    formData.append('song_file', songFile); // Añade el archivo de la canción al FormData

    try {
      // Llama a la API para añadir la canción
      await addSong(formData);
      // Navega a la página de canciones si la subida es exitosa
      navigate('/songs');
    } catch (err) {
      // Si ocurre un error, actualiza el estado de error
      setError('Error adding song');
    }
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <h1>Add Song</h1>
      {/* Muestra el mensaje de error si existe */}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Song File:</label>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setSongFile(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default AddSong;