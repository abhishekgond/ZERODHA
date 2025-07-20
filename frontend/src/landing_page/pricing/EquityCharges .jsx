import React from "react";

const EquityCharges = () => {
  const charges = [
    {
      type: "Brokerage",
      delivery: "Zero Brokerage",
      intraday: "0.03% or Rs. 20/executed order whichever is lower",
      futures: "0.03% or Rs. 20/executed order whichever is lower",
      options: "Flat Rs. 20 per executed order",
    },
    {
      type: "STT/CTT",
      delivery: "0.1% on buy & sell",
      intraday: "0.025% on the sell side",
      futures: "0.02% on the sell side",
      options: (
        <ul className="list-disc pl-4 space-y-1">
          <li>
            0.125% of the intrinsic value on options that are bought and
            exercised
          </li>
          <li>0.1% on sell side (on premium)</li>
        </ul>
      ),
    },
    {
      type: "Transaction charges",
      delivery: (
        <>
          NSE: 0.00297% <br />
          BSE: 0.00375%
        </>
      ),
      intraday: (
        <>
          NSE: 0.00297% <br />
          BSE: 0.00375%
        </>
      ),
      futures: (
        <>
          NSE: 0.00173% <br />
          BSE: 0
        </>
      ),
      options: (
        <>
          NSE: 0.03503% (on premium) <br />
          BSE: 0.0325% (on premium)
        </>
      ),
    },
    {
      type: "GST",
      delivery: "18% on (brokerage + SEBI charges + transaction charges)",
      intraday: "18% on (brokerage + SEBI charges + transaction charges)",
      futures: "18% on (brokerage + SEBI charges + transaction charges)",
      options: "18% on (brokerage + SEBI charges + transaction charges)",
    },
    {
      type: "SEBI charges",
      delivery: "₹10 / crore",
      intraday: "₹10 / crore",
      futures: "₹10 / crore",
      options: "₹10 / crore",
    },
    {
      type: "Stamp charges",
      delivery: "0.015% or ₹1500 / crore on buy side",
      intraday: "0.003% or ₹300 / crore on buy side",
      futures: "0.002% or ₹200 / crore on buy side",
      options: "0.003% or ₹300 / crore on buy side",
    },
  ];

  return (
    <section className="px-4">
      <h2 className="text-xl font-bold mb-6">Equity Charges</h2>
      <div className="overflow-auto">
        <table className="min-w-[1000px] w-full border border-gray-300">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border"> </th>
              <th className="p-3 border">Equity Delivery</th>
              <th className="p-3 border">Equity Intraday</th>
              <th className="p-3 border">F&O - Futures</th>
              <th className="p-3 border">F&O - Options</th>
            </tr>
          </thead>
          <tbody>
            {charges.map((item, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="p-3 border font-medium">{item.type}</td>
                <td className="p-3 border">{item.delivery}</td>
                <td className="p-3 border">{item.intraday}</td>
                <td className="p-3 border">{item.futures}</td>
                <td className="p-3 border">{item.options}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EquityCharges;
