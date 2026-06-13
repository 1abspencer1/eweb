// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Simple client-side auth provider prepared for a backend later.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const signIn = (email, password) => {
    // Placeholder: validate locally against stored "users" or accept any non-empty.
    if (!email || !password) return false;

    const usersRaw = localStorage.getItem("users");
    const users = usersRaw ? JSON.parse(usersRaw) : [];

    const existing = users.find((u) => u.email === email);

    if (existing) {
      // In a real app we'd verify password via backend.
      const logged = { id: existing.id, name: existing.name, email };
      setUser(logged);
      return true;
    }

    // If user not registered locally, allow sign-in for dev convenience
    const fallback = { id: Date.now(), name: email.split("@")[0], email };
    setUser(fallback);
    return true;
  };

  const signUp = (name, email, password) => {
    if (!name || !email || !password) return false;

    const usersRaw = localStorage.getItem("users");
    const users = usersRaw ? JSON.parse(usersRaw) : [];

    if (users.find((u) => u.email === email)) return false;

    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setUser({ id: newUser.id, name, email });
    return true;
  };

  const signOut = () => {
    setUser(null);
  };

  // compatibility alias (some components call `logout`)
  const logout = signOut;

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signUp, signOut, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
