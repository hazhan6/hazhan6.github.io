import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Works from "../views/Works";
import Contact from "../views/Contact";
import NavBar from "../navbar";
import Footer from "../views/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
