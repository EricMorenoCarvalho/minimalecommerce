import React from 'react';
import SofasProducts from '../components/categories/sofasproducts';
import SofasMain from '../components/categories/sofasmain';

const ChairPage = () => {
  return (
      <div className='maincontent'>
        <SofasMain />
        <SofasProducts />
        
      </div>
  );
};

export default ChairPage;
