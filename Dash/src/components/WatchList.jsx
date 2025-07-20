import React, { useState, useMemo, useRef, useEffect } from "react";

const initialStocks = [
  {
    id: 1,
    name: "INFY",
    price: 1650.25,
    change: 2.5,
    percent: 1.52,
    group: "Default",
  },
  {
    id: 2,
    name: "HDFCBANK",
    price: 1420.8,
    change: -1.2,
    percent: -0.84,
    group: "Banking",
  },
  {
    id: 3,
    name: "TCS",
    price: 3950.6,
    change: 15.3,
    percent: 0.39,
    group: "Technology",
  },
  {
    id: 4,
    name: "ONGC",
    price: 280.45,
    change: 3.1,
    percent: 1.12,
    group: "Oil & Gas",
  },
  {
    id: 5,
    name: "HINDUNILVR",
    price: 2450.75,
    change: -5.4,
    percent: -0.22,
    group: "Consumer Goods",
  },
  {
    id: 6,
    name: "GOLDBEES",
    price: 58.9,
    change: 0.8,
    percent: 1.38,
    group: "Default",
  },
  {
    id: 7,
    name: "GOLDBEES",
    price: 58.9,
    change: 0.8,
    percent: 1.38,
    group: "Default",
  },
  {
    id: 8,
    name: "GOLDBEES",
    price: 58.9,
    change: 0.8,
    percent: 1.38,
    group: "Default",
  },
  {
    id: 9,
    name: "GOLDBEES",
    price: 58.9,
    change: 0.8,
    percent: 1.38,
    group: "Default",
  },
  {
    id: 10,
    name: "GOLDBEES",
    price: 58.9,
    change: 0.8,
    percent: 1.38,
    group: "Default",
  },
  {
    id: 11,
    name: "GOLDBEES",
    price: 58.9,
    change: 0.8,
    percent: 1.38,
    group: "Default",
  },
  {
    id: 13,
    name: "GOLDBEES",
    price: 58.9,
    change: 0.8,
    percent: 1.38,
    group: "Default",
  },
];

function WatchList() {
  const [stocks, setStocks] = useState(initialStocks);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredStockId, setHoveredStockId] = useState(null);
  const tableRef = useRef(null);
  const itemsPerPage = 8;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    setStocks(stocks.filter((stock) => stock.id !== id));
    setHoveredStockId(null); // Clear hovered state after deletion
  };

  const handleBuySell = (id, action) => {
    alert(`${action} action for stock ID: ${id}`);
  };

  const filteredStocks = useMemo(() => {
    return stocks.filter((stock) =>
      stock.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [stocks, searchTerm]);

  const paginatedStocks = filteredStocks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredStocks.length / itemsPerPage)
  );

  const getPaginationButtons = () => {
    const buttons = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (endPage - startPage < 4) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + 4);
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - 4);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }
    return buttons;
  };

  return (
    <div className="min-h-screen from-indigo-50 to-purple-100 p-4 sm:p-6 lg:p-8 font-inter antialiased text-gray-800 flex justify-center items-start ">
      <div className="flex-1 max-w-6xl w-full">
        <div className="flex justify-between items-center py-5 px-6 bg-white shadow-xl mb-8 ">
          <h1 className="sm:text-2xl font-extrabold text-indigo-900 tracking-tight">
            My Stock Watchlist
          </h1>
        </div>
        <div className="mb-2 w-full">
          <input
            type="text"
            placeholder="Search stocks by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-200 ease-in-out text-gray-700 bg-gray-50 text-base"
          />
        </div>
        <div className="relative" ref={tableRef}>
          <table className="min-w-full divide-y divide-gray-200 table-fixed">
            {/* Added table-fixed here to make column widths consistent */}
            <thead className="bg-indigo-50 border">
              <tr>
                <th
                  scope="col"
                  className="w-2/5 px-6 py-4 text-left text-sm font-extrabold text-indigo-700 uppercase"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="w-1/5 px-6 py-4 text-left text-sm font-extrabold text-indigo-700 uppercase whitespace-nowrap"
                >
                  Price (₹)
                </th>
                <th
                  scope="col"
                  className="w-2/5 px-6 py-4 text-left text-sm font-extrabold text-indigo-700 uppercase whitespace-nowrap"
                  // Use a fixed width or percentage for the change column
                  // This width MUST accommodate the buttons. Adjust as needed.
                  style={{ width: "250px" }} // Example fixed width
                >
                  Change
                </th>
                <th scope="col" className="px-6 py-4">
                  {/* Empty header - this will take any remaining space */}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {paginatedStocks.length === 0 ? (
                <tr>
                  <td
                    colSpan="10" // Adjusted colspan as there are 4 visible columns now
                    className="px-6 py-12 whitespace-nowrap text-center text-gray-500 text-lg font-medium"
                  >
                    No stocks found. Try a different search term.
                  </td>
                </tr>
              ) : (
                paginatedStocks.map((stock) => (
                  <tr
                    key={stock.id}
                    className={`cursor-pointer transition-all duration-200 ease-in-out transform border-l-4 ${
                      hoveredStockId === stock.id
                        ? "bg-indigo-50 border-indigo-500 shadow-inner"
                        : "hover:bg-gray-50 border-transparent"
                    }`}
                    onMouseEnter={() => setHoveredStockId(stock.id)}
                    onMouseLeave={() => setHoveredStockId(null)}
                  >
                    <td className="px-6 py-4 text-base font-medium text-gray-900">
                      {stock.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 font-bold">
                      ₹{stock.price.toFixed(2)}
                    </td>
                    {/* The main 'Change' content cell */}
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-base font-bold text-right`}
                    >
                      {hoveredStockId === stock.id ? (
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBuySell(stock.id, "Buy");
                            }}
                            className="px-2 py-1 rounded text-white font-medium text-xs bg-green-500 hover:bg-green-600 transition-colors duration-200"
                          >
                            BUY
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBuySell(stock.id, "Sell");
                            }}
                            className="px-2 py-1 rounded text-white font-medium text-xs bg-red-500 hover:bg-red-600 transition-colors duration-200"
                          >
                            SELL
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(stock.id);
                            }}
                            className="px-2 py-1 rounded text-gray-700 font-medium text-xs bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
                          >
                            DEL
                          </button>
                        </div>
                      ) : (
                        // Render change data when not hovered
                        <span
                          className={`block ${
                            stock.change >= 0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {stock.change >= 0 ? "▲ " : "▼ "}
                          {stock.change.toFixed(2)} ({stock.percent.toFixed(2)}
                          %)
                        </span>
                      )}
                    </td>
                    {/* This last td can be used for any additional static content or remain empty */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* Removed the 'D' indicator from here to ensure it's either part of the buttons or consistent */}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="mt-8 flex justify-center items-center gap-2 flex-wrap">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed transition duration-200 ease-in-out font-medium transform hover:-translate-y-0.5"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="flex gap-2">
            {totalPages > 1 && currentPage > 3 && (
              <>
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`px-4 py-2 rounded-lg font-medium transition duration-200 ease-in-out bg-gray-200 text-gray-800 hover:bg-gray-300 transform hover:-translate-y-0.5`}
                >
                  1
                </button>
                {currentPage > 4 && (
                  <span className="px-4 py-2 text-gray-500">...</span>
                )}
              </>
            )}
            {getPaginationButtons().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg font-medium transition duration-200 ease-in-out transform hover:-translate-y-0.5 ${
                  currentPage === page
                    ? "bg-indigo-600 text-white shadow-inner"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
            {totalPages > 1 && currentPage < totalPages - 2 && (
              <>
                {currentPage < totalPages - 3 && (
                  <span className="px-4 py-2 text-gray-500">...</span>
                )}
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`px-4 py-2 rounded-lg font-medium transition duration-200 ease-in-out bg-gray-200 text-gray-800 hover:bg-gray-300 transform hover:-translate-y-0.5`}
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed transition duration-200 ease-in-out font-medium transform hover:-translate-y-0.5"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default WatchList;
