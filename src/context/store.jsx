import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const StoreContext = React.createContext();

export function useStore() {
  return useContext(StoreContext);
}

export function StoreProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user") || {});
  console.log(user)
  const [showNavbar, setShowNavbar] = useState(true);

  const validateUser = async () => {
    try {
      const BE_URL = import.meta.env.VITE_BE_PORT;
      console.log("🚀 ~ file: Store.jsx:23 ~ validateUser ~ BE_URL:", BE_URL);

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
      value={{ user, setUser, validateUser, showNavbar, setShowNavbar }}
    >
      {children}
    </StoreContext.Provider>
  );
}
