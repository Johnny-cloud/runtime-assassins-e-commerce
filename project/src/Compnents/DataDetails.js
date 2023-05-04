import React, { useState, useEffect } from 'react';
import ListOfAllProducts from './AllDataOfAllProducts';
import DetailsOfProducts from './SpecificDataOfProducts';

function ProductDetails() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3002/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  const handleSelectProduct = (productId) => {
    fetch(`http://localhost:3002/products/${productId}`)
      .then(response => response.json())
      .then(data => setSelectedProduct(data))
      .catch(error => console.log(error));
  }

  return (
    <div>
      <ListOfAllProducts products={products} handleSelectedProduct={handleSelectProduct} />
      <DetailsOfProducts product={selectedProduct} />
    </div>
  );
}

export default ProductDetails;