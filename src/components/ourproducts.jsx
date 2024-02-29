import React, { useState, useEffect } from 'react';
import { PRODUCTSLIST } from '../components/productslist';
import '../components/ourproducts.css';

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
          <a key={product.id} href={`/products/${product.id}`} className='mainproducts'>
            <img alt={product.productName} src={product.productImgs[0]} className='productimages' />
            <p className='text nowrap underline'>{product.productName}</p>
            <p className='text-small'>${product.price}</p>
          </a>
        ))}
      </div>
      <a href={"/products"}>
      <text className="button text-small button-seemore">See More</text>
      </a>
    </div>
  );
};

export default OurProducts;