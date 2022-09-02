import React from "react";
import { Routes, Route } from "react-router-dom"
import GlobalStyle from './elements/GlobalStyle';

import{ Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"


import { Home } from "./pages/Home"
import { NewArrivals } from "./pages/NewArrivals"
import { Vintage } from "./pages/Vintage"
import { Reissue } from "./pages/Reissue"
import { Parts } from "./pages/Parts"

import { Favourites } from "./pages/Favourites"
import { ShoppingCart } from "./pages/ShoppingCart"
import { Login } from "./pages/Login"


function App() {
  return (
    <>
    <GlobalStyle />
      <Navbar />
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/NewArrivals" element={<NewArrivals />} />
          <Route path= "/Vintage" element={<Vintage />} />
          <Route path= "/Reissue" element={<Reissue />} />
          <Route path= "/Parts" element={<Parts />} />

          <Route path= "/Favourites" element={<Favourites />} />
           <Route path= "/ShoppingCart" element={<ShoppingCart />} />
           <Route path= "/Login" element={<Login />} />    
        </Routes>
      <Footer />
   
    </>
  );
};

export default App;

