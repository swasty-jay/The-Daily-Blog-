import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  function ToggleBtn() {
    return (
      <div className="flex items-center">
        <button className="text-xl mr-4 ">☰</button>
        <button className="text-2xl" onClick={toggleTheme}>
          {isDarkMode ? "🌞" : "🌙"}
        </button>
      </div>
    );
  }

  function NavTest() {
    return (
      <div className="text-center flex-1">
        <h1 className="text-3xl font-bold">Daily Blog</h1>
        <p className="text-sm my-2">All voices matter!</p>
      </div>
    );
  }

  function Search() {
    return (
      <div className="flex items-center">
        <button className="bg-white text-black py-2 px-6 rounded-md mx-2">
          Sign In
        </button>
        <button className="bg-white text-black py-2 px-6 rounded-md mx-2">
          Subscribe Now
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="bg-black">
        <nav
          className={`flex justify-between items-center p-6 ${
            isDarkMode ? "bg-gray-800" : "bg-black"
          } text-white`}
        >
          <ToggleBtn />
          <NavTest />
          <Search />
        </nav>

        {/* SUB NAVIGATION BAR */}
        <div className="border-t-2 border-gray-600 ">
          <div className="flex justify-center space-x-12 py-4 text-sm uppercase text-white font-semibold">
            <NavLink className="hover:text-gray-400" to="/">
              Home
            </NavLink>
            <NavLink className="hover:text-gray-400" to="/Culture">
              Culture
            </NavLink>
            <NavLink className="hover:text-gray-400" to="/Travel">
              Travel
            </NavLink>
            <NavLink className="hover:text-gray-400" to="/Technology">
              Technology
            </NavLink>
            <NavLink className="hover:text-gray-400" to="/Football">
              Football
            </NavLink>
            <NavLink className="hover:text-gray-400" to="/science">
              science
            </NavLink>
            <NavLink className="hover:text-gray-400" to="/Politics">
              Politics
            </NavLink>
            <NavLink className="hover:text-gray-400" to="/economy">
              Economy
            </NavLink>
            <NavLink className="hover:text-gray-400" to="/About">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
