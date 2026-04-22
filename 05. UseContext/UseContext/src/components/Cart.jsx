import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaShoppingCart className="text-blue-600" />
        Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">No items in cart</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 rounded shadow"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600">₹{item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                <MdDelete />
                Remove
              </button>
            </div>
          ))}

          <h3 className="text-xl font-bold">Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;