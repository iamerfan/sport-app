import styles from "@/components/Home/Home.module.scss";
import Statuses from "./Statuses";
import Updates from "./Updates";

export default function LeftPanel() {
  return (
    <div className={styles.LeftPanel}>
      <Statuses />
      <Updates />
    </div>
  );
}
