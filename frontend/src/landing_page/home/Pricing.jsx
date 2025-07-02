import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Pricing() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {/* Left Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Unbeatable pricing
          </h1>
          <p className="text-gray-600 mb-4 max-w-lg">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="flex items-center gap-1 text-blue-600 font-medium hover:underline"
          >
            See pricing <IoIosArrowRoundForward size={20} />
          </a>
        </div>

        {/* Right Pricing Items */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
          {/* Item 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <img
              src="/images/pricing0.svg"
              alt="₹0"
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <p className="text-gray-700 text-sm leading-5">
              Free account opening
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <img
              src="/images/pricing0.svg"
              alt="₹0"
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <p className="text-gray-700 text-sm leading-5">
              Free equity delivery <br /> and direct mutual funds
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <img
              src="/images/other-trades.svg"
              alt="₹20"
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <p className="text-gray-700 text-sm leading-5">Intraday and F&O</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
