import axios from "axios";
import React, { useState, useEffect } from "react";
import VerticalGraph from "./VerticalGraph";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allPositions").then((res) => {
      setAllPositions(res.data);
    });
  }, []);

  // Calculate totals
  const totalInvestment = allPositions.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );
  const currentValue = allPositions.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );

  const labels = allPositions.map((arr) => arr["name"]);

  const Data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allPositions.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const profitLoss = currentValue - totalInvestment;
  const profitLossPercent =
    totalInvestment > 0 ? (profitLoss / totalInvestment) * 100 : 0;

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Title */}
      <h3 className="text-lg md:text-2xl font-semibold mb-4 text-gray-800">
        positions ({allPositions.length})
      </h3>

      {/* Table */}
      <div className="overflow-x-auto w-50% bg-white rounded-lg shadow">
        <table className="w-full min-w-[700px] text-sm md:text-base text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
            <tr>
              <th className="py-1 px-2">Product</th>
              <th className="py-1 px-2">Name</th>
              <th className="py-1 px-2">qty.</th>
              <th className="py-1 px-2">Avg. Cost</th>
              <th className="py-1 px-2">LTP</th>
              <th className="py-1 px-2">Cur. Val</th>
              <th className="py-1 px-2">P&amp;L</th>
              <th className="py-1 px-2">Net Chg.</th>
              <th className="py-1 px-2">ToDay CHG</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-600" : "text-red-600";
              const dayClass = stock.isLoss ? "text-red-600" : "text-green-600";

              return (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-gray-800">
                    {stock.product}
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-800">
                    {stock.name}
                  </td>
                  <td className="py-3 px-4">{stock.qty}</td>
                  <td className="py-3 px-4">{stock.avg.toFixed(2)}</td>
                  <td className="py-3 px-4">{stock.price.toFixed(2)}</td>
                  <td className="py-3 px-4">{curValue.toFixed(2)}</td>
                  <td className={`py-3 px-4 font-medium ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`py-3 px-4 ${profClass}`}>{stock.net}</td>
                  <td className={`py-3 px-4 ${dayClass}`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h5 className="text-xl font-bold text-gray-800">
            ₹
            {totalInvestment.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h5>
          <p className="text-sm text-gray-500">Total Investment</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h5 className="text-xl font-bold text-gray-800">
            ₹
            {currentValue.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h5>
          <p className="text-sm text-gray-500">Current Value</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h5
            className={`text-xl font-bold ${
              profitLoss >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            ₹
            {profitLoss.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            ({profitLossPercent >= 0 ? "+" : ""}
            {profitLossPercent.toFixed(2)}%)
          </h5>
          <p className="text-sm text-gray-500">P&amp;L</p>
        </div>
      </div>

      {/* Optional Chart */}
      <VerticalGraph data={Data} />
    </div>
  );
};

export default Positions;
