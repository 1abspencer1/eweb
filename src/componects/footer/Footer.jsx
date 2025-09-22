import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* Newsletter */}
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-black py-20 text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
          <div className="flex w-full md:w-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-l-lg w-full md:w-80 outline-none border-none"
            />
            <button className="bg-black text-yellow-500 px-6 rounded-r-lg font-bold hover:bg-gray-900 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">AURUM</h3>
          <p className="text-gray-400 leading-relaxed">
            Crafting timeless luxury pieces that reflect elegance, trust, and
            unmatched quality. Our brand is more than accessories — it’s a
            lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-yellow-500 transition">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">
            Customer Care
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-400">📍 123 Fifth Avenue, New York, NY</p>
          <p className="text-gray-400 mt-2">📞 +1 (555) 123-4567</p>
          <p className="text-gray-400 mt-2">✉️ support@aurum.com</p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} AURUM. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
