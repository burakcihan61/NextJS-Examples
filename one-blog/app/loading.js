import React from "react";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.skchase}>
      <div className={styles.skchasedot}></div>
      <div className={styles.skchasedot}></div>
      <div className={styles.skchasedot}></div>
      <div className={styles.skchasedot}></div>
      <div className={styles.skchasedot}></div>
      <div className={styles.skchasedot}></div>
    </div>
  );
};

export default Loading;
