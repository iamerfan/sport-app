import Image from "next/image";
import styles from "@/components/Home/Home.module.scss";
import { AiFillCalendar, AiFillSetting, AiOutlineDown } from "react-icons/ai";

export default function Top() {
  return (
    <>
      <label className={styles.title}>ورزشکاران من</label>
      <div className={styles.top}>
        <div className={styles.start}>
          <Image
            alt=""
            src={"/women.png"}
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
          <label className={styles.name}>ماندانا دهقان</label>
          <AiOutlineDown size={12} />
        </div>
        <div className={styles.end}>
          <AiFillSetting />
          <AiFillCalendar />
          <button>
            9 هفته تا قهرمانی آسیا
            <AiOutlineDown size={12} />
          </button>
        </div>
      </div>
    </>
  );
}
