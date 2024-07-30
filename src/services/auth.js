// Función para registrar un nuevo usuario
export const registerUser = async (email, password, username) => {
  // Esta es una simulación del registro de usuario
  try {
    // Crear un objeto de usuario con los datos proporcionados
    const user = { email, password, username };
    // Guardar el usuario en el localStorage
    localStorage.setItem('user', JSON.stringify(user));
    // Devolver un mensaje de éxito
    return { message: 'User registered successfully' };
  } catch (error) {
    // Lanzar un error si ocurre algún problema durante el registro
    throw new Error('Error registering user');
  }
};

// Función para iniciar sesión de un usuario
export const loginUser = async (email, password) => {
  try {
    // Obtener el usuario almacenado en el localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    // Verificar si el usuario existe y las credenciales coinciden
    if (user && user.email === email && user.password === password) {
      // Devolver un mensaje de éxito y un token falso
      return { message: 'User logged in successfully', token: 'fake-jwt-token' };
    } else {
      // Lanzar un error si las credenciales son inválidas
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    // Lanzar un error si ocurre algún problema durante el inicio de sesión
    throw new Error(error.message);
  }
};