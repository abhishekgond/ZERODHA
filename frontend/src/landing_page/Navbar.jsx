import React from "react";
import { IoReorderThreeSharp } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="w-full fixed bg-white shadow-sm border">
      <div className="max-w-7xl h-[68px] mx-auto flex items-center justify-between px-7 py-6">
        {/* Left - Logo */}
        <div className="flex items-center px-16">
          <img
            src="/images/logo.svg"
            alt="Zerodha Logo"
            className="h-4 w-auto"
          />
        </div>

        {/* Center - Navigation Links */}
        <div className="flex gap-4">
          <div className="hidden md:flex  space-x-10 text-gray-500 text-base">
            <a href="#" className="hover:text-blue-600">
              Signup
            </a>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
            <a href="#" className="hover:text-blue-600">
              Products
            </a>
            <a href="#" className="hover:text-blue-600">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-600">
              Support
            </a>
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
