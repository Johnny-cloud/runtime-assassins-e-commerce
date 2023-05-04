
import React from 'react';

function ProductRendering({ product }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
    </li>
  );
}

export default ProductRendering;