import React, { useState, useEffect } from 'react';
import { PRODUCTSLIST } from '../productslist';

const TableProducts = () => {
  const [chairProducts, setChairProducts] = useState([]);

  const getChairProducts = () => {
    const chairs = PRODUCTSLIST.filter(product => product.category === 'Tables');
    const shuffledChairs = chairs.sort(() => 0.5 - Math.random());
    setChairProducts(shuffledChairs);
  };

  useEffect(() => {
    getChairProducts();
  }, []);

  return (
    <div className='ourproducts'>
      <div className='gridproducts'>
        {chairProducts.map(product => (
          <a key={product.id} href={`/products/${product.id}`} className='mainproducts'>
            <img alt={product.productName} src={product.productImgs[0]} className='productimages' />
            <p className='text nowrap underline'>{product.productName}</p>
            <p className='text-small'>${product.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TableProducts;
