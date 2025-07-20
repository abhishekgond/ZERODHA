import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Equity", "Currency", "Commodity"];
  return (
    <div className="flex space-x-6 border-b border-gray-300 text-lg font-medium mb-6 px-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-2 ${
            activeTab === tab
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
