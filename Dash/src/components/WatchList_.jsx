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
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 8;

  // Filter watchlist based on search term
  const filteredList = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredList.length / itemsPerPage);

  const visiblePages = Array.from(
    { length: Math.min(10, totalPages) },
    (_, i) => i + 1
  );

  const data = {
    labels: filteredList.map((stock) => stock.name),
    datasets: [
      {
        label: "Price",
        data: filteredList.map((stock) => stock.price),
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
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: INFY, BSE, NIFTY"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset to first page when searching
          }}
          className="w-full sm:max-w-md p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-sm text-gray-500">
          {filteredList.length} / 50
        </span>
      </div>

      {/* Stock Items */}
      <ul className="space-y-4">
        {currentItems.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded flex items-center justify-center ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            ←
          </button>

          {/* Numbered Buttons */}
          {visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black hover:bg-gray-400"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded flex items-center justify-center ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            →
          </button>
        </div>
      )}

      {/* Doughnut Chart */}
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
      onClick: () => {},
      tooltip: "Sell (S)",
      ariaLabel: "Sell",
    },
    {
      label: "",
      icon: <MdBarChart />,
      color: "bg-blue-500 hover:bg-blue-600",
      onClick: () => {},
      tooltip: "Analytics (A)",
      ariaLabel: "Analytics",
    },
    {
      label: "",
      icon: <MdDelete />,
      color: "bg-gray-600 hover:bg-gray-700",
      onClick: () => {},
      tooltip: "Delete",
      ariaLabel: "Delete",
    },
    {
      label: "",
      icon: <FaEllipsisH />,
      color: "bg-gray-500 hover:bg-gray-600",
      onClick: () => {},
      tooltip: "More",
      ariaLabel: "More",
    },
  ];

  return (
    <div className="flex gap-2 mt-3 flex-wrap">
      {buttonConfig.map((btn) => (
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
          >
            {btn.icon ? btn.icon : btn.label}
          </button>
          {tooltip === btn.tooltip && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 z-20 pointer-events-none opacity-90 shadow-lg">
              {btn.tooltip}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
