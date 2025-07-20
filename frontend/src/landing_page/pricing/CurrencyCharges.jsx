import React from "react";

const CurrencyCharges = () => {
  const data = [
    {
      type: "Brokerage",
      futures: "0.03% or ₹ 20/executed order whichever is lower",
      options: "₹ 20/executed order",
    },
    {
      type: "STT/CTT",
      futures: "No STT",
      options: "No STT",
    },
    {
      type: "Transaction charges",
      futures: (
        <>
          NSE: 0.00035%
          <br />
          BSE: 0.00045%
        </>
      ),
      options: (
        <>
          NSE: 0.0311%
          <br />
          BSE: 0.001%
        </>
      ),
    },
    {
      type: "GST",
      futures: "18% on (brokerage + SEBI charges + transaction charges)",
      options: "18% on (brokerage + SEBI charges + transaction charges)",
    },
    {
      type: "SEBI charges",
      futures: "₹10 / crore",
      options: "₹10 / crore",
    },
    {
      type: "Stamp charges",
      futures: "0.0001% or ₹10 / crore on buy side",
      options: "0.0001% or ₹10 / crore on buy side",
    },
  ];

  return (
    <section className="px-4">
      <h2 className="text-xl font-bold mb-4">Currency Charges</h2>
      <div className="overflow-auto">
        <table className="min-w-[700px] w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border text-left"> </th>
              <th className="p-3 border text-left">Currency Futures</th>
              <th className="p-3 border text-left">Currency Options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="p-3 border font-medium">{item.type}</td>
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

export default CurrencyCharges;
