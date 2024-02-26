import React from 'react';
import Home from './pages/home';
import ProductsPage from './pages/productspage';
import ProductDetailPage from './pages/productdetailpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;