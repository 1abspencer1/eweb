import { motion } from "framer-motion";
motion
const collections = [
  {
    id: 1,
    title: "Luxury Watches",
    image: "/lw.avif",
  },
  {
    id: 2,
    title: "Gold Chains",
    image: "/gc.avif",
  },
  {
    id: 3,
    title: "Diamond Rings",
    image: "/dr.avif",
  },
  {
    id: 4,
    title: "Custom Pieces",
    image: "cs.avif",
  },
];

const ExclusiveCollections = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-6xl font-extrabold text-yellow-400 tracking-wide drop-shadow-xl"
      >
        Exclusive Collections
      </motion.h2>

      {/* Collections Grid */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {collections.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl shadow-xl border border-yellow-500/20"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90"></div>

            {/* Title + Button */}
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-yellow-400 drop-shadow-lg">
                {item.title}
              </h3>
              <button className="mt-3 px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition duration-300">
                Discover →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveCollections;
