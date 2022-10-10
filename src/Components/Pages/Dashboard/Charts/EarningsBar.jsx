import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Select from "react-select";
import { options, customStyles } from "./Header-Earnings";
import "../../../../styles/main_app/dashboard/charts/earning.css";

const data = [
  {
    Name: "Jan",
    Earning: "3000",
  },
  {
    Name: "Feb",
    Earning: 8000,
  },
  {
    Name: "Mar",
    Earning: 18000,
  },
  {
    Name: "Apr",
    Earning: 13000,
  },
  {
    Name: "May",
    Earning: 23000,
  },
  {
    Name: "Jun",
    Earning: 14000,
  },
  {
    Name: "Jul",
    Earning: 4000,
  },
  {
    Name: "Aug",
    Earning: 2500,
  },
  {
    Name: "Sep",
    Earning: 2000,
  },
  {
    Name: "Oct",
    Earning: 7000,
  },
  {
    Name: "Nov",
    Earning: 18000,
  },
  {
    Name: "Dec",
    Earning: 22000,
  },
];

export default function EarningsBar() {
  function formatYAxis(value) {
    return `${value / 1000}K`;
  }

  function customToolTip({ active, payload, label }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{label}</p>
          <p className="earning">
            {payload[0].dataKey} : ${`${formatYAxis(payload[0].value)}`}
          </p>
        </div>
      );
    }
  }

  return (
    <div className="bar-chart">
      <div className="header">
        <h3 className="chart-header">Earning</h3>
        <Select
          options={options}
          defaultValue={options[0]}
          styles={customStyles}
        />
      </div>
      <ResponsiveContainer width={510} height={300}>
        <BarChart data={data} barSize={18}>
          <XAxis
            dataKey="Name"
            scale="point"
            stroke=""
            padding={{ left: 60, right: 10 }}
            fontSize="0.8rem"
          />
          <YAxis
            stroke=""
            fontSize="0.8rem"
            ticks={[1000, 5000, 10000, 15000, 20000, 25000]}
            tickFormatter={formatYAxis}
            tickMargin={-25}
            padding={{ top: 0 }}
            width={10}
          />
          <CartesianGrid horizontalPoints={[265]} vertical={false} />
          <Tooltip formatter={formatYAxis} content={customToolTip} />
          <Bar
            dataKey="Earning"
            fill="#00AA00"
            radius={[10, 10, 0, 0]}
            background={{ fill: "#fff" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
