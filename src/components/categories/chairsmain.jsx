import React from 'react';
import '../productsmain.css';
import CategoriesButtons from './categoriesbuttons';

const ChairsMain = () => {
    return (
        <div className='productsmain'>
            <p className='title-xl'>
                Sit Back and Relax in Style
            </p>
            <p className='title'>
                Unveil Our Elegant Chair Selection
            </p>
            <CategoriesButtons />
        </div>
    );
};

export default ChairsMain;
