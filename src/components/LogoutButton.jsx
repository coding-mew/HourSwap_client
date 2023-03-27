import React from "react";
import axios from "axios";
import { useStore } from "../context/store";

const LogoutButton = () => {
  const { setUser } = useStore();

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
        // clear the local storage
        localStorage.clear();

        setUser({});
        
        alert("You have been logged out successfully.");
      } else {
        alert("An error occurred while logging out. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while logging out. Please try again.");
    }
    // Reload the current page
    window.location.reload();
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
