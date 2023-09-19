import React from "react";
import styles from "../Home.module.scss";
import AreaChart from "./AreaChart";
import GoalChart from "./GoalChart";

export default function Charts() {
  const data = [{ uv: 0 }, { uv: 500 }, { uv: 170 }];
  const lastEl = data[data.length - 1].uv;
  const goal = { value: 600, title: "قهرمانی آسیا" };

  const newData = [
    { uv: lastEl },
    { uv: lastEl - 50 },
    { uv: lastEl + 50 },
    { uv: lastEl - 100 },
    { uv: goal.value },
  ];
  return (
    <div className={styles.Container}>
      <div className={styles.Chart}>
        <AreaChart data={data} />
        <GoalChart data={newData} goal={goal} />
      </div>
    </div>
  );
}
