import React from "react";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <section className={styles.introSection}>
        <div className={styles.dateWrapper}>
          <h1 className={styles.date}>
            <span className={styles.dateNumber}>10</span>

            <span className={styles.dateNumber}>08</span>

            <span className={styles.dateNumber}>24</span>
          </h1>

          <p className={styles.saveDate}>save the date</p>
        </div>

        <p className={styles.married}>
          <span>ЖАХОНГИР</span>
          <span>&</span>
          <span>ЛЯЗЗАТ</span>
        </p>
      </section>
    </div>
  );
};

export default MainPage;
