import { createContext, useState, useContext, useEffect } from "react";
import { getUserByUsername } from "../utils/api";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  const login = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const userData = await getUserByUsername(username);
      setCurrentUser(userData);
      setLoading(false);
      return true;
    } catch {
      setError("Invalid username. Please try again.");
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <authContext.Provider
      value={{ currentUser, loading, error, login, logout }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
