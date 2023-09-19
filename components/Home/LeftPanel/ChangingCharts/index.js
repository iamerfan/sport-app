import styles from "@/components/Home/Home.module.scss";
import Section from "./Section";

export default function ChangingCharts() {
  const data = [
    { name: "Page A", uv: 0 },
    { name: "Page A", uv: 500 },
    { name: "Page A", uv: 170 },
  ];
  return (
    <div className={styles.multipleCharts}>
      <h3>ضریب تغییر آمادگی</h3>
      <div className={styles.charts}>
        <Section data={data} date={7} />
        <Section data={data} date={28} />
        <Section data={data} date={90} />
        <Section data={data} date={365} />
      </div>
    </div>
  );
}
