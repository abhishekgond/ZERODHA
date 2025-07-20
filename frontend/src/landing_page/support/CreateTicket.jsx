import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { MdOutlineBarChart } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { LiaCircleNotchSolid } from "react-icons/lia";
import { FaAt } from "react-icons/fa6";
function CreateTicket() {
  return (
    <section className=" px-6 max-w-5xl mx-auto">
      <h1 className="ml-4 mt-20 text-2xl text-gray-800">
        To create a ticket, select a relevant topic
      </h1>

      <div className="flex justify-center w-full max-w-8xl mx-auto">
        <div className=" border-gray-200  p-6 w-full md:w-1/2">
          <a href="#" className="flex items-center text-xl font-semibold ">
            <GoPlusCircle className="text-2xl mr-2" />
            <h3>Account Opening</h3>
          </a>

          <ul className="text-blue-500 mt-6 ml-6 space-y-3">
            <a href="#" className="block hover:text-blue-700">
              <li>Resident individual</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Minor</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Non Resident Indian (NRI)</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Company, Partnership, HUF and LLP</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Glossary</li>
            </a>
          </ul>
        </div>
        <div className=" border-gray-200  p-6 w-full md:w-1/2">
          <a href="#" className="flex items-center text-xl font-semibold ">
            <BsPerson className="text-2xl mr-2" />
            <h3>Your Zerodha Account</h3>
          </a>

          <ul className="text-blue-500 mt-6 ml-6 space-y-3">
            <a href="#" className="block hover:text-blue-700">
              <li>Your Profile</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Account modification</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>
                Client Master Report (CMR) and Depository Participant (DP)
              </li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Nomination</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Transfer and conversion of securities</li>
            </a>
          </ul>
        </div>
        <div className=" border-gray-200  p-6 w-full md:w-1/2">
          <a href="#" className="flex items-center text-xl font-semibold ">
            <MdOutlineBarChart className="text-2xl mr-2" />
            <h3>Kite</h3>
          </a>

          <ul className="text-blue-500 mt-6 ml-6 space-y-3">
            <a href="#" className="block hover:text-blue-700">
              <li>IPO</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Trading FAQs</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Margin Trading Facility (MTF) and Margins</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Alerts and Nudges</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>General</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="flex justify-center w-full max-w-5xl mx-auto">
        <div className=" border-gray-200  p-6 w-full md:w-1/2">
          <a href="#" className="flex items-center text-xl font-semibold ">
            <GoPlusCircle className="text-2xl mr-2" />
            <h3>Funds</h3>
          </a>

          <ul className="text-blue-500 mt-6 ml-6 space-y-3">
            <a href="#" className="block hover:text-blue-700">
              <li>Add money</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Withdraw money</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Add bank accounts</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>eMandates</li>
            </a>
          </ul>
        </div>

        <div className=" border-gray-200  p-6 w-full md:w-1/2">
          <a href="#" className="flex items-center text-xl font-semibold ">
            <FaAt className="text-2xl mr-2" />
            <h3>Console</h3>
          </a>

          <ul className="text-blue-500 mt-6 ml-6 space-y-3">
            <a href="#" className="block hover:text-blue-700">
              <li>Portfolio</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Corporate actions</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Funds statement</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Reports</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Profile</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Segments</li>
            </a>
          </ul>
        </div>

        <div className=" border-gray-200  p-6 w-full md:w-1/2">
          <a href="#" className="flex items-center text-xl font-semibold ">
            <LiaCircleNotchSolid className="text-2xl mr-2" />
            <h3>Coin</h3>
          </a>

          <ul className="text-blue-500 mt-6 ml-6 space-y-3">
            <a href="#" className="block hover:text-blue-700">
              <li>Mutual funds</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>National Pension Scheme (NPS)</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Fixed Deposit (FD)</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Features on Coin</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>Payments and Orders</li>
            </a>
            <a href="#" className="block hover:text-blue-700">
              <li>General</li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
