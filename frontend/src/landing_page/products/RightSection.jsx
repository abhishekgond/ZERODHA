import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function RightSection({
  imageURL,
  productName,
  productDiscription,
  learnMore,
}) {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-12 mt-1">
      <div className="flex flex-col-reverse md:flex-row gap-16 items-center max-w-5xl mx-auto">
        {/* Left content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
            {productName}
          </h1>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            {productDiscription}
          </p>
          <a
            href={learnMore}
            className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline"
          >
            Learn more <IoIosArrowRoundForward size={20} />
          </a>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2">
          <img
            src={imageURL}
            alt={productName}
            className="w-full h-auto object-contain rounded-xl "
          />
        </div>
      </div>
    </section>
  );
}

export default RightSection;
