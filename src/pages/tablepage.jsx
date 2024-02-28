import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import TableProducts from '../components/categories/tablesproducts';
import Newsletter from '../components/newsletter';
import TablesMain from '../components/categories/tablesmain';

const TablePage = () => {
  return (
    <div>
      <Header />
      <div className='maincontent'>
        <TablesMain />
        <TableProducts />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default TablePage;
