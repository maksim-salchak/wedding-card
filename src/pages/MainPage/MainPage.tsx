import React from "react";
import { useLocation } from "react-router-dom";
import { USER_NAMES, UserPath } from "shared";

import photo1 from "../../assets/photo/1.png";
import photo2 from "../../assets/photo/2.png";
import glass from "../../assets/photo/glass.jpg";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  const location = useLocation();

  const guest = USER_NAMES[location.pathname as UserPath];

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

      <section className={styles.guests}>
        <div className={styles.textContent}>
          <div className={styles.guestName}>{guest}</div>

          <div className={styles.guestText}>
            В нашей жизни предстоят счастливые перемены! Мы хотим, чтобы в этот
            день рядом с нами были самые близкие и дорогие для нас люди. Будем
            рады разделить с вами чудесный праздник в день нашей свадьбы.
          </div>

          <div className={styles.date}>10.08.2024</div>

          <a className={styles.linkForm} href="#">
            Заполнить анкету гостя
          </a>
        </div>

        <div className={styles.photoContent}>
          <img className={styles.photo1} src={photo1} alt="Жахонгир и Ляззат" />
          <div className={styles.photo2Wrapper}>
            <img
              className={styles.photo2}
              src={photo2}
              alt="Жахонгир и Ляззат"
            />
          </div>
        </div>
      </section>

      <section className={styles.location}>
        <div className={styles.photo3Wrapper}>
          <img className={styles.photo3} src={glass} alt="Жахонгир и Ляззат" />
        </div>

        <div className={styles.locationTitleWrapper}>
          <div className={styles.locationTitle}>Location</div>
          <div className={styles.locationSubtitle}>for you</div>
        </div>

        <div className={styles.locationContent}>
          <span>Ждем вас по адресу:</span>

          <span>г.Петропавловск, ул Конституции Казахстанна, 41</span>
          <span>ресторан "Brown Street"</span>

          <a
            className={styles.locationLink}
            href="https://yandex.ru/maps/org/brown_street/145179315896/?ll=69.138207%2C54.862834&z=14"
            target="_blank"
            rel="noreferrer"
          >
            Перейти на карту
          </a>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
