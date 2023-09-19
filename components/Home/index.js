import React from "react";
import styles from "./Home.module.scss";
import Charts from "./Charts";
import Top from "./Top";
import FeatureMatches from "./FeatureMatches";
import CoachNotes from "./CoachNotes";
import LeftPanel from "./LeftPanel";

export default function Home() {
  return (
    <div className={styles.Main}>
      <div className={styles.Home}>
        <Top />
        <Charts />
        <FeatureMatches />
        <CoachNotes />
      </div>
      <LeftPanel />
    </div>
  );
}
