import React from 'react';
import '../productsmain';
import CategoriesButtons from './categoriesbuttons';

const TablesMain = () => {
    return (
        <div className='productsmain'>
            <p className='title-xl'>
                Elevate Your Space with Stylish Tables
            </p>
            <p className='title'>
                Discover Unique Tables Crafted for You
            </p>
            <CategoriesButtons/>
        </div>
    );
};

export default TablesMain;
