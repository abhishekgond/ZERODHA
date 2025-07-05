import React from "react";

function Universe() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center space-y-14">
        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            The Zerodha Universe
          </h1>
          <h3 className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Extend your trading and investment experience even further with our
            partner platforms
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* 1. Zerodha Fund House */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src="/images/zerodhaFundhouse.png"
              alt="Zerodha Fund House"
              className="w-48 cursor-pointer"
            />
            <h4 className="font-semibold text-gray-800">Zerodha Fund House</h4>
            <p className="text-sm text-gray-600 max-w-xs">
              Our asset management venture that is creating <br /> simple and
              transparent index funds to help you <br /> save for your goals.
            </p>
          </div>

          {/* 2. Sensibull */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src="/images/sensibullLogo.svg"
              alt="Sensibull"
              className="w-48 cursor-pointer"
            />
            <h4 className="font-semibold text-gray-800">SENSIBULL</h4>
            <p className="text-sm text-gray-600 max-w-xs">
              Options trading platform that lets you create <br /> strategies,
              analyze positions, and examine data <br /> points like open
              interest, FII/DII, and more.
            </p>
          </div>

          {/* 3. Tijori */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src="/images/tijori.svg"
              alt="Tijori"
              className="w-48 cursor-pointer"
            />
            <h4 className="font-semibold text-gray-800">TIJORI</h4>
            <p className="text-sm text-gray-600 max-w-xs">
              Investment research platform <br /> that offers detailed insights
              on stocks, <br /> sectors, supply chains, and more.
            </p>
          </div>

          {/* 4. Streak */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src="/images/streakLogo.png"
              alt="Streak"
              className="w-48 cursor-pointer"
            />
            <h4 className="font-semibold text-gray-800">Streak</h4>
            <p className="text-sm text-gray-600 max-w-xs">
              Systematic trading platform that allows you to <br /> create and
              backtest strategies without coding.
            </p>
          </div>

          {/* 5. Smallcase */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src="/images/smallcaseLogo.png"
              alt="Smallcase"
              className="w-48 cursor-pointer"
            />
            <h4 className="font-semibold text-gray-800">smallcase</h4>
            <p className="text-sm text-gray-600 max-w-xs">
              Thematic investing platform that helps you invest in <br />{" "}
              diversified baskets of stocks on ETFs.
            </p>
          </div>

          {/* 6. Ditto */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src="/images/dittoLogo.png"
              alt="Ditto"
              className="w-48 cursor-pointer"
            />
            <h4 className="font-semibold text-gray-800">ditto</h4>
            <p className="text-sm text-gray-600 max-w-xs">
              Personalized advice on life and health insurance. <br /> No spam
              and no mis-selling.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button className="px-8 py-2 text-white text-base md:text-lg rounded transition mt-6 w-[200px] bg-[#387ed1] hover:bg-black">
            Sign up for free
          </button>
        </div>
      </div>
    </section>
  );
}

export default Universe;
