import { motion } from "framer-motion";
motion;
import { Link } from "react-router-dom";
import { products } from "./data"; // ✅ Use the same data as ProductPage
import Button from "../Btn/Button";

const formatPrice = (n) =>
  new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(n);

const NewArrivals = () => {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12 drop-shadow-lg text-center">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group flex flex-col"
            >
              <Link
                to={`/product/${product.id}`}
                className="relative block overflow-hidden rounded-lg bg-neutral-900 aspect-[4/5]"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.15em] text-neutral-200 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {product.category}
                </span>
              </Link>

              <div className="mt-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-[15px] font-medium text-neutral-100 truncate">
                    {product.title}
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
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
