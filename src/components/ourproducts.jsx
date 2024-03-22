import React from 'react'
import Products from '../components/products'

const OurProducts = () => {

    return (
        <div className='ourproducts'>
            <p className='title'>Our products</p>
            <Products limit={4} />
            <a href={"/products"}>
                <text className="button text-small button-seemore">
                    See More
                </text>
            </a>
        </div>
    );
};

export default OurProducts;