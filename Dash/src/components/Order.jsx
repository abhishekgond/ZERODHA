import React from "react";

function Order() {
  return (
    <div className="p-6 flex flex-col bg-white mx-auto w-full border-red items-center justify-center min-h-screen">
      <p className="text-gray-500 text-lg mb-4">
        You haven't placed any orders today
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        aria-label="Get started with placing an order"
      >
        Get started
      </button>
    </div>
  );
}

export default Order;
