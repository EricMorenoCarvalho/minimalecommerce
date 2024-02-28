import React from 'react';
import Home from './pages/home';
import ProductsPage from './pages/productspage';
import ProductDetailPage from './pages/productdetailpage';
import ChairPage from './pages/chairpage';
import TablePage from './pages/tablepage';
import LampPage from './pages/lamppage';
import SofaPage from './pages/sofapage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/products/chairs" element={<ChairPage />} />
        <Route path="/products/tables" element={<TablePage />} />
        <Route path="/products/sofas" element={<SofaPage />} />
        <Route path="/products/lamps" element={<LampPage />} />
      </Routes>
    </Router>
  );
}

export default App;