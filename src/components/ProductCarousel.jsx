import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTSLIST } from './productslist';
import './ProductCarousel.css';

const ProductCarousel = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(10);
  const productContainerRef = useRef();

  const getAllProducts = () => {
    const shuffledProducts = PRODUCTSLIST.sort(() => 0.5 - Math.random());
    setAllProducts(shuffledProducts);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className='custom-ourproducts'>
      <text className='title more-products'>More Products</text>
      <div className='custom-gridproducts' ref={productContainerRef}>
        {allProducts.slice(0, visibleProducts).map(product => (
          <a key={product.id} href={`/products/${product.id}`} className='custom-mainproducts'>
            <img alt={product.productName} src={product.productImgs[0]} className='productimages2' />
            <p className='text underline'>{product.productName}</p>
            <p className='text-small'>${product.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
