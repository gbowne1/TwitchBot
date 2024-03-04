import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:3001/login", inputs, {
        withCredentials: true,
      });
      setCurrentUser(res.data);
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:3001/logout");
      setCurrentUser(null);
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
