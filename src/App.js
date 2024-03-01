import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ProductsPage from './pages/productspage';
import ProductDetailPage from './pages/productdetailpage';
import ChairPage from './pages/chairpage';
import TablePage from './pages/tablepage';
import LampPage from './pages/lamppage';
import SofaPage from './pages/sofapage';
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
    setMostrarCarrito(false);
  };

  return (
    <Router>
        <Header toggleCarrito={toggleCarrito} />
        {mostrarCarrito && <CartComponent onClose={toggleClose}/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/*" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/products/chairs" element={<ChairPage />} />
          <Route path="/products/tables" element={<TablePage />} />
          <Route path="/products/sofas" element={<SofaPage />} />
          <Route path="/products/lamps" element={<LampPage />} />
        </Routes>
        <Newsletter/>
        <Footer />
    </Router>
  );
}

export default App;