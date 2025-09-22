import { motion } from "framer-motion";
motion
const categories = [
  { name: "Luxury Watches", image: "/ls.avif" },
  { name: "Gold Chains", image: "/lc.avif" },
  { name: "Diamond Rings", image: "/lr.avif" },
  { name: "Premium Sunglasses", image: "/pg.avif" },
];

export default function Categories() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-12">
          Shop by Category
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer"
        Premium Sunglasses    >
              {/* Background image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition duration-500 flex items-end justify-center">
                <h3 className="text-xl font-medium tracking-wide pb-6">
                  {cat.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
