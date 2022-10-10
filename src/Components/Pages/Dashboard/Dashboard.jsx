import React from "react";
import Header from "../../Sub-Components/Header";
import SmallBoxes from "./SmallBoxes";
import transport from "../Dashboard/dashboard-assets/transport.svg";
import active1 from "../Dashboard/dashboard-assets/active/active1.svg";
import driver from "../Dashboard/dashboard-assets/drivers.svg";
import EarningsBar from "./Charts/EarningsBar";
import DriversPie from "./Charts/DriversPie";
import OrdersArea from "./Charts/OrdersArea";
import "../../../styles/main_app/dashboard/dashboard-layout.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Header title="Dashboard" />
      <div className="small-box-container">
        <SmallBoxes
          logo={transport}
          title="Drivers on Job"
          number="7"
          style={{ backgroundColor: "#0055D7" }}
        />
        <SmallBoxes
          logo={active1}
          title="Active Orders"
          number="9"
          style={{ backgroundColor: "#FF5701" }}
          sign="active-sign"
        />
        <SmallBoxes
          logo={active1}
          title="Completed Orders"
          number="273"
          style={{ backgroundColor: "#00AA00" }}
          sign="completed-sign"
        />
        <SmallBoxes
          logo={driver}
          title="Active Drivers"
          number="15"
          style={{ backgroundColor: "#F00FBF" }}
        />
        <SmallBoxes
          logo={driver}
          title="Available Drivers"
          number="23"
          style={{ backgroundColor: "#31CBAF" }}
        />
        <SmallBoxes
          logo={driver}
          title="Inactive Drivers"
          number="8"
          style={{ backgroundColor: "#FFB822" }}
        />
      </div>
      <div className="charts">
        <div className="item1">
          <EarningsBar />
        </div>
        <div className="item2">
          <DriversPie />
        </div>
        <div className="item3">
          <OrdersArea />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
