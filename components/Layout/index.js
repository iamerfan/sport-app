import React from "react";
import SidePanel from "./Sidepanel";
import { AiOutlineLeft } from "react-icons/ai";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.Layout}>
      <SidePanel />
      {children}
      <button className={styles.ReturnButton}>
        بازگشت
        <AiOutlineLeft />
      </button>
    </div>
  );
}
