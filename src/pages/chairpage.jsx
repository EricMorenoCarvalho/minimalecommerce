import React from 'react';
import ChairsProducts from '../components/categories/chairsproducts';
import ChairsMain from '../components/categories/chairsmain';

const ChairPage = () => {

  return (
      <div className='maincontent'>
        <ChairsMain />
        <ChairsProducts />
      </div>
  );
};

export default ChairPage;
