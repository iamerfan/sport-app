"use client";
import styles from "@/components/Home/Home.module.scss";
import { useEffect, useState } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

export default function SmallChart({ data }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient)
    return (
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 5,
            left: 0,
            bottom: 0,
          }}
        >
          <Area
            type="monotone"
            dataKey="uv"
            stroke="rgba(209, 38, 98,.5)"
            strokeWidth={1}
            fill="url(#colorGradient)"
            dot={(props) =>
              props.index === data.length - 1 ? (
                <circle
                  key={props.index}
                  cx={props.cx}
                  cy={props.cy}
                  r={2}
                  fill="rgb(209, 38, 98)"
                />
              ) : null
            }
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(250, 150, 232,.8)" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    );
}
