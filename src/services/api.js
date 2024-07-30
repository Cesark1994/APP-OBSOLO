import axios from 'axios';

// URL base de la API
const API_URL = 'http://sandbox.academiadevelopers.com/harmonyhub';

// Función para manejar errores de la API
const handleApiError = (error) => {
  console.error('API Error:', error);
  return [];
};

// Función para obtener canciones desde la API
export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${API_URL}/songs/`);
    return response.data; // Asegúrate de que esto sea un array
  } catch (error) {
    return handleApiError(error);
  }
};

// Función para obtener listas de reproducción desde la API
export const fetchPlaylists = async () => {
  try {
    const response = await axios.get(`${API_URL}/playlists/`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Función para obtener álbumes desde la API
export const fetchAlbums = async () => {
  try {
    const response = await axios.get(`${API_URL}/albums/`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Función para obtener artistas desde la API
export const fetchArtists = async () => {
  try {
    const response = await axios.get(`${API_URL}/artists/`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Función para obtener géneros desde la API
export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${API_URL}/genres/`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Función para obtener entradas de listas de reproducción desde la API
export const fetchPlaylistEntries = async () => {
  try {
    const response = await axios.get(`${API_URL}/playlist-entries/`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Función para obtener artistas de canciones desde la API
export const fetchSongArtists = async () => {
  try {
    const response = await axios.get(`${API_URL}/song-artists/`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Función para obtener géneros de canciones desde la API
export const fetchSongGenres = async () => {
  try {
    const response = await axios.get(`${API_URL}/song-genres/`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Función para subir una nueva canción a la API
export const uploadSong = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(`${API_URL}/songs/upload/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Función para eliminar una canción de la API
export const deleteSong = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/songs/${id}/`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};