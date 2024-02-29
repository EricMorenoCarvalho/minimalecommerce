import React from 'react';
import '../productsmain.css';
import CategoriesButtons from './categoriesbuttons';

const LampsMain = () => {
    return (
        <div className='productsmain'>
            <p className='title-xl'>
                Illuminate Your World with Elegance
            </p>
            <p className='title'>
                Explore Our Exquisite Lamp Collection
            </p>
            <CategoriesButtons/>
        </div>
    );
};

export default LampsMain;
