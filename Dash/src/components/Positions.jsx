import React from "react";
import { positions } from "../data/data";
import { useState } from "react";
const Positions = () => {

  const [total ,setTotal] = useState();
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Title */}
      <h3 className="text-lg md:text-2xl font-semibold mb-4 text-gray-800">
        positions ({positions.length})
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
            {positions.map((stock, index) => {
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
            ₹29,875.<span className="text-base">55</span>
          </h5>
          <p className="text-sm text-gray-500">Total Investment</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h5 className="text-xl font-bold text-gray-800">
            ₹31,428.<span className="text-base">95</span>
          </h5>
          <p className="text-sm text-gray-500">Current Value</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h5 className="text-xl font-bold text-green-600">
            ₹1,553.40 (+5.20%)
          </h5>
          <p className="text-sm text-gray-500">P&amp;L</p>
        </div>
      </div>

      {/* Optional Chart */}
      {/* <VerticalGraph data={data} /> */}
    </div>
  );
};

export default Positions;
