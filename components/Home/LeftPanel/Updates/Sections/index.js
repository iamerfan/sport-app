import { PiBicycleFill } from "react-icons/pi";
import Image from "next/image";
import styles from "@/components/Home/Home.module.scss";
export default function Sections() {
  const Updates = [
    {
      id: 0,
      day: "شنبه",
      updatesArry: [
        {
          date: "1401/01/01",
          name: "ماندانا دهقان ",
          title: { data: "دوچرخه سواری", icon: <PiBicycleFill /> },
          data: [
            { name: "زمان", value: "02:05:01", type: "ثانیه" },
            { name: "مسافت", value: 86, type: "KM" },
            { name: "سرعت", value: 144, type: "TTS" },
          ],
        },
      ],
    },
    {
      id: 1,
      day: "جمعه",
      updatesArry: [
        {
          date: "1401/01/01",
          name: "ماندانا دهقان ",
          title: { data: "دوچرخه سواری", icon: <PiBicycleFill /> },
          data: [
            { name: "زمان", value: "02:05:01", type: "ثانیه" },
            { name: "مسافت", value: 86, type: "KM" },
            { name: "سرعت", value: 144, type: "TTS" },
          ],
        },
      ],
    },
  ];
  return (
    <div className={styles.sections}>
      <div className={styles.Updates}>
        {Updates.map((update, id) => {
          return (
            <>
              <h4 key={id} className={styles.updateDate}>
                {update.day}
              </h4>
              <div key={id + 1} className={styles.dateUpdates}>
                {update.updatesArry.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={`${styles.updateContainer} ${styles.purple}`}
                    >
                      <h4 className={styles.top}>
                        <label className={styles.name}>
                          {item.name}
                          <Image
                            src={"/women.png"}
                            alt=""
                            width={30}
                            height={30}
                          />
                        </label>
                        <label className={styles.date}>{item.date}</label>
                      </h4>
                      <div className={styles.dataContainer}>
                        <label className={styles.title}>
                          {item.title.data}
                          {item.title.icon}
                        </label>
                        <div className={styles.data}>
                          {item.data.map((data, index) => {
                            return (
                              <div key={index} className={styles.time}>
                                <label>{data.name}:</label>
                                <label className={styles.value}>
                                  {data.value} {data.type}
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
