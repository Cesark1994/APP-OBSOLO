// src/pages/Songs.jsx
import React, { useEffect, useState } from 'react';
import { fetchSongs } from '../services/api';

/**
 * Componente Songs
 * 
 * Este componente se encarga de mostrar una lista de canciones.
 * Realiza una llamada a la API para obtener las canciones y las muestra en una lista.
 * 
 * @returns {JSX.Element} La lista de canciones.
 */
const Songs = () => {
  // Estado para almacenar las canciones obtenidas de la API
  const [songs, setSongs] = useState([]);
  // Estado para almacenar mensajes de error
  const [error, setError] = useState('');

  // useEffect para cargar las canciones cuando el componente se monta
  useEffect(() => {
    // Función asíncrona para cargar las canciones
    const loadSongs = async () => {
      try {
        // Llama a la API para obtener las canciones
        const data = await fetchSongs();
        // Actualiza el estado con las canciones obtenidas
        setSongs(data);
      } catch (err) {
        // Si ocurre un error, actualiza el estado de error
        setError('Error loading songs');
      }
    };

    // Llama a la función para cargar las canciones
    loadSongs();
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

  // Si hay un error, muestra el mensaje de error
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <h1>Songs</h1>
      <ul>
        {/* Mapea las canciones y crea un elemento <li> para cada una */}
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;