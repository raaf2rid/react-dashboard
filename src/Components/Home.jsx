import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Company from "./Pages/Company";
import Orders from "./Pages/Orders";
import Drivers from "./Pages/Drivers";
import Devices from "./Pages/Devices";
import Accounts from "./Pages/Accounts";
import Settings from "./Pages/Settings";
import "../styles/main_app/header.css";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
  });

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main-app">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home/orders" element={<Orders />} />
            <Route path="/home/company" element={<Company />} />
            <Route path="/home/drivers" element={<Drivers />} />
            <Route path="/home/devices" element={<Devices />} />
            <Route path="/home/accounts" element={<Accounts />} />
            <Route path="/home/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
