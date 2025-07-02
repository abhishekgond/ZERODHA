import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Education() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Side - Image */}
        <div className="flex-1 p-4">
          <img
            src="images/education.svg"
            alt="Largest Broker"
            className="w-full h-auto"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="flex-1 p-4 mt-6 md:mt-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Free and open market education
          </h1>

          <p className="text-gray-700 mb-8">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href="#"
            className="flex items-center gap-1 hover:underline text-blue-500 mb-12"
          >
            Varsity <IoIosArrowRoundForward size={20} />
          </a>
          <p className="text-gray-700 mb-8">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="#"
            className="flex items-center gap-1 text-blue-500 hover:underline"
          >
            TradingQ&A <IoIosArrowRoundForward size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
