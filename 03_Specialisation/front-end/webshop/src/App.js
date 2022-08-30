import { Routes, Route } from "react-router-dom"
import{ Navbar } from "./components/Navbar/Navbar"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import  Footer from "./components/Footer/Footer"

import GlobalStyle from './elements/GlobalStyle';
import React from "react";


function App() {
  return (
    <>
    <GlobalStyle />
      <Navbar />
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/Store" element={<Store />} />  
        </Routes>
        <Footer />
    </>
  );
};

export default App;
