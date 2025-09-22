import { motion } from "framer-motion";
motion;
import { Link } from "react-router-dom";
import { products } from "./data"; // ✅ Use the same data as ProductPage

const NewArrivals = () => {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12 drop-shadow-lg">
          New Arrivals
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {products.slice(0, 4).map(
            (
              product,
              index // 👈 only first 4
            ) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-yellow-400">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-gray-200">${product.price}</p>

                  <Link to={`/product/${product.id}`}>
                    <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
