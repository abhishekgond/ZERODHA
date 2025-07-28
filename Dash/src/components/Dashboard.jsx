import React from "react";
import { Route, Routes } from "react-router-dom";
import Summery from "./Summery";
import Order from "./Order";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import WatchList_ from "./WatchList_";

function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row mx-auto mt-4  sm:p-0">
      <div className="w-[600px] h-full">
        <WatchList_ />
      </div>
      <div className="w-[1000px]">
        <Routes>
          <Route path="/" element={<Summery />}></Route>
          <Route path="/orders" element={<Order />}></Route>
          <Route path="/holdings" element={<Holdings />}></Route>
          <Route path="/positions" element={<Positions />}></Route>
          <Route path="/funds" element={<Funds />}></Route>
          <Route path="/apps" element={<Apps />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
