import React from "react";
import { US } from "country-flag-icons/react/3x2";
import styles from "@/components/Home/Home.module.scss";

export default function FeatureMatches({ data }) {
  const matches = data ? data : [{ name: "قهرمانی آسیا", date: "20 فروردین" }];
  const mapMatches = matches.map((match, i) => (
    <div className={styles.Match} key={i}>
      <US width={30} height={30} />
      <label className={styles.MatchName}>{match.name}</label>
      <label className={styles.Date}>{match.date}</label>
    </div>
  ));
  return (
    <div className={styles.FeatureMatches}>
      <h3>مسابقات آینده</h3>
      <div className={styles.Matches}>
        {mapMatches}
        {mapMatches}
        {mapMatches}
        {mapMatches}
        {mapMatches}
        {mapMatches}
        {mapMatches}
        {mapMatches}
        {mapMatches}
        {mapMatches}
        {mapMatches}
        {mapMatches}
      </div>
    </div>
  );
}
