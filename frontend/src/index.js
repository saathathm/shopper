import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';
import ShopRandomProductsContextProvider from './Context/ShopRandomProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
  <ShopRandomProductsContextProvider>
    <App />
  </ShopRandomProductsContextProvider>
  </ShopContextProvider>
);
