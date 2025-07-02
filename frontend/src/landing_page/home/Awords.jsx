import React from "react";

function Awards() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Side - Image */}
        <div className="flex-1 p-4">
          <img
            src="images/largestBroker.svg"
            alt="Largest Broker"
            className="w-full h-auto"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="flex-1 p-4 mt-6 md:mt-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Largest stock broker in India
          </h1>

          <p className="text-gray-600 mb-6">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* Two Column List */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Left List */}
            <ul className="space-y-2 flex-1">
              <li className="text-gray-700">Futures and Options</li>
              <li className="text-gray-700">Commodity derivatives</li>
              <li className="text-gray-700">Currency derivatives</li>
            </ul>

            {/* Right List */}
            <ul className="space-y-2 flex-1">
              <li className="text-gray-700">Stocks & IPOs</li>
              <li className="text-gray-700">Direct mutual funds</li>
              <li className="text-gray-700">Bonds and Govt. Securities</li>
            </ul>
          </div>

          {/* Press Logos Image */}
          <img
            src="images/pressLogos.png"
            alt="Press Logos"
            className="mt-8 w-[90%] max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Awards;
