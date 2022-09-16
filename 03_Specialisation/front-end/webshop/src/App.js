//Styling
import GlobalStyle from './styles/GlobalStyle';
//Router
import {Outlet } from "react-router-dom"
// Pages
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"
// Tostify
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
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
      <Footer />
    </>
  );
};

export default App;

