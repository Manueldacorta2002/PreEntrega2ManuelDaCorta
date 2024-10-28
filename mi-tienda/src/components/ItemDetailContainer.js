// src/components/ItemDetailContainer.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const mockProducts = [
  { id: 1, name: 'RAM 16GB DDR4', category: 'ram', price: 80, description: 'Memoria RAM de alta velocidad.' },
  { id: 2, name: 'Procesador Ryzen 7', category: 'procesadores', price: 300, description: 'Procesador potente para gaming y trabajo.' },
  { id: 3, name: 'Placa RTX 3060', category: 'placas', price: 500, description: 'Placa gráfica para gaming.' },
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundProduct = mockProducts.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setError(null);
    } else {
      setError('Producto no encontrado.');
    }
    setLoading(false);
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetailContainer;
