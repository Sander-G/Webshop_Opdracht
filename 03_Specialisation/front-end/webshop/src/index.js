import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

// Pagina's
import { Home } from "./pages/Home/Home"
import { NewArrivals } from "./pages/ProductPages/NewArrivals"
import { Vintage } from "./pages/ProductPages/Vintage"
import { Reissue } from "./pages/ProductPages/Reissue"
import { Parts } from "./pages/ProductPages/Parts"
import { Favourites } from "./pages/Favourites/Favourites"
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart"
import { Login } from "./pages/Login/Login"
import NotFound from './components/404/NotFound'; 

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path= "/NewArrivals" element={<NewArrivals />} />
          <Route path= "/Vintage" element={<Vintage />} />
          <Route path= "/Reissue" element={<Reissue />} />
          <Route path= "/Parts" element={<Parts />} />
          <Route path= "/Favourites" element={<Favourites />} />
          <Route path= "/ShoppingCart" element={<ShoppingCart />} />
          <Route path= "/Login" element={<Login />} /> 
          <Route path= "/NotFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

 