import React from "react";

import styles from "./style.module.scss";
import SearchButton from "../../UI/SearchButton/SearchButton";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Navigations: React.FunctionComponent<Props> = ({ open, setOpen }) => {
  return (
    <div className={styles.navigation_menu}>
      <nav className={styles.navigation}>
        <div className={styles.navigation_item}>
          <a
            className={styles.navigation_link}
            href="https://korabli.su/ru/news/"
          >
            НОВОСТИ
          </a>
        </div>
        <div className={styles.navigation_item}>
          <a
            className={styles.navigation_link}
            href="https://korabli.su/ru/content/game/"
          >
            ИГРА
          </a>
        </div>
        <div className={styles.navigation_item}>
          <a
            className={styles.navigation_link}
            href="https://korabli.su/ru/content/education/"
          >
            ОБУЧЕНИЕ
          </a>
        </div>
        <div className={styles.navigation_item}>
          <a
            className={styles.navigation_link}
            href="https://www.youtube.com/@korabli"
          >
            МЕДИА
          </a>
        </div>
        <div className={styles.navigation_item}>
          <a
            className={styles.navigation_link}
            href="https://profile.korabli.su/"
          >
            ИГРОКИ
          </a>
        </div>
        <div className={styles.navigation_item}>
          <a
            className={styles.navigation_link}
            href="https://forum.korabli.su/"
          >
            ФОРУМ
          </a>
        </div>
        <div className={styles.navigation_item}>
          <a
            className={styles.navigation_link}
            href="https://friends.korabli.su/"
          >
            МОРСКОЕ БРАТСТВО
          </a>
        </div>
      </nav>
      <div className={styles.search}>
        <SearchButton open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Navigations;
