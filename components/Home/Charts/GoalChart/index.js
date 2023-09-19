"use client";
import { useEffect, useState } from "react";
import styles from "@/components/Home/Home.module.scss";
import { AiFillStar } from "react-icons/ai";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

export default function GoalChart({ data, goal, width, height }) {
  const [isClient, setIsClient] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isClient)
    return (
      <>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Area
              type="monotone"
              dataKey="uv"
              stroke="rgba(209, 38, 98,.5)"
              strokeWidth={4}
              fill="url(#colorGradient)"
              strokeDasharray="5 5"
              animationBegin={animationStarted ? 0 : 2000}
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className={`${styles.goal} ${animationStarted && styles.active}`}>
          <AiFillStar size={30} fill="rgb(209, 38, 98)" />
          <div className={styles.goalContainer}>
            <label> هدف : CTL {goal.value}</label>
            <label>{goal.title}</label>
          </div>
        </div>
      </>
    );
}
