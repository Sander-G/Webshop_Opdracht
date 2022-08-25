import { Routes, Route } from "react-router-dom"
import { Container} from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { Navbar } from "./components/Navbar"
import React from "react";


function App() {
  return (
    <>
    <Container className="mb-4">
      <Navbar />
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/Store" element={<Store />} />  
        </Routes>
    </Container>
    </>
  );
};

export default App;
