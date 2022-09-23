
import GlobalStyle from "./styles/GlobalStyle";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal"
 




function App() {

  const modal = useSelector(state => state.display.modal);

  return (
    <>
      <GlobalStyle modal={modal}/>
      {modal && <Modal />}
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
}

export default App;
