import React, { useCallback, useEffect, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
});

const calculateRemainingTime = expirationTimeMs => {
  const currentTime = new Date().getTime();
  return expirationTimeMs - currentTime;
};
const getStoredToken = () => {
  const token = localStorage.getItem("token");
  const expirationTime = +localStorage.getItem("expTime");
  const remainingTime = calculateRemainingTime(expirationTime);
  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");
    return null;
  }
  return { token, remainingTime };
};

export const AuthContextProvider = props => {
  const tokenData = getStoredToken();
  const [token, setToken] = useState(tokenData ? tokenData.token : null);
  const isLoggedIn = !!token;

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const login = (token, expirationTimeMs) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expTime", expirationTimeMs.toString());
    const remainingTime = calculateRemainingTime(expirationTimeMs);
    logoutTimer = setTimeout(logout, remainingTime);
  };
  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logout, tokenData.remainingTime);
    }
  }, [tokenData, logout]);

  const context = { token, isLoggedIn, login, logout };
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
