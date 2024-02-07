import React, { useState, useEffect } from 'react';
import { PRODUCTSLIST } from '../components/productslist';

const OurProducts = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  const getRandomProducts = () => {
    const shuffledProducts = PRODUCTSLIST.sort(() => 0.5 - Math.random());
    const selectedProducts = shuffledProducts.slice(0, 8);
    setRandomProducts(selectedProducts);
  };

  useEffect(() => {
    getRandomProducts();
  }, []);

  return (
    <div className='ourproducts'>
      <p className='title'>Our products</p>
      <div className='gridproducts'>
        {randomProducts.map(product => (
          <div key={product.id} className='mainproducts'>
            <img alt={product.productName} src={product.productImgs[0]} className='productimages' />
            <p className='text nowrap'>{product.productName}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <a href="#" className="seemore">See More</a>
    </div>
  );
};

export default OurProducts;
