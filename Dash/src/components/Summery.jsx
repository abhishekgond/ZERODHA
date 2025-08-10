// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";

// const Summery = () => {
//   const [allHoldings, setAllHolding] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/allHoldings").then((res) => {
//       setAllHolding(res.data);
//     });
//   }, []);
//   return (
//     <div className="p-4 w-full">
//       {/* Username */}
//       <div className="text-gray-700">
//         <h6 className="text-lg font-semibold">Hi, User</h6>
//         <hr className="my-2 border-gray-300" />
//       </div>

//       {/* Equity Section */}
//       <div className="space-y-4">
//         <p className="text-sm font-medium text-gray-500">Equity</p>

//         <div className="bg-white rounded-lg shadow p-4 space-y-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800">3.74k</h3>
//               <p className="text-sm text-gray-500">Margin available</p>
//             </div>
//           </div>
//           <hr className="border-gray-200" />

//           <div className="text-sm text-gray-600 space-y-1">
//             <p>
//               Margins used <span className="font-semibold">0</span>
//             </p>
//             <p>
//               Opening balance <span className="font-semibold">3.74k</span>
//             </p>
//           </div>
//         </div>

//         <hr className="border-gray-300" />
//       </div>

//       {/* Holdings Section */}
//       <div className="space-y-4">
//         <p className="text-sm font-medium text-gray-500">Holdings (13)</p>

//         <div className="bg-white rounded-lg shadow p-4 space-y-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <h3 className="text-2xl font-bold text-green-600">
//                 1.55k <small className="text-sm text-green-500">+5.20%</small>
//               </h3>
//               <p className="text-sm text-gray-500">P&amp;L</p>
//             </div>
//           </div>
//           <hr className="border-gray-200" />

//           <div className="text-sm text-gray-600 space-y-1">
//             <p>
//               Current Value <span className="font-semibold">31.43k</span>
//             </p>
//             <p>
//               Investment <span className="font-semibold">{allHoldings}</span>
//             </p>
//           </div>
//         </div>

//         <hr className="border-gray-300" />
//       </div>
//     </div>
//   );
// };

// export default Summery;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Summery = () => {
  const [allHoldings, setAllHolding] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHolding(res.data);
    });
  }, []);

  // ✅ Calculate Total Investment & Current Value
  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );
  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );
  const profitLoss = currentValue - totalInvestment;
  const profitLossPercent =
    totalInvestment > 0 ? (profitLoss / totalInvestment) * 100 : 0;

  const isProfit = profitLoss >= 0;

  return (
    <div className="p-4 w-full">
      {/* Username */}
      <div className="text-gray-700">
        <h6 className="text-lg font-semibold">Hi, User</h6>
        <hr className="my-2 border-gray-300" />
      </div>

      {/* Equity Section */}
      {/* <div className="space-y-4">
        <p className="text-sm font-medium text-gray-500">Equity</p>

        <div className="bg-white rounded-lg shadow p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">3.74k</h3>
              <p className="text-sm text-gray-500">Margin available</p>
            </div>
          </div>
          <hr className="border-gray-200" />

          <div className="text-sm text-gray-600 space-y-1">
            <p>
              Margins used <span className="font-semibold">0</span>
            </p>
            <p>
              Opening balance <span className="font-semibold">3.74k</span>
            </p>
          </div>
        </div>

        <hr className="border-gray-300" />
      </div> */}

      {/* Holdings Section */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-500">
          Holdings ({allHoldings.length})
        </p>

        <div className="bg-white rounded-lg shadow p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3
                className={`text-2xl font-bold ${
                  isProfit ? "text-green-600" : "text-red-600"
                }`}
              >
                ₹
                {profitLoss.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                <small
                  className={`text-sm ${
                    isProfit ? "text-green-500" : "text-red-500"
                  }`}
                >
                  ({profitLossPercent.toFixed(2)}%)
                </small>
              </h3>
              <p className="text-sm text-gray-500">P&amp;L</p>
            </div>
          </div>
          <hr className="border-gray-200" />

          <div className="text-sm text-gray-600 space-y-1">
            <p>
              Current Value{" "}
              <span className="font-semibold">
                ₹
                {currentValue.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </p>
            <p>
              Investment{" "}
              <span className="font-semibold">
                ₹
                {totalInvestment.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </p>
          </div>
        </div>

        <hr className="border-gray-300" />
      </div>
    </div>
  );
};

export default Summery;
