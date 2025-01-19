import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Asegúrate de instalar axios: npm install axios
import './ProductList.css'; // Asegúrate de tener este archivo o ignóralo si no tienes estilos.

const ProductList = () => {
  const [products, setProducts] = useState([]); // Estado para guardar los productos
  const [loading, setLoading] = useState(true); // Estado para mostrar la carga
  const [error, setError] = useState(null); // Estado para errores

  // Función que obtiene los datos desde el microservicio
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products'); // Cambia la URL si es necesario
        setProducts(response.data); // Guarda los productos en el estado
        setLoading(false); // Detiene el estado de carga
      } catch (err) {
        console.error('Error al obtener los productos:', err);
        setError('Hubo un problema al cargar los productos.');
        setLoading(false); // Detiene la carga aunque haya un error
      }
    };

    fetchProducts();
  }, []);

  // Renderiza un mensaje de carga si los datos todavía no están disponibles
  if (loading) {
    return <div>Cargando productos...</div>;
  }

  // Renderiza un mensaje de error si algo salió mal
  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  // Renderiza los productos obtenidos del microservicio
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image_url || '/placeholder.png'} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <a href={`/products/${product.id}`} className="view-details">
            Ver Detalles
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
