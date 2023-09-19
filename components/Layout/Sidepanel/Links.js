import {
  AiFillBell,
  AiFillCalendar,
  AiFillHome,
  AiFillPieChart,
  AiFillSetting,
} from "react-icons/ai";

import { PiStrategyBold, PiUsersThreeFill } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import styles from "../layout.module.scss";
import { useState } from "react";

export default function Links() {
  const [activeIndex, setActiveIndex] = useState(0);
  const links = [
    { name: "خانه", icon: <AiFillHome />, id: 0 },
    { name: "تقویم", icon: <AiFillCalendar />, id: 1 },
    { name: "آنالیز", icon: <AiFillPieChart />, id: 2 },
    { name: "مدیریت ورزشکاران", icon: <PiUsersThreeFill />, id: 3 },
    { name: "مخزن تمرین ها", icon: <CgGym />, id: 4 },
    { name: "استراتژی ها", icon: <PiStrategyBold />, id: 5 },
    { name: "آخرین فعالیت ها", icon: <AiFillBell />, id: 6 },
    { name: "تنظیمات", icon: <AiFillSetting />, id: 7 },
  ];

  return (
    <div className={styles.Links}>
      {links.map((link, i) => {
        if (link.id >= 4) return;
        return (
          <div
            key={i}
            onClick={() => setActiveIndex(link.id)}
            className={`${styles.Link} ${i === activeIndex && styles.active}`}
          >
            {link.icon}
            <label>{link.name}</label>
          </div>
        );
      })}
      <hr />
      {links.map((link, i) => {
        if (link.id < 4) return;
        return (
          <div
            key={i}
            onClick={() => setActiveIndex(link.id)}
            className={`${styles.Link} ${i === activeIndex && styles.active}`}
          >
            {link.icon}
            <label>{link.name}</label>
          </div>
        );
      })}
    </div>
  );
}
