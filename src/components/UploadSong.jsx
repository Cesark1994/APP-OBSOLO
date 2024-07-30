// src/components/UploadSong.jsx
import React, { useState } from 'react';
import { uploadSong } from '../services/api';
import './UploadSong.css';

/**
 * Componente UploadSong
 * 
 * Este componente permite a los usuarios subir una canción proporcionando un título y un archivo.
 * 
 * @returns {JSX.Element} El formulario de subida de canciones.
 */
const UploadSong = () => {
  // Estado para almacenar el título de la canción
  const [title, setTitle] = useState('');
  // Estado para almacenar el archivo de la canción
  const [file, setFile] = useState(null);
  // Estado para almacenar mensajes de error
  const [error, setError] = useState('');
  // Estado para almacenar mensajes de éxito
  const [success, setSuccess] = useState('');

  /**
   * Maneja el envío del formulario.
   * 
   * @param {Event} e - El evento de envío del formulario.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    try {
      // Llama a la API para subir la canción
      await uploadSong({ title, file });
      // Si la subida es exitosa, actualiza el estado de éxito
      setSuccess('Song uploaded successfully');
    } catch (err) {
      // Si ocurre un error, actualiza el estado de error
      setError('Error uploading song');
    }
  };

  return (
    <div className="upload-song">
      <h2>Upload Song</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>File</label>
          <input 
            type="file" 
            onChange={(e) => setFile(e.target.files[0])} 
            required 
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      {/* Muestra el mensaje de error si existe */}
      {error && <div className="error">{error}</div>}
      {/* Muestra el mensaje de éxito si existe */}
      {success && <div className="success">{success}</div>}
    </div>
  );
};

export default UploadSong;