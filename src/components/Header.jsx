/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-blue-500 shadow fixed py-0">
    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:flex md:px-8 py-0">
      <div className="flex items-center justify-between py-0 md:block">
        <Link to="/" className="text-base font-bold text-white py-0">
          <h2 className=" text-base font-bold text-white py-0">Inventory Telti</h2>
        </Link>
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
              <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-x-6 md:space-y-0 md:pt-0 text-center h-full">
          <li>
            <Link to="/" className="text-white hover:text-indigo-200 text-2xl md:text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/list" className="text-white hover:text-indigo-200 text-2xl md:text-xl">
              List
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-indigo-200 text-2xl md:text-xl">
              About
            </Link>
          </li>
          <div className="mt-3 space-y-2 md:hidden inline-block">
          <Link
          to="/dashboard"
          className="inline-block w-full px-4 py-2 text-center text-white bg-green-500 rounded-md shadow hover:bg-yellow-500 hover:text-white"
        >
          Dashboard
        </Link>
        <Link
          to="/request"
          className="inline-block w-full px-4 py-2 text-center text-white bg-red-500 rounded-md shadow hover:bg-yellow-500 hover:text-white"
        >
          Request
        </Link>
          </div>
        </ul>
      </div>
      <div className="hidden md:flex md:flex-row md:items-center space-x-2">
        <Link
          to="/dashboard"
          className="px-4 py-2 text-white bg-green-500 rounded-md shadow hover:bg-yellow-500 hover:text-white"
        >
          Dashboard
        </Link>
        <Link 
          to="/request"
          className="px-4 py-2 text-white bg-red-500 rounded-md shadow hover:bg-yellow-500 hover:text-white"
        >
          Request
        </Link>
      </div>
    </div>
  </nav>
  

  );
};

export default Header;
