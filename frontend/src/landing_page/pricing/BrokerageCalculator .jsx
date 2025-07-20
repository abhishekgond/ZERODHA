import React, { useState } from "react";

const BrokerageCalculator = () => {
  const [segment, setSegment] = useState("Equity");
  const [type, setType] = useState("Delivery");
  const [buy, setBuy] = useState("");
  const [sell, setSell] = useState("");
  const [qty, setQty] = useState("");
  const [result, setResult] = useState(null);

  const calculateCharges = () => {
    const buyValue = parseFloat(buy) * parseInt(qty);
    const sellValue = parseFloat(sell) * parseInt(qty);
    let brokerage = 0;
    let stt = 0;
    let transaction = 0;
    let gst = 0;
    let sebi = 0;
    let stamp = 0;

    const totalTurnover = buyValue + sellValue;

    if (segment === "Equity") {
      if (type === "Delivery") {
        brokerage = 0;
        stt = 0.001 * totalTurnover;
        transaction = 0.0000297 * totalTurnover;
        sebi = (10 / 10000000) * totalTurnover;
        stamp = 0.00015 * buyValue;
      } else if (type === "Intraday") {
        brokerage = Math.min(0.0003 * totalTurnover, 20);
        stt = 0.00025 * sellValue;
        transaction = 0.0000297 * totalTurnover;
        sebi = (10 / 10000000) * totalTurnover;
        stamp = 0.00003 * buyValue;
      }
    } else if (segment === "Currency") {
      brokerage = Math.min(0.0003 * totalTurnover, 20);
      stt = 0;
      transaction =
        type === "Futures"
          ? 0.0000035 * totalTurnover
          : 0.000311 * totalTurnover;
      sebi = (10 / 10000000) * totalTurnover;
      stamp = 0.000001 * buyValue;
    } else if (segment === "Commodity") {
      brokerage =
        type === "Options" ? 20 : Math.min(0.0003 * totalTurnover, 20);
      stt = type === "Options" ? 0.0005 * sellValue : 0.0001 * sellValue;
      transaction =
        type === "Options"
          ? 0.000418 * totalTurnover
          : 0.000021 * totalTurnover;
      sebi = (10 / 10000000) * totalTurnover;
      stamp = type === "Options" ? 0.00003 * buyValue : 0.0002 * buyValue;
    }

    gst = 0.18 * (brokerage + transaction + sebi);

    const totalCharges = brokerage + stt + transaction + sebi + gst + stamp;
    const netPL = sellValue - buyValue - totalCharges;

    setResult({
      brokerage,
      stt,
      transaction,
      sebi,
      gst,
      stamp,
      totalCharges,
      netPL,
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Brokerage Calculator</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Segment:</label>
          <select
            className="w-full border px-2 py-1"
            value={segment}
            onChange={(e) => {
              setSegment(e.target.value);
              setType(e.target.value === "Equity" ? "Delivery" : "Futures");
            }}
          >
            <option>Equity</option>
            <option>Currency</option>
            <option>Commodity</option>
          </select>
        </div>

        <div>
          <label>Type:</label>
          <select
            className="w-full border px-2 py-1"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {segment === "Equity" && (
              <>
                <option>Delivery</option>
                <option>Intraday</option>
              </>
            )}
            {(segment === "Currency" || segment === "Commodity") && (
              <>
                <option>Futures</option>
                <option>Options</option>
              </>
            )}
          </select>
        </div>

        <div>
          <label>Buy Price:</label>
          <input
            type="number"
            className="w-full border px-2 py-1"
            value={buy}
            onChange={(e) => setBuy(e.target.value)}
          />
        </div>

        <div>
          <label>Sell Price:</label>
          <input
            type="number"
            className="w-full border px-2 py-1"
            value={sell}
            onChange={(e) => setSell(e.target.value)}
          />
        </div>

        <div>
          <label>Quantity:</label>
          <input
            type="number"
            className="w-full border px-2 py-1"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </div>
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={calculateCharges}
      >
        Calculate
      </button>

      {result && (
        <div className="bg-gray-100 p-4 rounded mt-4">
          <p>
            <strong>Brokerage:</strong> ₹{result.brokerage.toFixed(2)}
          </p>
          <p>
            <strong>STT:</strong> ₹{result.stt.toFixed(2)}
          </p>
          <p>
            <strong>Transaction Charges:</strong> ₹
            {result.transaction.toFixed(2)}
          </p>
          <p>
            <strong>SEBI Charges:</strong> ₹{result.sebi.toFixed(4)}
          </p>
          <p>
            <strong>GST:</strong> ₹{result.gst.toFixed(2)}
          </p>
          <p>
            <strong>Stamp Charges:</strong> ₹{result.stamp.toFixed(2)}
          </p>
          <p className="mt-2 text-lg">
            <strong>Total Charges:</strong> ₹{result.totalCharges.toFixed(2)}
          </p>
          <p className="text-lg">
            <strong>Net P&L:</strong> ₹{result.netPL.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default BrokerageCalculator;
