import React from 'react'
import Products from '../components/products'
import '../components/ourproducts.css'

const OurProducts = () => {

  return (
    <div className='ourproducts'>
      <p className='title'>Our products</p>
      <Products limit={8}/>
        <a href={"/products"}>
          <text className="button text-small button-seemore">
            See More
          </text>
        </a>
    </div>
  );
};

export default OurProducts;