import React from 'react';
import LampsProducts from '../components/categories/lampsproducts';
import LampsMain from '../components/categories/lampsmain';

const LampPage = () => {
  return (
      <div className='maincontent'>
        <LampsMain />
        <LampsProducts />
      </div>
  );
};

export default LampPage;
