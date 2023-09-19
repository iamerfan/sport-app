"use client";
import styles from "@/components/Home/Home.module.scss";
import { useEffect, useState } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

export default function AreaChartComponent({ data }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          <label>{label === 2 ? "امروز" : label + 1}</label>
          <p>{payload[0].value} CTL</p>
        </div>
      );
    }

    return null;
  };
  if (isClient)
    return (
      <ResponsiveContainer minWidth={"70%"} className={styles.AreaChart}>
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 5,
            left: 0,
            bottom: 0,
          }}
        >
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="rgb(209, 38, 98)"
            strokeWidth={4}
            fill="url(#colorGradient)"
            dot={(props) =>
              props.index === data.length - 1 ? (
                <circle
                  key={props.index}
                  cx={props.cx}
                  cy={props.cy}
                  r={5}
                  fill="rgb(209, 38, 98)"
                />
              ) : null
            }
          />
          <defs>
            <linearGradient id="color2Gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(250, 150, 232)" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    );
}
