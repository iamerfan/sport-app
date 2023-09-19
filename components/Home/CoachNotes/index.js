import React from "react";
import styles from "@/components/Home/Home.module.scss";

export default function CoachNotes() {
  return (
    <div className={styles.CoachNotes}>
      <h3>یادداشت های مربی</h3>
      <div className={styles.Notes}>
        <div className={styles.Note}> مربی می تواند برای شما یاداشت بنویسد</div>
        <div className={styles.Note}> مربی می تواند برای شما یاداشت بنویسد</div>
        <div className={styles.Note}> مربی می تواند برای شما یاداشت بنویسد</div>
        <div className={styles.Note}> مربی می تواند برای شما یاداشت بنویسد</div>
      </div>
    </div>
  );
}
