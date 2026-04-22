import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaCartPlus } from "react-icons/fa";

function Products() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition"
        >
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600">₹{item.price}</p>

          <button
            onClick={() => addToCart(item)}
            className="mt-3 flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            <FaCartPlus />
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;