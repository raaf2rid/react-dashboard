import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Label,
} from "recharts";
import "../../../../styles/main_app/dashboard/charts/drivers.css";

const data = [
  { name: "Active Drivers", value: 70 },
  { name: "Unavailable", value: 25 },
  { name: "Inactive Drivers", value: 55 },
];
const COLORS = ["#0055D7", "#FF7222", "#FFB822"];

export default function DriversPie() {
  return (
    <div className="pie-chart">
      <div className="header">
        <h3 className="chart-header">Drivers</h3>
      </div>

      <PieChart width={510} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          dataKey="value"
          startAngle={-80}
          blendStroke
        >
          <Label value="150" position="centerBottom" className="label-top" />
          <Label value="Drivers" position="centerTop" className="label" />

          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="footer">
        <p>Active Drivers</p>
        <p>Inactive Drivers</p>
        <p>Unavailable</p>
      </div>
    </div>
  );
}
