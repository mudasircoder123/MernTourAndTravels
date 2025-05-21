import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [DropOpen, SetDropOpen] = useState(false);
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <img
                className="h-10"
                src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
                alt="Logo"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a className="text-gray-600 hover:text-blue-500 transition">Home</a>
            <a className="text-blue-600 font-semibold transition">destinies</a>

            <div class="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-default"
                type="button"
                class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                Actions
                <svg
                  class="hs-dropdown-open:rotate-180 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
 <div className="relative inline-block text-left">
      <button
        id="dropdown-toggle"
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => SetDropOpen(!DropOpen)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Toggle Dropdown
      </button>

      <div
        className={`transition-opacity duration-300 absolute mt-2 min-w-60 bg-white shadow-md rounded-lg ${
          isOpen ? "opacity-100 block" : "opacity-0 hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-toggle"
      >
        <div className="p-1 space-y-0.5">
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            href="#"
          >
            Cars
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            href="#"
          >
            Bikes
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            href="#"
          >
            Camping items
          </a>
        </div>
      </div>
    </div>
              
            <a className="text-gray-600 hover:text-blue-500 transition">
              Pricing
            </a>
            <a className="text-gray-600 hover:text-blue-500 transition">Blog</a>
            <a className="text-gray-600 hover:text-blue-500 transition">
              About Us
            </a>
            <a className="text-blue-600 font-semibold flex items-center transition">
              <svg
                className="h-5 w-5 mr-1 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10,17V14H3V10H10V7L15,12L10,17Z" />
              </svg>
              Login
            </a>
          </div>

          {/* Hamburger / Close Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                // X icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a className="block py-2 text-gray-600 hover:text-blue-500">Home</a>
          <a className="block py-2 text-blue-600 font-semibold">Themes</a>
          <a className="block py-2 text-gray-600 hover:text-blue-500">
            Developers
          </a>
          <a className="block py-2 text-gray-600 hover:text-blue-500">
            Pricing
          </a>
          <a className="block py-2 text-gray-600 hover:text-blue-500">Blog</a>
          <a className="block py-2 text-gray-600 hover:text-blue-500">
            About Us
          </a>
          <a className="block py-2 text-blue-600 font-semibold flex items-center">
            <svg
              className="h-5 w-5 mr-1 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10,17V14H3V10H10V7L15,12L10,17Z" />
            </svg>
            Login
          </a>
        </div>
      )}
    </nav>
  
  );
};

export default Navbar;
