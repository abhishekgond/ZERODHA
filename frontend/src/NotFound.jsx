import React from "react";
import { Link } from "react-router-dom"; // Remove this if not using react-router

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-500 mt-2">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
