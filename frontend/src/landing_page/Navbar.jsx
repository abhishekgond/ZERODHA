import React from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full fixed bg-white shadow-sm border">
      <div className="max-w-7xl h-[68px] mx-auto flex items-center justify-between px-7 py-6">
        {/* Left - Logo */}
        <div className="flex items-center cursor-pointer px-16">
          <Link to="/">
            <img
              src="/images/logo.svg"
              alt="Zerodha Logo"
              className="h-4 w-auto"
            />
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex gap-4">
          <div className="hidden md:flex  space-x-10 text-gray-500 text-base">
            <Link to="/signup" className="hover:text-blue-600">
              Signup
            </Link>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link to="/product" className="hover:text-blue-600">
              Products
            </Link>
            <Link to="/pricing" className="hover:text-blue-600">
              Pricing
            </Link>
            <Link to="/support" className="hover:text-blue-600">
              Support
            </Link>
          </div>

          {/* Right - Hamburger Icon (Always Visible) */}
          <div className="text-gray-800 text-3xl px-8 cursor-pointer">
            <IoReorderThreeSharp />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
