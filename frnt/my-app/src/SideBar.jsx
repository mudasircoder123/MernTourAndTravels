import React, { useState } from "react";
import TourList from "./Tours";
import Cars from "./Cars";
import Bikes from './Bikes';
import { Link } from "react-router";
import { useNavigate } from "react-router";
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const Logout = () => {
 localStorage.removeItem("accessToken");
 localStorage.removeItem("refreshToken");
 navigate("/login");
}
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img
                className="h-10"
                src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
                alt="Logo"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/home"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Home
            </Link>
            <Link
              to="/tours"
              className="text-blue-600 font-semibold transition"
            >
              Destinies
            </Link>

            {/* Actions Dropdown */}
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => setDropOpen(!dropOpen)}
                className="inline-flex items-center gap-x-2 px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-haspopup="true"
                aria-expanded={dropOpen}
              >
                Actions
                <svg
                  className={`w-4 h-4 transition-transform ${
                    dropOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                  <div className="py-1">
                    <Link
                      to="/cars"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Cars
                    </Link>
                    <Link
                      to="/bikes"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Bikes
                    </Link>
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      Camping Items
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-blue-600 font-semibold flex items-center transition hover:text-blue-700"
            >
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

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-500 transition"
            >
              Home
            </a>
            <a href="#" className="block py-2 text-blue-600 font-semibold">
              Destinies
            </a>

            {/* Mobile Actions Section */}
            <div className="py-2">
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className="flex items-center justify-between w-full text-left text-gray-600 hover:text-blue-500 transition"
              >
                Actions
                <svg
                  className={`w-4 h-4 transition-transform ${
                    dropOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  <a
                    href="#"
                    className="block py-1 text-sm text-gray-500 hover:text-blue-500"
                  >
                    Cars
                  </a>
                  <a
                    href="#"
                    className="block py-1 text-sm text-gray-500 hover:text-blue-500"
                  >
                    Bikes
                  </a>
                  <a
                    href="#"
                    className="block py-1 text-sm text-gray-500 hover:text-blue-500"
                  >
                    Camping Items
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-500 transition"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-500 transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-500 transition"
            >
              About Us
            </a>
            <a
              onClick={Logout}
              
              className="block py-2 text-blue-600 font-semibold flex items-center transition hover:text-blue-700"
            >
              <svg
                className="h-5 w-5 mr-1 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10,17V14H3V10H10V7L15,12L10,17Z" />
              </svg>
              Logout
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
