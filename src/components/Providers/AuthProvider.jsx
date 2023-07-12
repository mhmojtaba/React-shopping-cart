import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(null);

  // 1. get item from localStorage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("Authentication")) || null;
    setState(userData);
  }, []);

  // 2. set the value of state in localStorage
  useEffect(() => {
    const data = JSON.stringify(state);
    localStorage.setItem("Authentication", data);
  }, [state]);

  return (
    <AuthContext.Provider value={state}>
      <AuthContextDispatcher.Provider value={setState}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
