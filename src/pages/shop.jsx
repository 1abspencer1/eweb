// src/pages/Shop.jsx
import React, { useState, useEffect, useRef, useMemo } from "react";
import { products } from "../componects/functions/data";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../componects/Btn/Button";

/* ---------- Custom Dropdown (accessible, no native <select>) ---------- */
const Dropdown = ({ label, value, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = options.find((o) => o.value === value) ?? options[0];

  return (
    <div ref={ref} className="relative w-full sm:w-56">
      <label className="block text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-2">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg
                   bg-neutral-900 border border-neutral-800 hover:border-neutral-700
                   text-sm text-neutral-100 transition-colors focus:outline-none
                   focus:border-amber-400/60"
      >
        <span className="truncate">{current.label}</span>
        <svg
          className={`w-4 h-4 text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-2 w-full max-h-64 overflow-auto rounded-lg
                       bg-neutral-900 border border-neutral-800 shadow-2xl shadow-black/40 py-1"
          >
            {options.map((opt) => {
              const active = opt.value === value;
              return (
                <li key={opt.value}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between
                                transition-colors ${
                                  active
                                    ? "text-amber-300 bg-white/[0.03]"
                                    : "text-neutral-300 hover:bg-white/[0.04]"
                                }`}
                  >
                    <span className="truncate">{opt.label}</span>
                    {active && (
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4L8.5 12l6.8-6.7a1 1 0 011.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------- Shop Page ---------- */
const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let list =
      selectedCategory === "All"
        ? [...products]
        : products.filter((p) => p.category === selectedCategory);

    if (sortOrder === "low-high") list.sort((a, b) => a.price - b.price);
    else if (sortOrder === "high-low") list.sort((a, b) => b.price - a.price);

    return list;
  }, [selectedCategory, sortOrder]);

  const categoryOptions = categories.map((c) => ({ value: c, label: c }));
  const sortOptions = [
    { value: "default", label: "Featured" },
    { value: "low-high", label: "Price: Low to High" },
    { value: "high-low", label: "Price: High to Low" },
  ];

  const formatPrice = (n) =>
    new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(n);

  return (
    <section className="min-h-screen bg-neutral-950 text-neutral-100 py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-14 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-amber-400/80 mb-4">
            The Collection
          </p>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white">
            Shop All Products
          </h1>
          <p className="mt-4 text-neutral-400 text-base leading-relaxed">
            A curated selection of pieces, refined for everyday wear.
          </p>
          <div className="mt-6 h-px w-16 bg-amber-400/60" />
        </header>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Dropdown
              label="Category"
              value={selectedCategory}
              options={categoryOptions}
              onChange={setSelectedCategory}
            />
            <Dropdown
              label="Sort by"
              value={sortOrder}
              options={sortOptions}
              onChange={setSortOrder}
            />
          </div>
          <p className="text-sm text-neutral-500">
            <span className="text-neutral-200 font-medium">{filteredProducts.length}</span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <div className="border border-dashed border-neutral-800 rounded-xl py-20 text-center">
            <p className="text-neutral-400 mb-4">No products match these filters.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSortOrder("default");
              }}
              className="text-sm text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col"
              >
                {/* Image */}
                <Link
                  to={`/product/${product.id}`}
                  className="relative block overflow-hidden rounded-lg bg-neutral-900 aspect-[4/5]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover
                               transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <span
                    className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.15em]
                               text-neutral-200 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full"
                  >
                    {product.category}
                  </span>
                </Link>

                {/* Info */}
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-medium text-neutral-100 truncate">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      <span className="text-[11px] text-neutral-500 mr-1">NGN</span>
                      {formatPrice(product.price)}
                    </p>
                  </div>
                  <Link to={`/product/${product.id}`} className="shrink-0">
                    <Button label="View" variant="primary" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Shop;
