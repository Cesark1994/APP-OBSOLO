// Importa la biblioteca React
import React from 'react';
// Importa el componente de rutas de la aplicación
import AppRoutes from './routes/AppRoutes';

// Define el componente principal de la aplicación
const App = () => {
  return (
    // Contenedor principal de la aplicación con la clase "App"
    <div className="App">
      {/* Renderiza las rutas de la aplicación */}
      <AppRoutes />
    </div>
  );
};

// Exporta el componente App como el componente predeterminado
export default App;