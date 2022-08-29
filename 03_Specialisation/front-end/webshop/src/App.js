import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"

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
    </>
  );
};

export default App;
