import React from "react";
import { NavLink } from "react-router-dom";
import { useStore } from "../../context/store";
import LogoutButton from "../LogoutButton";
function Navigation() {
  const { showNavbar } = useStore();
  const { isLoggedIn } = useStore();

  const items = [
    {
      name: "Dashboard",
      to: "/",
      id: 0,
      isProtected: !isLoggedIn,
    },
    {
      name: "SignIn",
      to: "/signin",
      id: 1,
      isProtected: isLoggedIn,
    },
    {
      name: "SignUp",
      to: "/signup",
      id: 2,
      isProtected: isLoggedIn,
    },
    {
      name: "Create Task",
      to: "/createtask",
      id: 3,
      isProtected: !isLoggedIn,
    },
    {
      name: "Search Catalogue",
      to: "/searchcatalogue",
      id: 4,
      isProtected: !isLoggedIn,
    },
    {
      name: "Buy Token",
      to: "/buytoken",
      id: 5,
      isProtected: !isLoggedIn,
    },{
      name: "Send Token",
      to: "/sendtoken",
      id: 6,
      isProtected: !isLoggedIn,
    }
  ];
  return showNavbar ? (
    <header>
      <nav className="bg-gradient-to-r from-emerald-500 backdrop-blur-lg bg-opacity-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-emerald-800">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <img
              src="src/assets/pictures/hourglass.svg"
              className="h-6 mr-3 sm:h-9"
              alt="HourSwap Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              HourSwap
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <nav className="nav_container">
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gradient-to-r from-indigo-600 md:dark:bg-gray-900 dark:border-gray-700">
                {items.map((item) => {
                  if (item.isProtected === false) {
                    return (
                      <li key={item.id}>
                        {" "}
                        <NavLink
                          to={item.to}
                          className="block py-2 pl-3 pr-4 text-green-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    );
                  }
                })}
                
               {isLoggedIn && <LogoutButton />}
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  ) : null;
}

export default Navigation;
