"use client";
import { AiOutlineLeft } from "react-icons/ai";
import styles from "../layout.module.scss";
import Links from "./Links";
import Image from "next/image";
export default function SidePanel() {
  return (
    <div className={styles.SidePanel}>
      <div className={styles.Logo}>لوگو</div>
      <Links />
      <button className={styles.buttomButton}>
        <Image src={"/women.png"} alt="" width={30} height={30} />
        <label> غزل عادل زاده</label>
        <AiOutlineLeft />
      </button>
    </div>
  );
}
