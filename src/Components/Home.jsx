import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
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
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Home;
