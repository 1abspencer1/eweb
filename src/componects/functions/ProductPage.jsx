import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "./data";
import { useCart } from "../context/CartContext";

const formatNGN = (n) =>
  new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(Number(n || 0));

const getProductImage = (product) =>
  product?.img || product?.image || product?.thumbnail || product?.photo;

const getProductName = (product) =>
  product?.name || product?.title || "Untitled Product";

const ProductCard = ({ product, index }) => {
  const image = getProductImage(product);
  const name = getProductName(product);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-sm border border-neutral-800 bg-neutral-900/70 transition-all duration-300 hover:border-amber-300/40 hover:bg-neutral-900"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-950">
          {image && (
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/55 via-transparent to-transparent opacity-80" />

          {product.category && (
            <span className="absolute left-3 top-3 border border-neutral-700 bg-neutral-950/75 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-200 backdrop-blur">
              {product.category}
            </span>
          )}
        </div>
      </Link>

      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="line-clamp-1 text-[15px] font-medium tracking-wide text-neutral-100">
            {name}
          </h3>

          <p className="text-sm font-semibold text-amber-300">
            NGN {formatNGN(product.price)}
          </p>
        </div>

        <Link to={`/product/${product.id}`} className="block">
          <button className="w-full border border-neutral-700 px-4 py-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-300 transition-colors duration-300 hover:border-amber-300/50 hover:text-amber-300">
            View
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    const sameCategory = products.filter(
      (p) => p.id !== product.id && p.category === product.category
    );

    const others = products.filter(
      (p) => p.id !== product.id && p.category !== product.category
    );

    return [...sameCategory, ...others].slice(0, 8);
  }, [product]);

  if (!product) {
    return (
      <section className="min-h-screen bg-neutral-950 px-5 py-24 text-neutral-100 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-amber-300">
            Not Found
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-neutral-100 sm:text-5xl">
            Product not found
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-400">
            The product you are looking for is no longer available or may have
            been moved.
          </p>

          <Link to="/shop">
            <button className="mt-8 border border-neutral-700 px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-neutral-200 transition-colors duration-300 hover:border-amber-300/50 hover:text-amber-300">
              Back to shop
            </button>
          </Link>
        </div>
      </section>
    );
  }

  const image = getProductImage(product);
  const name = getProductName(product);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1400);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-neutral-950 px-5 py-14 text-neutral-100 sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.22em] text-neutral-500">
          <Link to="/" className="transition-colors hover:text-amber-300">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="transition-colors hover:text-amber-300">
            Shop
          </Link>
          <span>/</span>
          <span className="text-neutral-300">{name}</span>
        </nav>

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-sm border border-neutral-800 bg-neutral-900/70"
          >
            <div className="relative h-[280px] overflow-hidden bg-neutral-950 sm:h-[340px] md:h-[390px] lg:h-[430px]">
              {image && (
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/35 via-transparent to-transparent" />

              {product.category && (
                <span className="absolute left-4 top-4 border border-neutral-700 bg-neutral-950/75 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-200 backdrop-blur">
                  {product.category}
                </span>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:pt-4"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-amber-300">
              The Collection
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl">
              {name}
            </h1>

            <div className="mt-6 h-px w-20 bg-amber-300" />

            <p className="mt-7 text-2xl font-semibold text-amber-300">
              NGN {formatNGN(product.price)}
            </p>

            {product.description && (
              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-neutral-400">
                {product.description}
              </p>
            )}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleAddToCart}
                className="relative min-h-[52px] border border-amber-300 bg-amber-300 px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-950 transition-all duration-300 hover:bg-transparent hover:text-amber-300"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={added ? "added" : "add"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="block"
                  >
                    {added ? "Added ✓" : "Add to Cart"}
                  </motion.span>
                </AnimatePresence>
              </button>

              <Link to="/shop">
                <button className="min-h-[52px] w-full border border-neutral-700 px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-neutral-300 transition-colors duration-300 hover:border-amber-300/50 hover:text-amber-300 sm:w-auto">
                  Continue Shopping
                </button>
              </Link>
            </div>

            <div className="mt-10 grid gap-3 border-t border-neutral-800 pt-6 text-sm text-neutral-400 sm:grid-cols-3">
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.22em] text-neutral-500">
                  Delivery
                </p>
                <p className="text-neutral-300">Fast dispatch</p>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.22em] text-neutral-500">
                  Quality
                </p>
                <p className="text-neutral-300">Premium finish</p>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.22em] text-neutral-500">
                  Support
                </p>
                <p className="text-neutral-300">Easy assistance</p>
              </div>
            </div>
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-neutral-800 pt-12">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-amber-300">
                  More to Explore
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
                  You may also like
                </h2>
              </div>

              <Link
                to="/shop"
                className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400 transition-colors hover:text-amber-300"
              >
                View all products
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {relatedProducts.map((item, index) => (
                <ProductCard key={item.id} product={item} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default ProductPage;
