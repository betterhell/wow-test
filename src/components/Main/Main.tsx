import React, { useEffect, useState } from "react";

import styles from "./style.module.scss";

import { getAllShips } from "../../api";

import FilterMenu from "../FilterMenu/FilterMenu";
import Cards from "../Ships/Cards";

import { AnimatePresence } from "framer-motion";

const Main = () => {
  const [ships, setShips] = useState<any[]>([]);
  const [currentShips, setCurrentShips] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getAllShips().then((response) => setShips(response));
    getAllShips().then((response) => setCurrentShips(response));
    setLoading(false);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.main_wrapper}>
        <div className={styles.main_content}>
          <div className={styles.filter_button}>
            <button onClick={() => setOpen(!open)}>
              <img src="src/assets/filter-6554.svg" alt="filter" />
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <FilterMenu ships={ships} setCurrentShips={setCurrentShips} />
            )}
          </AnimatePresence>

          {loading ? (
            <h1 className={styles.loading}>Loading...</h1>
          ) : (
            <Cards
              currentShips={currentShips}
              setCurrentShip={setCurrentShips}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
