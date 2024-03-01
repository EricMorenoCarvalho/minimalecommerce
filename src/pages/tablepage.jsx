import React from 'react';
import TableProducts from '../components/categories/tablesproducts';
import Newsletter from '../components/newsletter';
import TablesMain from '../components/categories/tablesmain';

const TablePage = () => {
  return (
      <div className='maincontent'>
        <TablesMain />
        <TableProducts />
        <Newsletter />
      </div>
  );
};

export default TablePage;
