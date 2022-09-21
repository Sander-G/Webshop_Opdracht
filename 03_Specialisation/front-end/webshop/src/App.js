
import GlobalStyle from "./styles/GlobalStyle";

import { Outlet } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react"
import { ToastContainer } from "react-toastify";
import  Login  from "./components/Login/Login.jsx"
import  Register  from "./components/Register/Register.jsx"
 
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose="2500"
        hideProgressBar="true"
      />
      <Navbar />
      <Outlet />
      {isLoggedIn && <h1>Logged in!</h1>}
      <Footer />
      <Login setLoggedIn={setLoggedIn}/>
      <Register setLoggedIn={setLoggedIn}/>
     
    </>
  );
}

export default App;
