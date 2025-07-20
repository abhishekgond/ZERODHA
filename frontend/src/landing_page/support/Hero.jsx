import React from "react";
import { IoSearch } from "react-icons/io5";

function Hero() {
  return (
    <div className="pt-32 bg-[#387ed1] text-white min-h-[540px] font-sans">
      <div className="mx-auto max-w-[1107px] px-4 space-y-12">
        {/* Top bar */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-semibold">Support Portal</h1>
          <a
            href="#"
            className="underline text-sm md:text-base hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white rounded-sm"
          >
            Track tickets
          </a>
        </div>

        {/* Main content area */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left: Search and links */}
          <div className="flex-1 space-y-8">
            <h2 className="text-2xl md:text-3xl font-medium leading-snug">
              Search for an answer or browse help topics to create a ticket
            </h2>

            {/* Search input */}
            <div className="relative w-full md:w-[600px]">
              <input
                type="text"
                autoComplete="off"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
                className="w-full h-[55px] py-3 pl-5 pr-12 rounded-md text-black placeholder-gray-500 text-sm shadow-md outline-none"
              />
              <IoSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl" />
            </div>

            {/* Quick Links */}
            <ul className="flex flex-wrap gap-x-10 gap-y-2 underline text-sm mt-4">
              {[
                "Track account opening",
                "Track segment activation",
                "Intraday margins",
                "Kite user manual",
              ].map((text, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-gray-300">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Featured section */}
          <div className="flex-shrink-0 w-full md:w-[420px]">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Featured</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm md:text-lg underline">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Quarterly Settlement of Funds – July 2025
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Exclusion of F&O contracts on 8 securities from August 29,
                  2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
