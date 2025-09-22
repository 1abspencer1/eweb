import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext"; // ✅ import auth
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { user, logout } = useAuth(); // ✅ get auth state

  const Data = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Shop", link: "/shop" },
    { id: 4, title: "Contact", link: "/contact" },
    { id: 5, title: "Blog", link: "/blog" },
  ];

  return (
    <header className="nav-header">
      <div className="logo">AURUM</div>

      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="nav-list">
          {Data.map((item) => (
            <li key={item.id}>
              <NavLink className="nav-link" to={item.link}>
                {item.title}
              </NavLink>
            </li>
          ))}

          {/* Cart */}
          <li className="relative">
            <NavLink to="/cart" className="nav-link">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </li>

          {/* Auth */}
          {user ? (
            <>
              <li>
                <span className="nav-link">Hi, {user.email}</span>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600 transition"
              >
                Sign In
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <X className="w-8 h-8 cursor-pointer text-white" />
        ) : (
          <Menu className="w-8 h-8 cursor-pointer text-white" />
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-nav md:hidden">
          <ul className="mobile-list">
            {Data.map((item) => (
              <li key={item.id}>
                <NavLink
                  className="mobile-link"
                  to={item.link}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}

            {/* Cart */}
            <li className="relative">
              <NavLink
                to="/cart"
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </li>

            {/* Auth */}
            {user ? (
              <>
                <li>
                  <span className="mobile-link">Hi, {user.email}</span>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600 transition block text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
