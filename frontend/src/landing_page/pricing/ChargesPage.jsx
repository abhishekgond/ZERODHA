import React, { useState } from "react";
import Tabs from "./Tabs";
import EquityCharges from "./EquityCharges ";
import CurrencyCharges from "./CurrencyCharges";
import CommodityCharges from "./CommodityCharges";

function ChargesPage() {
  const [activeTab, setActiveTab] = useState("Equity");

  return (
    <div className="max-w-6xl mx-auto py-10">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Equity" && <EquityCharges />}
      {activeTab === "Currency" && <CurrencyCharges />}
      {activeTab === "Commodity" && <CommodityCharges />}
    </div>
  );
}

export default ChargesPage;
