import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 px-4 py-8 sm:px-6 md:px-8 lg:px-16 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Left Side */}
        <div className="flex flex-col items-center sm:items-start">
          <img
            src="images/logo.svg"
            alt="Zerodha Logo"
            className="mb-4 h-6 w-auto"
          />
          <p className="text-xs text-center sm:text-left">
            © 2010 - 2025, Zerodha Broking Ltd.
          </p>
          <p className="text-xs mb-4 mt-3 text-center sm:text-left">
            All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-2 text-gray-600 text-lg sm:text-xl justify-center sm:justify-start">
            <a href="#" className="hover:text-[#387ed1]">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-[#387ed1]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#387ed1]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#387ed1]">
              <FaLinkedinIn />
            </a>
          </div>

          <div className="flex space-x-4 text-gray-600 text-lg sm:text-xl mt-4 justify-center sm:justify-start">
            <a href="#" className="hover:text-[#387ed1]">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-[#387ed1]">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-[#387ed1]">
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-3 text-center sm:text-left">
            Account
          </h3>
          <ul className="space-y-3 text-sm text-center sm:text-left">
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Open demat account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Minor demat account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                NRI demat account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Commodity
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Dematerialisation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Fund transfer
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                MTF
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Referral program
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3 text-center sm:text-left">
            Support
          </h3>
          <ul className="space-y-3 text-sm text-center sm:text-left">
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Support portal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                How to file a complaint?
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Status of your complaints
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Bulletin
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Circular
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Z-Connect blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Downloads
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3 text-center sm:text-left">
            Company
          </h3>
          <ul className="space-y-3 text-sm text-center sm:text-left">
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Philosophy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Press & media
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Zerodha Cares (CSR)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Zerodha.tech
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Open source
              </a>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-semibold mb-3 text-center sm:text-left">
            Quick links
          </h3>
          <ul className="space-y-3 text-sm text-center sm:text-left">
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Upcoming IPOs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Brokerage charges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Market holidays
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Economic calendar
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Calculators
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Markets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#387ed1] transition">
                Sectors
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="space-y-4 text-[10px] sm:text-[11px] mt-12 mx-4 sm:mx-8">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p className="flex flex-wrap gap-2 sm:gap-1 mt-8 justify-center sm:justify-start">
          <a href="" className="text-[#387ed1] hover:text-[#387ed1]">
            Smart
          </a>
          <a href="" className="text-[#387ed1] hover:text-[#387ed1]">
            Online
          </a>
          <a href="" className="text-[#387ed1] hover:text-[#387ed1]">
            Dispute
          </a>
          <a href="" className="text-[#387ed1] hover:text-[#387ed1]">
            Resolution
          </a>
          <span>|</span>
          <a href="" className="text-[#387ed1] hover:text-[#387ed1]">
            Grievances
          </a>
          <a href="" className="text-[#387ed1] hover:text-[#387ed1]">
            Redressal
          </a>
          <a href="" className="text-[#387ed1] hover:text-[#387ed1]">
            Mechanism
          </a>
        </p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor,Gar, if you are subscribing to an IPO,
          there is no need to issue a cheque. Please write the Bank account
          number and sign the IPO application form to authorize your bank to
          make payment in case of allotment. In case of non allotment the funds
          will remain in your bank account. As a business we don't give stock
          tips, and have not authorized anyone to trade on behalf of others. If
          you find anyone claiming to be part of Zerodha and offering such
          services, please create a ticket here.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
