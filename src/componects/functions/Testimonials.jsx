import { motion } from "framer-motion";
motion
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophia L.",
      role: "Entrepreneur",
      review:
        "Absolutely stunning craftsmanship. Every piece feels exclusive and premium.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "James K.",
      role: "Investor",
      review: "Luxury redefined. The attention to detail is unmatched.",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      id: 3,
      name: "Isabella R.",
      role: "Designer",
      review: "I feel like I’m wearing art. Exceptional quality and style.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8 drop-shadow-lg">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 border-2 border-yellow-400"
              />
              <p className="mb-4 italic text-gray-200">"{t.review}"</p>
              <h3 className="font-semibold text-yellow-400">{t.name}</h3>
              <p className="text-gray-400 text-sm">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
