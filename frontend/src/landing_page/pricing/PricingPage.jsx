import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Pricing from "../home/Pricing";
import Brokerage from "./Brokerage";
import Footer from "../Footer";

function PricingPage() {
  return (
    <div>
      <Hero />
      <Pricing />
      <Brokerage />
    </div>
  );
}

export default PricingPage;
