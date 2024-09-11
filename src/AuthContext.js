// src/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // Initialize user state from localStorage
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const signup = (userData) => {
    // Save the user data in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData); // Log in the user immediately after signup
  };

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the stored user exists and matches the email and password
    if (storedUser && email === storedUser.email && password === storedUser.password) {
      setUser(storedUser);
      return true; // Login successful
    } else {
      return false; // Login failed
    }
  };

  const logout = () => {
    // Clear the user from the session (but keep user data in localStorage)
    setUser(null);
  };

  const value = {
    user,
    signup,
    login,
    logout,
    isAuthenticated: !!user, // Check if user is authenticated
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
