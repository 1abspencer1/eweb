// src/pages/Shop.jsx
import React, { useState } from "react";
import { products } from "../componects/functions/data";
import { motion } from "framer-motion";
motion;
import { Link } from "react-router-dom";
import Button from "../componects/Btn/Button";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Unique categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Filter by category
  let filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Sort by price
  if (sortOrder === "low-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <section className="py-20 bg-gray-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Shop All Products
        </h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          {/* Category filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-6 py-3 rounded-full bg-gray-800 text-yellow-400 font-semibold border border-yellow-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Price filter */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-6 py-3 rounded-full bg-gray-800 text-yellow-400 font-semibold border border-yellow-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="default">Sort by Price</option>
            <option value="low-high">Lowest to Highest</option>
            <option value="high-low">Highest to Lowest</option>
          </select>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-yellow-400">
                  {product.title}
                </h3>
                <p className="text-gray-300 mb-3">₦{product.price}</p>
                <Link to={`/product/${product.id}`}>
                  <Button label="View " variant="primary" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
