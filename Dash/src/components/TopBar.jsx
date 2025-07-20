import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="w-full bg-white px-6 py-2 flex justify-between items-center">
      {/* Indices Container */}
      <div className="flex space-x-8 text-sm">
        {/* NIFTY (BSE) */}
        <div className="flex space-x-4 mt-4">
          <p className="text-gray-500 font-semibold">NIFTY 50</p>
          <p className="text-red-500 font-medium">{100.2}</p>
          <p className="text-xs text-gray-400">-0.25%</p>
        </div>

        {/* SENSEX (NSE) */}
        <div className="flex space-x-4 mt-4">
          <p className="text-gray-500 font-semibold">SENSEX</p>
          <p className="text-red-500 font-medium">{100.2}</p>
          <p className="text-xs text-gray-400">-0.15%</p>
        </div>
      </div>

      {/* Menu Component */}
      <Menu />
    </div>
  );
};

export default TopBar;
