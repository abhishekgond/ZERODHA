import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Stats() {
  return (
    <section className="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center md:items-start">
      {/* Left Side - Text Content */}
      <div className="flex-1 space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center md:text-left">
          Trust with confidence
        </h1>

        {/* Item 1 */}
        <div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2 text-center md:text-left">
            Customer-first always
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-center md:text-left">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
        </div>

        {/* Item 2 */}
        <div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2 text-center md:text-left">
            No spam or gimmicks
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-center md:text-left">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Our philosophies.
            </a>
          </p>
        </div>

        {/* Item 3 */}
        <div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2 text-center md:text-left">
            The Zerodha universe
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-center md:text-left">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
        </div>

        {/* Item 4 */}
        <div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2 text-center md:text-left">
            Do better with money
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-center md:text-left">
            With initiatives like{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Nudge
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>
      </div>

      {/* Right Side - Image and Links */}
      <div className="flex-1 flex flex-col items-center mt-6 md:mt-0">
        <a href="#">
          <img
            src="/images/ecosystem.png"
            alt="Zerodha Ecosystem"
            className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-md mb-4 sm:mb-6"
          />
        </a>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-blue-600 text-sm sm:text-base font-medium justify-center md:justify-start">
          <a href="#" className="flex items-center gap-1 hover:underline">
            Explore our products{" "}
            <IoIosArrowRoundForward size={18} sm:size={20} />
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            Try Kite demo <IoIosArrowRoundForward size={18} sm:size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Stats;
