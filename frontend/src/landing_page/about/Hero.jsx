import React from "react";

function Hero() {
  return (
    <section className="bg-white py-20 px-6 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-center text-[rgb(32,27,27)] leading-snug m-[100px] mb-[100px] ">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row mt-28 max-w-4xl mx-auto px-4 lg:px-0 gap-12">
        {/* Left Column */}
        <div className="space-y-7 flex-1">
          <p>
            We kick-started operations on the{" "}
            "15th of August, 2010" with the
            goal of breaking all barriers that traders and investors face in
            India in terms of cost, support, and technology. We named the
            company
            " Zerodha", a combination of{" "}
            "Zero" and
            " "Rodha"", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over "1.6+ crore" clients place
            billions of orders every year through our powerful ecosystem of
            investment platforms, contributing over
            " 15%" of all Indian retail trading
            volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-7 flex-1">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              blog
            </a>
            , see what the media is{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              saying about us
            </a>
            , or learn more about our business and product{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
