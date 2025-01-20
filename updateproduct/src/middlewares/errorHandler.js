// Middleware para manejar errores
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message || 'Error desconocido');
  
    res.status(err.status || 500).json({
      error: err.message || 'Ocurrió un error en el servidor',
    });
  };
  
  export default errorHandler;
  