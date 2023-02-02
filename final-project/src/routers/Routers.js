import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterComp from "../components/footercomp";
import NavigationComp from "../components/navigationcomp";
import Checkout from "../pages/checkout/Checkout";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import Payment from "../pages/payment/Payment";

const Routers = () => {
  return (
    <BrowserRouter>
      <NavigationComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
};

export default Routers;
