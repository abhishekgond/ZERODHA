import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function LeftSection({
  imageURL,
  productName,
  productDiscription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="w-full bg-white px-4 md:px-12 mt-1">
      <div className="flex flex-col md:flex-row gap-16 items-center max-w-5xl mx-auto">
        {/* Left image */}
        <div className="w-full md:w-1/2">
          <img
            src={imageURL}
            alt="product"
            className="w-full h-auto object-contain rounded-xl shadow-md"
          />
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left pl-0 md:pl-24">
          <h1 className="md:text-3xl text-gray-800">{productName}</h1>
          <p className="text-gray-600 leading-relaxed">{productDiscription}</p>

          {/* Conditional Links */}
          {productName.toLowerCase() === "coin" ? (
            <div className="flex justify-center md:justify-start text-blue-600 font-medium">
              <a
                href={tryDemo}
                className="inline-flex items-center gap-1 hover:underline"
              >
                Coin <IoIosArrowRoundForward size={20} />
              </a>
            </div>
          ) : productName.toLowerCase() === "varsity mobile" ? null : (
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-blue-600 font-medium">
              <a
                href={tryDemo}
                className="inline-flex items-center gap-1 hover:underline"
              >
                Try demo <IoIosArrowRoundForward size={20} />
              </a>
              <a
                href={learnMore}
                className="inline-flex items-center gap-1 hover:underline"
              >
                Learn more <IoIosArrowRoundForward size={20} />
              </a>
            </div>
          )}

          {/* Store Badges */}
          <div className="flex gap-4 justify-center md:justify-start mt-4">
            <a href={googlePlay}>
              <img
                src="/images/googlePlayBadge.svg"
                alt="Google Play Store"
                className="h-10"
              />
            </a>
            <a href={appStore}>
              <img
                src="/images/appstoreBadge.svg"
                alt="App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
