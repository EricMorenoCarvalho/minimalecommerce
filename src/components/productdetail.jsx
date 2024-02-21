import React from 'react';
import { PRODUCTSLIST } from '../components/productslist';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = PRODUCTSLIST.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <p className='title'>{product.productName}</p>
      <img alt={product.productName} src={product.productImgs[0]} className='productimages'/>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetail;
