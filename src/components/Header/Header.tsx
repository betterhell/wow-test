import React, { useState } from "react";

import styles from "./style.module.scss";

import Navigations from "../Navigations/Navigations";
import Logo from "../Logo/Logo";
import SearchButton from "../../UI/SearchButton/SearchButton";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <Logo />
        <Navigations open={open} setOpen={setOpen} />
        <div className={styles.download_button}>
          <a href="https://korabli.su/clicktracking/click/?next=/ru/content/game/?autodownload">
            ИГРАЙ БЕСПЛАТНО
          </a>
        </div>
      </div>
      {open && (
        <div className={styles.search_field}>
          <div className={styles.search_input}>
            <input placeholder="Поиск..." type="search" />
            <div className={styles.search_button}>
              <SearchButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
