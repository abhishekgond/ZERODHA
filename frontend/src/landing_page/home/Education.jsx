import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Education() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 sm:py-10 md:py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Left Side - Image */}
        <div className="flex-1 p-2 sm:p-4">
          <img
            src="images/education.svg"
            alt="Largest Broker"
            className="w-full h-auto max-w-[300px] sm:max-w-[400px] mx-auto md:max-w-full"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="flex-1 p-2 sm:p-4 mt-4 sm:mt-6 md:mt-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center md:text-left">
            Free and open market education
          </h1>

          <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base text-center md:text-left">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href="#"
            className="flex items-center gap-1 hover:underline text-blue-500 mb-8 sm:mb-10 md:mb-12 justify-center md:justify-start"
          >
            Varsity <IoIosArrowRoundForward size={18} sm:size={20} />
          </a>
          <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base text-center md:text-left">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="#"
            className="flex items-center gap-1 text-blue-500 hover:underline justify-center md:justify-start"
          >
            TradingQ&A <IoIosArrowRoundForward size={18} sm:size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
