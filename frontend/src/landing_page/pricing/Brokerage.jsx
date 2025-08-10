import React, { useState } from "react";

function Brokerage() {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [turnover, setTurnover] = useState(0);
  const [brokerage, setBrokerage] = useState(0);
  const [totalCharges, setTotalCharges] = useState(0);
  const [showCalculator, setShowCalculator] = useState(false);

  const calculateBrokerage = () => {
    const tradeValue = price * quantity;

    // Brokerage = 0.03% or Rs 20 whichever is lower
    const brokeragePerOrder = Math.min(tradeValue * 0.0003, 20);

    // Example charges:
    const stt = tradeValue * 0.00025; // Securities Transaction Tax
    const exchangeTxnCharge = tradeValue * 0.0000325;
    const gst = (brokeragePerOrder + exchangeTxnCharge) * 0.18;
    const sebiCharges = tradeValue * 0.000001;
    const stampDuty = tradeValue * 0.00002;

    const total =
      brokeragePerOrder +
      stt +
      exchangeTxnCharge +
      gst +
      sebiCharges +
      stampDuty;

    setTurnover(tradeValue);
    setBrokerage(brokeragePerOrder);
    setTotalCharges(total);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="md:text-4xl font-semibold text-gray-700 mb-6 mt-12">
        Brokerage Calculator
      </h1>

      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Calculate Your Brokerage Charges
      </p>

      {/* Show Calculator Button first */}
      {!showCalculator && (
        <button
          onClick={() => setShowCalculator(true)}
          className="px-8 py-2 text-white text-base md:text-lg rounded transition mt-2 bg-[#387ed1] hover:bg-black"
        >
          Open Calculator
        </button>
      )}

      {/* Input fields - visible only when showCalculator is true */}
      {showCalculator && (
        <div className="flex flex-col gap-4 w-64 mt-6">
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border p-2 rounded"
          />

          <button
            onClick={calculateBrokerage}
            className="px-8 py-2 text-white text-base md:text-lg rounded transition mt-2 bg-green-600 hover:bg-black"
          >
            Calculate
          </button>
        </div>
      )}

      {/* Output */}
      {turnover > 0 && (
        <div className="mt-6 text-gray-800">
          <p>Turnover: ₹{turnover.toFixed(2)}</p>
          <p>Brokerage: ₹{brokerage.toFixed(2)}</p>
          <p>Total Charges: ₹{totalCharges.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Brokerage;
