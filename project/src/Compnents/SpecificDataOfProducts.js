
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetailsOfProducts() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3002/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error));
  }, [productId]);

  if (!product) {
    return <div>Please wait as the page loads...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default DetailsOfProducts;