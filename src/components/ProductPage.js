import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = () => {
  const location = useLocation();
  const { product, image } = location.state;

  return (
    <div>
      <Product product={product} image={image} />
    </div>
  );
};

export default ProductPage;
