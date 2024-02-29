import React from 'react';
import '../productsmain.css';
import CategoriesButtons from './categoriesbuttons';

const SofasMain = () => {
    return (
        <div className='productsmain'>
            <p className='title-xl'>
                Experience Comfort in Every Curve
            </p>
            <p className='title'>
                Find the Perfect Sofa for Your Sanctuary
            </p>
            <CategoriesButtons/>
        </div>
    );
};

export default SofasMain;
