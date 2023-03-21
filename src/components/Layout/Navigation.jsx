import React from "react";
import { NavLink } from "react-router-dom";
import { useGameContext } from "../../global/Context";

function Navigation() {
  const { showNavbar } = useGameContext();

  const items = [
    {
      name: "Dashboard",
      to: "/",
      id: 0,
    },
    {
      name: "SignIn",
      to: "/signIn",
      id: 1,
    },
    {
      name: "SignUp",
      to: "/signUp",
      id: 2,
    },
    // {
    //   name: "Final",
    //   to: "/final_score",
    //   id: 3,
    // },
    // {
    //   name: "Saved",
    //   to: "/saved_questions",
    //   id: 4,
    // },
    {
      name: "Not Found",
      to: "*",
      id: 5,
    },
  ];
  return showNavbar ? (
    <header>
      <nav className="nav_container">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {" "}
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  ) : null;
}

export default Navigation;
