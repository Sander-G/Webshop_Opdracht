import React from "react";
import { Routes, Route } from "react-router-dom"
import GlobalStyle from './elements/GlobalStyle';

import{ Navbar } from "./components/Navbar/Navbar"
import { ProdCats } from "./components/ProdCats/ProdCats"
import { Footer } from "./components/Footer/Footer"


import { Home } from "./pages/Home"
import { NewArrivals } from "./pages/NewArrivals"
import { Vintage } from "./pages/Vintage"
import { Reissue } from "./pages/Reissue"






function App() {
  return (
    <>
    <GlobalStyle />
      <Navbar />
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/NewArrivals" element={<NewArrivals />} />
          <Route path= "/ProdCats" element={<ProdCats />} />
          <Route path= "/Vintage" element={<Vintage />} />
          <Route path= "/Reissue" element={<Reissue />} />
   
        </Routes>
        <Footer />
   
    </>
  );
};

export default App;

