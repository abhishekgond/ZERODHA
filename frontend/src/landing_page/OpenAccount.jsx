// import React from "react";

// function OpenAccount() {
//   return (
//     <div className="flex flex-col items-center text-center">
//       <h1 className=" md:text-4xl font-semibold text-gray-700 mb-6 mt-12">
//         Open a Zerodha account
//       </h1>

//       {/* Subtext */}
//       <p className="text-lg md:text-xl text-gray-700 mb-6">
//         Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
//         trades.
//       </p>

//       {/* CTA Button */}
//       <button  className="px-8 py-2 text-white text-base md:text-lg rounded transition mt-6 w-[200px] bg-[#387ed1] hover:bg-black">
//         Sign up for free
//       </button>
//     </div>
//   );
// }

// export default OpenAccount;

import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup"); // This should match your signup route
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="md:text-4xl font-semibold text-gray-700 mb-6 mt-12">
        Open a Zerodha account
      </h1>

      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>

      <button
        onClick={handleSignup}
        className="px-8 py-2 text-white text-base md:text-lg rounded transition mt-6 w-[200px] bg-[#387ed1] hover:bg-black"
      >
        Sign up for free
      </button>
    </div>
  );
}

export default OpenAccount;
