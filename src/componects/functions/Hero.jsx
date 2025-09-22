import { motion } from "framer-motion";
import Button from "../Btn/Button";
motion;

const Hero = ({
  bgImage = "/bg.webp",
  title = "Elevate Your Style",
  subtitle = "Discover luxury chains, watches, and timeless accessories crafted to perfection.",
}) => {
  return (
    <section className="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Background with slow zoom animation */}
      <motion.img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-gray-200"
        >
          {subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex gap-6 justify-center"
        >
          <Button label="Shop now " variant="primary" />
          <Button label="Explore" variant="outline" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
