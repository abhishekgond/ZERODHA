import React from "react";

function Price() {
  return (
    <section className="py-20 px-16 lg:flex  max-w-7xl mx-auto">
      <div className="mx-auto text-center">
        <img
          src="/images/pricing0.svg"
          alt="Free equity delivery"
          className="w-[180px] sm:w-[220px] md:w-[250px] mx-auto mb-8"
        />
        <h1 className="sm:text-4xl md:text-3xl font-bold mb-5 text-[#424242]">
          Free Equity Delivery
        </h1>
        <p className="text-base text-gray-600 leading-relaxed">
          All equity delivery investments (NSE, BSE),{" "}
          <br className="hidden sm:inline" />
          are absolutely free — ₹ 0 brokerage.
        </p>
      </div>
      <div className="mx-auto text-center">
        <img
          src="/images/other-trades.svg"
          alt="Free equity delivery"
          className="w-[180px] sm:w-[220px] md:w-[250px] mx-auto mb-8"
        />
        <h1 className="sm:text-4xl md:text-3xl font-bold mb-5 text-[#424242]">
          Intraday and F&O trades
        </h1>
        <p className="text-base text-gray-600 leading-relaxed">
          Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on
          intraday trades across <br /> equity, currency, and commodity trades.
          Flat ₹20 <br /> on all option trades.
        </p>
      </div>
      <div className="mx-auto text-center">
        <img
          src="/images/pricing0.svg"
          alt="Free equity delivery"
          className="w-[180px] sm:w-[220px] md:w-[250px] mx-auto mb-8"
        />
        <h1 className="sm:text-4xl md:text-3xl font-bold mb-5 text-[#424242]">
          Free direct MF
        </h1>
        <p className="text-base text-gray-600 leading-relaxed">
          All direct mutual fund investments are <br />
          absolutely free — ₹ 0 commissions & DP <br /> charges.
        </p>
      </div>
    </section>
  );
}

export default Price;
