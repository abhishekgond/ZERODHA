import React from "react";
import Hero from "./Hero";
import Price from "./Price";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import ChargesPage from "./ChargesPage";

function PricingPage() {
  return (
    <div>
      <Hero />
      <Price />
      <Brokerage />
      <ChargesPage />
      <OpenAccount />
    </div>
  );
}

export default PricingPage;
