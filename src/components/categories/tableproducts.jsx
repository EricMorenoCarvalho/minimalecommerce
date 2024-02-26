import React from 'react';
import { PRODUCTSLIST } from '../productslist';

const TableProducts = () => {
  const tableProducts = PRODUCTSLIST.filter(product => product.category === 'Tables');

  return (
    <div className='table-products'>
      {tableProducts.map(product => (
        <div key={product.id} className='table-product'>
          <img src={product.productImgs[0]} alt={product.productName} className='table-product-image' />
          <p className='table-product-title'>{product.productName}</p>
          <p className='table-product-price'>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default TableProducts;
