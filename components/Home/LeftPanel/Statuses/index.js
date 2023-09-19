import React from "react";
import { AiOutlineRise } from "react-icons/ai";
import styles from "@/components/Home/Home.module.scss";
import { GiBiceps } from "react-icons/gi";
import SmallChart from "@/components/Home/Charts/SmallChart";
import ChangingCharts from "../ChangingCharts";

export default function Statuses() {
  return (
    <div className={styles.box}>
      <div className={styles.statuses}>
        <div className={styles.smallStatuses}>
          <div className={styles.smallStatus}>
            <h3 className={styles.title}>میزان خستگی</h3>
            <div className={`${styles.result} ${styles.red}`}>9</div>
          </div>
          <div className={styles.smallStatus}>
            <h3 className={styles.title}>آمادگی</h3>
            <div className={`${styles.result} ${styles.green}`}>20</div>
          </div>
        </div>
        <div className={styles.bigStatus}>
          <h4 className={styles.title}>نشاط</h4>
          <div className={styles.data}>
            <GiBiceps />
            <label className={styles.result}>
              90
              <AiOutlineRise />
            </label>
          </div>
        </div>
      </div>
      <ChangingCharts />
    </div>
  );
}
