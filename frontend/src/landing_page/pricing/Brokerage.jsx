import React from "react";

function Brokerage() {
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <h1 className=" md:text-4xl font-semibold text-gray-700 mb-6 mt-12">
          Brokgage Calculator
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Calculate Your Brokrage Charages{" "}
        </p>

        {/* CTA Button */}
        <button className="px-8 py-2 text-white text-base md:text-lg rounded transition mt-6 w-[200px] bg-[#387ed1] hover:bg-black">
          <a href="/">Calculate</a>
        </button>
      </div>
    </div>
  );
}

export default Brokerage;
