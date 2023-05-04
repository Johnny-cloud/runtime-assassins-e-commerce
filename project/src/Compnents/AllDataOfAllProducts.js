
import React, { useState, useEffect } from 'react';
import ProductRendering from './IndividualProductRendering';

function ListOfAllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>The List Of All Products</h2>
      <ul>
        {Array.isArray(products) && products.map(product => (
          <ProductRendering key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ListOfAllProducts;