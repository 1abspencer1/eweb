import React, { useEffect } from "react";
import { useAuth } from "../componects/context/AuthContext";
import { useCart } from "../componects/context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { user } = useAuth();
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { from: "/checkout" } });
    }
  }, [user, navigate]);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!user) return null; // redirecting

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 px-4 md:px-16">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>{item.title} x {item.qty}</span>
            <span>${item.price * item.qty}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <p className="text-2xl font-semibold">Total: ${total}</p>
        <button
          onClick={() => {
            // placeholder for placing order
            clearCart();
            navigate("/", { replace: true });
          }}
          className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
