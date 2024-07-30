import React from 'react';
import useSongs from '../hooks/useSongs';

/**
 * Componente Profile
 * 
 * Este componente representa la página de perfil del usuario.
 * Utiliza el hook `useSongs` para obtener y mostrar una lista de canciones.
 * 
 * @returns {JSX.Element} La página de perfil del usuario.
 */
const Profile = () => {
  // Utiliza el hook personalizado `useSongs` para obtener las canciones y el posible error
  const { songs, error } = useSongs();

  return (
    <div>
      <h1>Perfil</h1>
      {/* Muestra un mensaje de error si hay un error al cargar las canciones */}
      {error && <p>Error al cargar las canciones: {error.message}</p>}
      <ul>
        {/* Mapea sobre la lista de canciones y las muestra en una lista desordenada */}
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;