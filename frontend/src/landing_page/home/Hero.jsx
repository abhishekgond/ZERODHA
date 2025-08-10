import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

function Hero() {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleSignup = () => {
    navigate("/signup"); // This should match your signup route
  };

  return (
    <section className="bg-white py-40">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Image */}
        <img
          src="/images/homeHero.png" // Make sure your image is inside public/images/
          alt="Dashboard Preview"
          className="mx-auto mb-10 w-full max-w-4xl"
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-700 mb-4 mt-12">
          Invest in everything
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleSignup}
          className="px-8 py-2 text-white text-base md:text-lg rounded transition mt-6 w-[200px] bg-[#387ed1] hover:bg-black"
        >
          Sign up for free
        </button>
      </div>
    </section>
  );
}

export default Hero;
