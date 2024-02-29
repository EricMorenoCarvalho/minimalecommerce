import React from 'react';
import '../productsmain.css';

const CategoriesButtons = () => {
    return (
            <div className='button-container'>
                <a href="/products" className='button-categories text-small'>
                    All
                </a>
                <a href="/products/sofas" className='button-categories text-small'>
                    Sofas
                </a>
                <a href="/products/tables" className='button-categories text-small'>
                    Tables
                </a>
                <a href="/products/chairs" className='button-categories text-small'>
                    Chairs
                </a>
                <a href="/products/lamps" className='button-categories text-small'>
                    Lamps
                </a>
            </div>
    );
};

export default CategoriesButtons;
