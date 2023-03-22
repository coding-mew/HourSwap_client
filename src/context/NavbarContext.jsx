import React, { useContext, useState } from "react";
// import {NavbarContext} from './NavbarContext'

// nur dynamic variables in context
// initialisert context object
const NavbarContext = React.createContext();

// renaming
export function useNavbarContext() {
  return useContext(NavbarContext);
}

export function NavbarProvider({ children }) {

  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <NavbarContext.Provider
      value={{
        showNavbar,
        setShowNavbar,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}
