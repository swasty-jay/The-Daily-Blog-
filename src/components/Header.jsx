import React, { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <nav
        className={`flex justify-between items-center p-6 ${
          isDarkMode ? "bg-gray-800" : "bg-black"
        } text-white`}
      >
        <div className="flex items-center">
          <button className="text-xl mr-4 md:hidden">☰</button>
          <button className="text-2xl" onClick={toggleTheme}>
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>

        <div className="text-center flex-1">
          <h1 className="text-3xl font-bold">Daily Blog</h1>
          <p className="text-sm mt-1">All voices matter!</p>
        </div>

        <div className="flex items-center">
          <button className="bg-white text-black py-2 px-6 rounded-md mx-2">
            Sign In
          </button>
          <button className="bg-white text-black py-2 px-6 rounded-md mx-2">
            Subscribe Now
          </button>
        </div>
      </nav>
      <div className="border-t-2">
        <h3>Best guy</h3>
      </div>
    </>
  );
};

export default Header;
