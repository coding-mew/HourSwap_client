import axios from "axios";
import React, { useContext, useState } from "react";

const StoreContext = React.createContext();

export function useStore() {
  return useContext(StoreContext);
}

export function StoreProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user") || {});
  const [showNavbar, setShowNavbar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const validateUser = async () => {
    try {
      const BE_URL = import.meta.env.VITE_BE_PORT;
      const result = await axios.post(
        `http://localhost:${BE_URL}/user/validate`,
        null,
        {
          withCredentials: true,
        }
      );

      console.log("i am result log from store", result);
    } catch (error) {
      console.log("i am error from store", error);
    }
  };
  return (
    <StoreContext.Provider
      value={{ user, setUser, validateUser, showNavbar, isLoggedIn, setIsLoggedIn,setShowNavbar }}
    >
      {children}
    </StoreContext.Provider>
  );
}
