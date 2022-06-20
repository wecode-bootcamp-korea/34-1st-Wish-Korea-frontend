import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Join from "./components/Join/Join";
import Nav from "./components/Nav/Nav";
import ProductCart from "./components/ProductCart/ProductCart";
import ProductList from "./components/ProductList/ProductList";
import ProductView from "./components/ProductView/ProductView";
import Footer from "./components/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
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
