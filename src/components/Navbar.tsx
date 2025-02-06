import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element | null;

      if (isOpen && target && !target.closest(".navbar")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close the menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar flex flex-row justify-between font-semibold text-grayish-violet text-sm mx-6 sm:mx-24">
      <div className="flex flex-row items-center space-x-4 sm:space-x-10">
        <img src={logo} alt="Shortly Logo"/>

        <ul className="hidden md:flex flex-row space-x-8 ml-10">
          <li className="hover:text-very-dark-blue hover:cursor-pointer">Features</li>
          <li className="hover:text-very-dark-blue hover:cursor-pointer">Pricing</li>
          <li className="hover:text-very-dark-blue hover:cursor-pointer">Resources</li>
        </ul>
      </div>

      <div className="hidden md:flex flex-row space-x-8 items-center">
        <button className="hover:text-very-dark-blue hover:cursor-pointer">Login</button>
        <button className="bg-cyan text-white rounded-3xl px-4 py-2 hover:bg-light-cyan">Sign Up</button>
      </div>

      {/* Mobile Navbar */}
      <button
        className="md:hidden flex items-center p-2 rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-md p-4 md:hidden z-50 transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-6">
            <button
              className="self-end text-xl mr-10 text-grayish-violet"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <ul className="flex flex-col space-y-4 items-center">
              <li
                className="hover:text-very-dark-blue hover:cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Features
              </li>
              <li
                className="hover:text-very-dark-blue hover:cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Pricing
              </li>
              <li
                className="hover:text-very-dark-blue hover:cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Resources
              </li>
            </ul>
            <div className="flex flex-col space-y-4 items-center">
              <button
                className="hover:text-very-dark-blue hover:cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Login
              </button>
              <button
                className="bg-cyan text-white rounded-3xl px-4 py-2 hover:bg-light-cyan"
                onClick={handleMenuItemClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;