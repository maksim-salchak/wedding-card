import React, { MutableRefObject, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { GOOGLE_TABLE_LINK, USER_NAMES, UserPath } from "shared";
import { WhatsAppIcon } from "common";

import photo1 from "../../assets/photo/1.png";
import photo2 from "../../assets/photo/2.png";
import photo3 from "../../assets/photo/3.png";
import photo5 from "../../assets/photo/5.png";
import glass from "../../assets/photo/glass.jpg";
import silver from "../../assets/photo/silver.jpg";
import gold from "../../assets/photo/gold.jpg";

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

  const scrollToSection = (ref: MutableRefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const confirm = formData.getAll("confirm").filter(Boolean);
    const drink = formData.getAll("drink").filter(Boolean);

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
      {muteBtn}

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
            рады разделить с вами этот чудесный праздник — нашу свадьбу.
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
            className={styles.photo5}
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

          <span>г.Петропавловск, ул Конституции Казахстана, 41</span>
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
          <div
            className={styles.dressCodeExample}
            style={{ background: "#292929" }}
          />

          <img className={styles.dressCodeExample} src={silver} alt="silver" />

          <img className={styles.dressCodeExample} src={gold} alt="gold" />

          <div
            className={styles.dressCodeExample}
            style={{ background: "#F6F6F6" }}
          />
        </div>

        <div className={styles.dressCodeTextCaption}>
          <span>
            Будем признательны, если образ
            <span className={styles.strongCaption}> «total white» </span>
            будет только у невесты
          </span>

          <span>
            Если Вам не к лицу не один из данных цветов, Вы можете выбрать
            другой постельный оттенок любого цвета
          </span>

          <span>
            Если Вам не по душе эти формальности, знайте: в чем бы Вы ни пришли,
            мы будем рады Вас видеть!
          </span>
        </div>

        <div className={styles.rotatePhotoWrapper}>
          <div className={styles.rotatePhoto}>
            <img
              className={styles.photo5}
              src={photo5}
              alt="Жахонгир и Ляззат"
            />
          </div>
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
          Будем ждать ответы до 20.06.2024 г.
        </div>

        {!sended && !error ? (
          <form
            onSubmit={handleSubmit}
            className={clsx(styles.form, loading && styles.form_loading)}
          >
            <label>
              <div className={styles.formNameWrapper}>
                <span
                  className={clsx(
                    styles.formBlockTitle,
                    styles.formBlockTitle_paddingBottom
                  )}
                >
                  {guest}
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

              <label htmlFor="4">
                <div className={styles.formNameWrapper}>
                  <input
                    id="4"
                    type="text"
                    placeholder="Свой ответ"
                    name="confirm"
                    className={styles.formNameInput}
                    autoComplete="off"
                    disabled={loading}
                  />
                  <span className={styles.formNameInput__line} />
                </div>
              </label>
            </div>

            <div className={styles.formBlockWrapper}>
              <span className={styles.formBlockTitle}>Напитки</span>

              <label htmlFor="5" className={styles.checkBox}>
                <input
                  className={styles.checkBox__input}
                  id="5"
                  name="drink"
                  type="checkbox"
                  value={"Водка"}
                  disabled={loading}
                />
                <span className={styles.checkBox__fake} />
                <span className={styles.checkBox__text}>Водка</span>
              </label>

              <label htmlFor="6" className={styles.checkBox}>
                <input
                  className={styles.checkBox__input}
                  id="6"
                  name="drink"
                  type="checkbox"
                  value={"Коньяк"}
                  disabled={loading}
                />
                <span className={styles.checkBox__fake} />
                <span className={styles.checkBox__text}>Коньяк</span>
              </label>

              <label htmlFor="7" className={styles.checkBox}>
                <input
                  className={styles.checkBox__input}
                  id="7"
                  name="drink"
                  type="checkbox"
                  value={"Виски"}
                  disabled={loading}
                />
                <span className={styles.checkBox__fake} />
                <span className={styles.checkBox__text}>Виски</span>
              </label>

              <label htmlFor="8" className={styles.checkBox}>
                <input
                  className={styles.checkBox__input}
                  id="8"
                  name="drink"
                  type="checkbox"
                  value={"Вино"}
                  disabled={loading}
                />
                <span className={styles.checkBox__fake} />
                <span className={styles.checkBox__text}>Вино</span>
              </label>

              <label htmlFor="9">
                <div className={styles.formNameWrapper}>
                  <input
                    id="9"
                    type="text"
                    placeholder="Свой ответ"
                    name="drink"
                    className={styles.formNameInput}
                    autoComplete="off"
                    disabled={loading}
                  />
                  <span className={styles.formNameInput__line} />
                </div>
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

      <section className={styles.details}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Details</div>
          <div className={clsx(styles.subtitle, styles.subtitle_special)}>
            special
          </div>
        </div>

        <div className={styles.detailsContent}>
          Чтобы гости могли отдохнуть и повеселиться на нашем торжестве, очень
          просим Вас приходить без детей
        </div>

        <div className={clsx(styles.title, styles.title_paddingTop)}>
          Contacts
        </div>

        <div className={styles.detailsContent}>
          По всем возникшим вопросам в день свадьбы, просьба обращаться к нашему
          свадебному организатору
        </div>

        <div className={styles.detailsContent}>
          <a href="https://wa.me/+77473748072" target="_blank" rel="noreferrer">
            <WhatsAppIcon />
          </a>

          <a
            href="tel:+77473748072"
            target="_blank"
            rel="noreferrer"
            className={styles.locationLink}
          >
            +7 747 374 8072
          </a>
        </div>

        <div className={styles.photo3Content}>
          <img className={styles.photo3} src={photo3} alt="Жахонгир и Ляззат" />
          <div className={styles.photo3Text}>До встречи!</div>
          <div className={styles.photo3Caption}>
            Музыка на фоне: Ed Sheeran Perfect
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
