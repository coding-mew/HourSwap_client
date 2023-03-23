import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/store";


const LogoutButton = () => {
  const {setUser} = useStore();
  const navigate = useNavigate();
  const handleLogout = async () => {
    const BE_URL = import.meta.env.VITE_BE_PORT;
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    try {
      const response = await axios.post(
        `${BE_URL}/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        console.log("🚀 ~ file: Logout.jsx:26 ~ handleLogout ~ response:", response)
        // clear the local storage
        localStorage.clear();

        setUser({})
        
        navigate("/signin");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
