import {
  format,
  subDays,
} from "date-fns/esm";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cross,
} from "recharts";
import Select from "react-select";
import { options, customStyles } from "./Header-Orders";
import "../../../../styles/main_app/dashboard/charts/orders.css";

const data = [];

for (let num = 9; num >= 1; num--) {
  data.push({
    date: subDays(new Date(2022, 9, 1), num).toISOString().substr(0, 10),
    day: format(new Date(2022, 8, data.length + 2), "eeee"),
    orders: Math.floor(Math.random() * 200),
    nod: Number(format(new Date(2022, 8, data.length + 1), "d")),
  });
}

export default function OrdersArea() {
  function formattedAxis(nod) {
    if (nod > 1 && nod < 9) {
      return data[nod].day;
    }
    return "";
  }

  function customToolTip(props) {
    const { active, payload } = props;
    if (active) {
      return (
        <div className="custom-tooltip-orders">
          <p className="label">Orders</p>
          <p className="orders">{payload[0].value}</p>
        </div>
      );
    }
  }

  function CustomCursor({ x, y, width, height, stroke, payload, points }) {
    return (
      <Cross
        stroke="#FF5701"
        strokeWidth={3}
        x={points[0].x}
        strokeDasharray={4}
        width={0}
        height={payload[0].value}
        top={265 - payload[0].value}
      />
    );
  }

  return (
    <div className="order-chart">
      <div>
        <div className="header">
          <h3 className="chart-header">Order Statistics</h3>
          <Select
            options={options}
            defaultValue={options[1]}
            styles={customStyles}
          />
        </div>
      </div>
      <ResponsiveContainer width={1080} height={300}>
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="20%" stopColor="#FF5701" stopOpacity={0.4} />
              <stop offset="80%" stopColor="#FF5701" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} opacity="0.4" />
          <XAxis
            dataKey="nod"
            stroke=""
            tickFormatter={formattedAxis}
            fontSize="0.8rem"
          />
          <YAxis tickCount={6} stroke="" domain={[0, 250]} fontSize="0.8rem" />
          <Tooltip content={customToolTip} cursor={<CustomCursor />} />
          <Area
            type="monotone"
            dataKey="orders"
            tickCount={6}
            stroke="#FF5701"
            strokeWidth={3}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
