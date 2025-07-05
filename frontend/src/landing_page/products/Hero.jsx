import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Hero() {
  return (
    <section className="w-full bg-white pt-44 pb-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center space-y-6 mb-24 ">
        <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold  text-gray-700 space-x-9 ">
          Zerodha Products
        </h1>
        <h5 className="text-lg md:text-xl text-gray-600">
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p className="text-base md:text-lg text-gray-700">
          Check out our{" "}
          <a
            href="#"
            className="inline-flex items-center gap-1 text-blue-600 hover:underline font-medium no-underline"
          >
            investment offerings <IoIosArrowRoundForward size={20} />
          </a>
        </p>
      </div>
      <hr />
    </section>
  );
}

export default Hero;
