import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold">My Store</h1>

      <div className="flex items-center gap-2 bg-white text-blue-600 px-3 py-1 rounded-full">
        <FaShoppingCart />
        <span>{cart.length}</span>
      </div>
    </div>
  );
}

export default Navbar;