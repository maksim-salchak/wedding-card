import React, { MutableRefObject, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { GOOGLE_TABLE_LINK, USER_NAMES, UserPath } from "shared";

import photo1 from "../../assets/photo/1.png";
import photo2 from "../../assets/photo/2.png";
import photo5 from "../../assets/photo/5.png";
import glass from "../../assets/photo/glass.jpg";

import styles from "./MainPage.module.scss";
import clsx from "clsx";

interface IProps {
  muteBtn: React.ReactNode;
}

const MainPage = (props: IProps) => {
  const { muteBtn } = props;
  const location = useLocation();
  const inviteRef = useRef<HTMLElement | null>(null);
  const [sended, setSended] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const guest = USER_NAMES[location.pathname as UserPath]
    ? USER_NAMES[location.pathname as UserPath]
    : "Дорогие гости!";

  const dressCodeExample = ["#DDDCDB", "#B8B0A0", "#96825F", "#181818"];

  const scrollToSection = (ref: MutableRefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const confirm = formData.get("confirm");
    const drink = formData.getAll("drink");

    try {
      setLoading(true);

      const response = await fetch(GOOGLE_TABLE_LINK, {
        method: "POST",
        body: JSON.stringify({ guest: guest, name, confirm, drink }),
      });

      if (response.status === 200) setSended(true);
    } catch (e) {
      console.error(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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

          <button
            className={styles.linkForm}
            onClick={() => scrollToSection(inviteRef)}
          >
            Заполнить анкету гостя
          </button>
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
        <div className={styles.rotatePhoto}>
          <img
            className={styles.photo3}
            src={glass}
            alt="Пирамида шампанского"
          />
        </div>

        <div className={styles.titleWrapper}>
          <div className={styles.title}>Location</div>
          <div className={styles.subtitle}>for you</div>
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

      <section className={styles.timing}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Timing</div>
          <div className={clsx(styles.subtitle, styles.subtitle_right)}>
            special
          </div>
        </div>

        <div className={styles.timingPointWrapper}>
          <div className={styles.timingPoint}>17:00</div>
          <div className={styles.timingPointCaption}>Сбор гостей</div>
        </div>

        <div className={styles.timingPointWrapper}>
          <div className={styles.timingPoint}>18:00</div>
          <div className={styles.timingPointCaption}>Банкет</div>
        </div>

        <div className={styles.timingPointWrapper}>
          <div className={styles.timingPoint}>23:00</div>
          <div
            className={clsx(
              styles.timingPointCaption,
              styles.timingPointCaption_last
            )}
          >
            Свадебный торт
          </div>
        </div>
      </section>

      <section className={styles.dressCode}>
        <div className={styles.titleWrapper}>
          <div className={clsx(styles.title, styles.title_left)}>dress</div>
          <div className={clsx(styles.title, styles.title_break)}>code</div>
          <div className={clsx(styles.subtitle, styles.subtitle_top)}>your</div>
        </div>

        <div className={styles.dressCodeText}>
          Мы очень старались сделать праздник красивым и будем рады, если в
          своих нарядах вы поддержите цветовую гамму нашей свадьбы
        </div>

        <div className={styles.dressCodeColors}>
          {dressCodeExample.map((item) => (
            <div
              key={item}
              className={styles.dressCodeExample}
              style={{ background: `${item}` }}
            />
          ))}
        </div>

        <div className={styles.rotatePhoto}>
          <img className={styles.photo3} src={photo5} alt="Жахонгир и Ляззат" />
        </div>
      </section>

      <section className={styles.invited} ref={inviteRef}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>RSVP</div>
          <div className={clsx(styles.subtitle, styles.subtitle_right)}>
            invited
          </div>
        </div>

        <div className={styles.invitedCaption}>
          Ваши ответы на вопросы очень помогут нам при организации свадьбы.
        </div>

        <div className={styles.invitedCaption}>
          Будем ждать ответы до 01.06.2024 г.
        </div>

        {!sended && !error ? (
          <form
            onSubmit={handleSubmit}
            className={clsx(styles.form, loading && styles.form_loading)}
          >
            <label>
              <div className={styles.formNameWrapper}>
                <span className={styles.formBlockTitle}>{guest}</span>

                <span className={styles.formBlockCaption}>
                  если вы будете с парой или семьей, внесите все имена, а также
                  возраст детей
                </span>

                <input
                  type="text"
                  placeholder="Фамилия Имя"
                  name="name"
                  required
                  className={styles.formNameInput}
                  autoComplete="off"
                  disabled={loading}
                />
                <span className={styles.formNameInput__line} />
              </div>
            </label>

            <div className={styles.formBlockWrapper}>
              <span className={styles.formBlockTitle}>Присутствие</span>

              <label htmlFor="1" className={styles.radioBox}>
                <input
                  className={styles.radioBox__input}
                  id="1"
                  name="confirm"
                  type="radio"
                  required
                  defaultChecked
                  value={"Я приду / Мы придем"}
                  disabled={loading}
                />
                <span className={styles.radioBox__fake} />
                <span className={styles.radioBox__text}>
                  Я приду / Мы придем
                </span>
              </label>

              <label htmlFor="2" className={styles.radioBox}>
                <input
                  className={styles.radioBox__input}
                  id="2"
                  name="confirm"
                  type="radio"
                  required
                  value={"Скажу ответ позже"}
                  disabled={loading}
                />
                <span className={styles.radioBox__fake} />
                <span className={styles.radioBox__text}>Скажу ответ позже</span>
              </label>

              <label htmlFor="3" className={styles.radioBox}>
                <input
                  className={styles.radioBox__input}
                  id="3"
                  name="confirm"
                  type="radio"
                  required
                  value={"Прийти не получится"}
                  disabled={loading}
                />
                <span className={styles.radioBox__fake} />
                <span className={styles.radioBox__text}>
                  Прийти не получится
                </span>
              </label>
            </div>

            <div className={styles.formBlockWrapper}>
              <span className={styles.formBlockTitle}>Напитки</span>

              <label htmlFor="4" className={styles.checkBox}>
                <input
                  className={styles.checkBox__input}
                  id="4"
                  name="drink"
                  type="checkbox"
                  value={"Коньяк"}
                  disabled={loading}
                />
                <span className={styles.checkBox__fake} />
                <span className={styles.checkBox__text}>Коньяк</span>
              </label>

              <label htmlFor="5" className={styles.checkBox}>
                <input
                  className={styles.checkBox__input}
                  id="5"
                  name="drink"
                  type="checkbox"
                  value={"Шампанское"}
                  disabled={loading}
                />
                <span className={styles.checkBox__fake} />
                <span className={styles.checkBox__text}>Шампанское</span>
              </label>

              <label htmlFor="6" className={styles.checkBox}>
                <input
                  className={styles.checkBox__input}
                  id="6"
                  name="drink"
                  type="checkbox"
                  value={"Шампанское"}
                  disabled={loading}
                />
                <span className={styles.checkBox__fake} />
                <span className={styles.checkBox__text}>Другие напитки..</span>
              </label>
            </div>

            <button
              className={clsx(styles.linkForm, styles.linkForm_submit)}
              type="submit"
              disabled={loading}
            >
              Ответить
            </button>
          </form>
        ) : (
          <>
            {!error ? (
              <div className={styles.invitedCaption}>Спасибо за ваш ответ!</div>
            ) : (
              <div className={styles.invitedCaption}>
                Произошла ошибка отправки формы
              </div>
            )}
          </>
        )}
      </section>

      {muteBtn}
    </div>
  );
};

export default MainPage;
