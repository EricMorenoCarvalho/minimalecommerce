import React from 'react';
import { Link } from 'react-router-dom';
import '../productsmain';

const TablesMain = () => {
    return (
        <div className='productsmain'>
            <p className='title-xl'>
                Elevate Your Space with Stylish Tables
            </p>
            <p className='title'>
                Discover Unique Tables Crafted for You
            </p>
            <div className='button-container'>
                <Link to="/products" className='button-categories text-small'>
                    All
                </Link>
                <Link to="/products/sofas" className='button-categories text-small'>
                    Sofas
                </Link>
                <Link to="/products/tables" className='button-categories text-small'>
                    Tables
                </Link>
                <Link to="/products/chairs" className='button-categories text-small'>
                    Chairs
                </Link>
                <Link to="/products/lamps" className='button-categories text-small'>
                    Lamps
                </Link>
            </div>
        </div>
    );
};

export default TablesMain;
