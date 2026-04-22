import React from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Products />
      <Cart />
    </CartProvider>
  );
}

export default App;