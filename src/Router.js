import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import ProductCart from './pages/ProductCart/ProductCart';
import ProductList from './pages/ProductList/ProductList';
import ProductView from './pages/ProductView/ProductView';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav path="/nav:sub_categories" />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/cart" element={<ProductCart />} />
        <Route path="/list" element={<ProductList />} />
        <Route path="/view" element={<ProductView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
