import React from "react";

const CommodityCharges = () => {
  const data = [
    {
      type: "Brokerage",
      futures: "0.03% or Rs. 20/executed order whichever is lower",
      options: "₹ 20/executed order",
    },
    {
      type: "STT/CTT",
      futures: "0.01% on sell side (Non-Agri)",
      options: "0.05% on sell side",
    },
    {
      type: "Transaction charges",
      futures: (
        <>
          MCX: 0.0021%
          <br />
          NSE: 0.0001%
        </>
      ),
      options: (
        <>
          MCX: 0.0418%
          <br />
          NSE: 0.001%
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
      futures: (
        <>
          <p>Agri: ₹1 / crore</p>
          <p>Non-agri: ₹10 / crore</p>
        </>
      ),
      options: "₹10 / crore",
    },
    {
      type: "Stamp charges",
      futures: "0.002% or ₹200 / crore on buy side",
      options: "0.003% or ₹300 / crore on buy side",
    },
  ];

  return (
    <section className="px-4">
      <h2 className="text-xl font-bold mb-4">Commodity Charges</h2>
      <div className="overflow-auto">
        <table className="min-w-[700px] w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border text-left"> </th>
              <th className="p-3 border text-left">Commodity Futures</th>
              <th className="p-3 border text-left">Commodity Options</th>
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

export default CommodityCharges;
