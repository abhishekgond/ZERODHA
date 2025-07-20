import React from "react";

function Hero() {
  return (
    <section>
      <div className="mx-auto pt-40 pb-28 text-center ">
        <h1
          style={{
            fontSize: "2.77rem",
            fontFamily: "Arial, sans-serif",
            fontStyle: "italic",
            fontWeight: 500,
          }}
        >
          Charges
        </h1>
        <p className="space-y-5 text-[20px] text-gray-400 ">
          List of all charges and taxes
        </p>
      </div>
    </section>
  );
}

export default Hero;
