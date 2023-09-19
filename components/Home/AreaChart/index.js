"use client";

import React from "react";
import { AreaChart, Area } from "recharts";

const RenderLineChart = ({ data }) => (
  <AreaChart
    style={{ position: "" }}
    width={500}
    height={400}
    data={data}
    margin={{
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    }}
  >
    <Area
      type="monotone"
      dataKey="uv"
      stroke="rgb(209, 38, 98)"
      strokeWidth={4}
      fill="url(#colorGradient)"
      dot={(props) =>
        props.index === data.length - 1 ? (
          <circle
            style={{ position: "absolute", zIndex: 5 }}
            cx={props.cx}
            cy={props.cy}
            r={5}
            fill="rgb(209, 38, 98)"
          />
        ) : null
      }
    />
    <defs>
      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgb(250, 150, 232)" />
        <stop offset="100%" stopColor="white" />
      </linearGradient>
    </defs>{" "}
  </AreaChart>
);

export default RenderLineChart;
