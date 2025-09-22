import { motion } from "framer-motion";
motion;

const Button = ({
  label,
  onClick,
  variant = "primary", // primary | secondary | outline
  size = "md", // sm | md | lg
  className = "",
}) => {
  // styles for different button types
  const baseStyles =
    "rounded-full font-semibold transition duration-300 focus:outline-none";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-500",
    secondary:
      "bg-black text-yellow-400 border border-yellow-400 hover:bg-yellow-400 hover:text-black",
    outline:
      "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {label}
    </motion.button>
  );
};

export default Button;
