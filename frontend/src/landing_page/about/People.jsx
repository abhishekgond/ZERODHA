import React from "react";

function Team() {
  return (
    <div className="flex flex-col lg:flex-row mt-28 max-w-4xl mx-auto px-6 sm:px-10 gap-12">
      {/* Left Column */}
      <div className="flex flex-col items-center text-center flex-1 space-y-4">
        <img
          src="/images/abhishek.png"
          alt="Abhishek Kumar GOnd"
          className="rounded-full w-72 h-72 object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold mt-4">Abhishek Kumar Gond</h1>
          <h3 className="text-lg text-gray-600">Founder, CEO</h3>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 space-y-7">
        <h1 className="font-semibold text-[30px] sm:text-[28px] mb-10">
          People
        </h1>
        <p>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the
          hurdles he faced during his decade-long stint as a trader. Today,
          Zerodha has changed the landscape of the Indian broking industry.
        </p>
        <p>
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
          and the Market Data Advisory Committee (MDAC).
        </p>
        <p>Playing basketball is his zen.</p>
        <p>
          Connect on{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Homepage
          </a>{" "}
          /{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            TradingQnA
          </a>{" "}
          /{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Twitter
          </a>
        </p>
      </div>
    </div>
  );
}

export default Team;
