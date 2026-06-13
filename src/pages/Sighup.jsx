// src/pages/SignUp.jsx
import React, { useState } from "react";
import { useAuth } from "../componects/context/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";

const SignUp = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = signUp(name, email, password);
    if (success) {
      const dest = location.state?.from || "/";
      navigate(dest);
    } else {
      setError("Email already exists ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-4">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/10">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Create Account</h2>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-white/90"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-white/90"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-white/90"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/80">
          Already have an account? {" "}
          <Link to="/login" className="text-yellow-400 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
