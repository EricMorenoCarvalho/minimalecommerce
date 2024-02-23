import React, { useState, useEffect } from 'react';
import { PRODUCTSLIST } from './productslist';

const OurProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = () => {
    const shuffledProducts = PRODUCTSLIST.sort(() => 0.5 - Math.random());
    setAllProducts(shuffledProducts);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className='ourproducts'>
      <div className='gridproducts'>
        {allProducts.map(product => (
          <a key={product.id} href={`/product/${product.id}`} className='mainproducts'>
            <img alt={product.productName} src={product.productImgs[0]} className='productimages' />
            <p className='text nowrap'>{product.productName}</p>
            <p className='text-small'>${product.price}</p>
          </a>
        ))}
      </div>

    </div>
  );
};

export default OurProducts;
