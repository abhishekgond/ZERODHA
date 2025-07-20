// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars } from "react-icons/fa";

// function Menu() {
//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const location = useLocation();

//   const handleMenuClick = (index) => {
//     setSelectedMenu(index);
//     setIsSidebarOpen(false); // Close sidebar on link click for mobile
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const isActive = (path) => location.pathname === path;

//   const navLinks = [
//     { to: "/", label: "Dashboard" },
//     { to: "/orders", label: "Orders" },
//     { to: "/holdings", label: "Holdings" },
//     { to: "/positions", label: "Positions" },
//     { to: "/bids", label: "Bids" },
//     { to: "/funds", label: "Funds" },
//   ];

//   return (
//     <nav className="bg-white py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between shadow-sm">
//       {/* Left: Logo and Hamburger Menu */}
//       <div className="flex items-center justify-between w-full sm:w-auto">
//         {/* Logo */}
//         <img
//           src="/kite-logo.png"
//           alt="Kite logo"
//           className="h-4 w-4 sm:h-5 sm:w-4 mr-20"
//         />

//         {/* Hamburger Menu for Small Devices */}
//         <button
//           onClick={toggleSidebar}
//           className="sm:hidden p-2 text-gray-700"
//           aria-label={
//             isSidebarOpen ? "Close navigation menu" : "Open navigation menu"
//           }
//         >
//           <FaBars className="h-5 w-5" />
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <ul
//         className={`${
//           isSidebarOpen ? "flex" : "hidden"
//         } sm:flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm w-full sm:w-auto mt-4 sm:mt-0 bg-white sm:bg-transparent absolute sm:static top-12 left-0 sm:top-auto sm:left-auto px-4 sm:px-0 py-4 sm:py-0 shadow-sm sm:shadow-none transition-all duration-300 ease-in-out z-50`}
//       >
//         {navLinks.map((link, index) => (
//           <li key={link.to}>
//             <Link
//               to={link.to}
//               onClick={() => handleMenuClick(index)}
//               className={`cursor-pointer block py-1 sm:py-0 ${
//                 isActive(link.to)
//                   ? "text-orange-600 font-medium"
//                   : "text-gray-700 hover:text-orange-500"
//               }`}
//               aria-label={`Navigate to ${link.label}`}
//             >
//               {link.label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Right: User Info (Hidden on Small Devices) */}
//       <div className="hidden sm:flex items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
//         <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-pink-100 text-xs sm:text-sm text-purple-700 font-semibold">
//           AK
//         </div>
//         <span className="text-xs sm:text-sm font-medium text-gray-700">
//           OAE436
//         </span>
//       </div>
//     </nav>
//   );
// }

// export default Menu;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Dashboard" },
    { to: "/orders", label: "Orders" },
    { to: "/holdings", label: "Holdings" },
    { to: "/positions", label: "Positions" },
    { to: "/apps", label: "Apps" },
    { to: "/funds", label: "Funds" },
  ];

  return (
    <nav className="bg-white px-4 py-3 md:px-6 flex flex-col md:flex-row items-center justify-between shadow-sm relative z-50">
      {/* Top: Logo & Hamburger */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <img
          src="/kite-logo.png"
          alt="Kite logo"
          className="h-5 w-5 md:h-6 md:w-6 mr-4"
        />

        {/* Hamburger Menu */}
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 text-gray-700"
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          <FaBars
            className={`h-5 w-5 transform transition-transform duration-300 ${
              isSidebarOpen ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>

      {/* Sidebar / Menu Items */}
      <ul
        className={`transition-all duration-300 ease-in-out md:flex flex-col md:flex-row items-center gap-5 text-sm absolute md:static left-0 top-14 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none rounded-b-lg ${
          isSidebarOpen
            ? "flex opacity-100"
            : "hidden md:flex opacity-0 md:opacity-100"
        }`}
      >
        {navLinks.map((link, index) => (
          <li key={link.to}>
            <Link
              to={link.to}
              onClick={() => handleMenuClick(index)}
              className={`block py-1 px-2 rounded-md transition-transform duration-200 ${
                isActive(link.to)
                  ? "text-orange-600 font-semibold scale-105"
                  : "text-gray-700 hover:text-orange-500 hover:scale-105"
              }`}
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side: User Info */}
      <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0">
        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-pink-100 text-sm text-purple-700 font-semibold">
          AK
        </div>
        <span className="text-sm font-medium text-gray-700">OAE436</span>
      </div>
    </nav>
  );
}

export default Menu;
