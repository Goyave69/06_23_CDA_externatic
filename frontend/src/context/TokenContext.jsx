import React, { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const TokenContext = createContext(null);

export function useToken() {
  return useContext(TokenContext);
}

export default function TokenProvider({ children }) {
  const storedToken = localStorage.getItem("token");
  const initialToken = storedToken ? JSON.parse(storedToken) : "";

  const [token, setToken] = useState(initialToken);

  const updateTokenInLocalStorage = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", JSON.stringify(newToken));
  };
  const contextValue = useMemo(
    () => ({
      token,
      setToken: updateTokenInLocalStorage,
    }),
    [token]
  );

  return (
    <TokenContext.Provider value={contextValue}>
      {children}
    </TokenContext.Provider>
  );
}

TokenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
