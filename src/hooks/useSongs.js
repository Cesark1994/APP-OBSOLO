// src/hooks/useSongs.js
import { useState, useEffect } from 'react';
import { fetchSongs } from '../services/api';

/**
 * Hook personalizado para obtener canciones.
 * 
 * Este hook maneja la lógica de carga de canciones, incluyendo el estado de carga y manejo de errores.
 * 
 * @returns {Object} Un objeto que contiene las canciones, el estado de carga y el error.
 */
const useSongs = () => {
  // Estado para almacenar la lista de canciones
  const [songs, setSongs] = useState([]);
  // Estado para indicar si las canciones están cargando
  const [loading, setLoading] = useState(true);
  // Estado para almacenar cualquier error que ocurra durante la carga
  const [error, setError] = useState(null);

  useEffect(() => {
    // Crear un controlador de abortar para cancelar la solicitud si el componente se desmonta
    const controller = new AbortController();
    const signal = controller.signal;

    /**
     * Función para cargar las canciones desde la API.
     */
    const loadSongs = async () => {
      try {
        // Llamar a la API para obtener las canciones
        const data = await fetchSongs(signal);
        // Actualizar el estado con las canciones obtenidas
        setSongs(data);
      } catch (err) {
        // Si ocurre un error que no es una cancelación, actualizar el estado de error
        if (err.name !== 'CanceledError') {
          setError('Error loading songs');
        }
      } finally {
        // Indicar que la carga ha terminado
        setLoading(false);
      }
    };

    // Llamar a la función para cargar las canciones
    loadSongs();

    // Limpiar el efecto abortando la solicitud si el componente se desmonta
    return () => controller.abort();
  }, []);

  // Retornar las canciones, el estado de carga y el error
  return { songs, loading, error };
};

export default useSongs;