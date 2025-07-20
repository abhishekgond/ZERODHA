import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { MdBarChart, MdDelete } from "react-icons/md";
import {
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaEllipsisH,
} from "react-icons/fa";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnutChart";

// Precompute label set for Doughnut
const labels = watchlist.map((subArray) => subArray.name);

const WatchList_ = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: INFY, BSE, NIFTY"
          className="w-full sm:max-w-md p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-sm text-gray-500">{watchlist.length} / 50</span>
      </div>

      <ul className="space-y-4">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <div className="max-w-sm mx-auto">
        <DoughnutChart data={data} />
      </div>
    </div>
  );
};

export default WatchList_;

// ========== WatchListItem ==========
const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 p-4 group relative"
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
      onFocus={() => setShowWatchlistActions(true)}
      onBlur={() => setShowWatchlistActions(false)}
      tabIndex={0}
    >
      <div className="flex flex-row justify-between items-center flex-wrap">
        <p
          className={`font-semibold text-lg ${
            stock.isDown ? "text-red-600" : "text-green-600"
          }`}
        >
          {stock.name}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">
            {stock.percent}
          </span>
          {stock.isDown ? (
            <FaChevronCircleDown className="text-red-500" />
          ) : (
            <FaChevronCircleUp className="text-green-500" />
          )}
          <span className="text-sm font-medium">₹{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

// ========== WatchListActions ==========
const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const [tooltip, setTooltip] = useState("");

  const buttonConfig = [
    {
      label: "Buy",
      icon: null,
      color: "bg-green-500 hover:bg-green-600",
      onClick: () => generalContext.openBuyWindow(uid),
      tooltip: "Buy (B)",
      ariaLabel: "Buy",
    },
    {
      label: "Sell",
      icon: null,
      color: "bg-red-500 hover:bg-red-600",
      onClick: () => {}, // replace with Sell functionality
      tooltip: "Sell (S)",
      ariaLabel: "Sell",
    },
    {
      label: "",
      icon: <MdBarChart />,
      color: "bg-blue-500 hover:bg-blue-600",
      onClick: () => {}, // Analytics logic
      tooltip: "Analytics (A)",
      ariaLabel: "Analytics",
    },
    {
      label: "",
      icon: <MdDelete />,
      color: "bg-gray-600 hover:bg-gray-700",
      onClick: () => {}, // Delete logic
      tooltip: "Delete",
      ariaLabel: "Delete",
    },
    // Optional: Keep More button if you want overflow actions.
    {
      label: "",
      icon: <FaEllipsisH />,
      color: "bg-gray-500 hover:bg-gray-600",
      onClick: () => {}, // More menu
      tooltip: "More",
      ariaLabel: "More",
    },
  ];

  return (
    <div className="flex gap-2 mt-3 flex-wrap ">
      {buttonConfig.map((btn, idx) => (
        <div
          key={btn.tooltip}
          className="relative flex items-center"
          onMouseEnter={() => setTooltip(btn.tooltip)}
          onMouseLeave={() => setTooltip("")}
          onFocus={() => setTooltip(btn.tooltip)}
          onBlur={() => setTooltip("")}
        >
          <button
            className={`${btn.color} text-white px-3 py-1 rounded text-sm flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition cursor-pointer`}
            onClick={btn.onClick}
            aria-label={btn.ariaLabel}
            type="button"
            tabIndex={0}
          >
            {btn.icon ? btn.icon : btn.label}
          </button>
          {tooltip === btn.tooltip && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 z-20 pointer-events-none opacity-90 shadow-lg ">
              {btn.tooltip}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
