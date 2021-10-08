import React, { useState, createContext } from "react";

export const LoginContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [afterLogin, setAfterLogin] = useState("");

  return (
    <LoginContext.Provider value={{ afterLogin, setAfterLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default ContextProvider;
