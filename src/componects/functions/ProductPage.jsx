import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
motion;
import { products } from "./data";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-20 text-2xl text-white">
        Product not found
      </div>
    );
  }

  const restProducts = products.filter((p) => p.id !== product.id);

  return (
    <motion.section
      className="relative min-h-screen px-4 py-16 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* ✅ Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Product Detail */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Product Image */}
          <motion.img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2 object-cover rounded-lg shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Product Info */}
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl font-bold text-yellow-400">
              {product.title}
            </h1>
            <p className="mt-2 text-xl font-semibold text-white">
              ${product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
            >
              Add to Cart
            </button>
          </motion.div>
        </div>

        {/* More Products */}
        {restProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              More Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {restProducts.map((p) => (
                <motion.div
                  key={p.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="rounded-lg mb-2 w-full h-48 object-cover"
                  />
                  <h3 className="text-xl text-white font-semibold">
                    {p.title}
                  </h3>
                  <p className="text-yellow-400 font-bold">${p.price}</p>
                  <Link to={`/product/${p.id}`}>
                    <button className="mt-2 px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition duration-300">
                      View
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default ProductPage;
