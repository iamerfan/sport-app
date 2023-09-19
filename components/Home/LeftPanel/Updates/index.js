import styles from "@/components/Home/Home.module.scss";
import Sections from "./Sections";

export default function Updates() {
  return (
    <div className={`${styles.box} ${styles.UpdatesContainer}`}>
      <h3>آخرین بروزرسانی</h3>
      <Sections />
    </div>
  );
}
