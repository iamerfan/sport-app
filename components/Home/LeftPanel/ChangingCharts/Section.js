import React from "react";
import styles from "@/components/Home/Home.module.scss";
import SmallChart from "../../Charts/SmallChart";

export default function Section({ date, data }) {
  return (
    <div className={styles.section}>
      <label className={styles.title}> {date} روز گذشته </label>
      <div className={styles.chart}>
        <SmallChart data={data} />
      </div>
      <label className={styles.changes}> 2-</label>
    </div>
  );
}
