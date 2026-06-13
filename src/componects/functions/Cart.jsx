import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 px-4 md:px-16">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-black/50 rounded-lg shadow-lg"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.qty - 1)}
                    disabled={item.qty === 1}
                    className="px-2 py-1 bg-gray-700 rounded"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.qty + 1)}
                    className="px-2 py-1 bg-gray-700 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-yellow-400 font-bold">
                  ${item.price * item.qty}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-black/50 p-6 rounded-lg shadow-lg">
          <p className="text-2xl font-semibold">Total: ${total}</p>
          <button
            onClick={() => navigate('/checkout')}
            className="mt-4 md:mt-0 px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
