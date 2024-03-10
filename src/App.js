import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ProductsPage from './pages/productspage';
import ProductDetailPage from './pages/productdetailpage';
import Header from './components/header';
import Footer from './components/footer';
import CartComponent from './components/cartcomponent';
import Newsletter from './components/newsletter';

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  const toggleClose = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  return (
    <Router>
      <Header toggleCarrito={toggleCarrito} mostrarCarrito={mostrarCarrito} />
      <CartComponent isOpen={mostrarCarrito} onClose={toggleClose} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<ProductsPage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
