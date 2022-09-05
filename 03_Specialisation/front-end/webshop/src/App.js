//Styling
import GlobalStyle from './styles/GlobalStyle';
//Router
import {Outlet } from "react-router-dom"
// Pages
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"

function App() {
  return (
    <>
    <GlobalStyle />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

