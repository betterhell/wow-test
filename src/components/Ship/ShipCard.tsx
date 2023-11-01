import React from "react";
import styles from "../Ships/style.module.scss";
import { AnimatePresence, Reorder } from "framer-motion";
import { Ship } from "../../types/ship";

interface Props {
  ship: Ship;
}

const ShipCard: React.FunctionComponent<Props> = ({ ship }) => {
  return (
    <AnimatePresence>
      <Reorder.Item
        dragListener={false}
        className={styles.ship}
        key={ship.title}
        value={ship}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.ship_info}>
          <h1>{ship.title}</h1>
          <div className={styles.type}>
            <img
              loading="lazy"
              title={ship.type.title}
              src={ship.type.icons.default}
              alt={ship.type.title}
            />
          </div>
        </div>

        <div>
          <img loading="lazy" src={ship.icons.medium} alt={ship.title} />
        </div>

        <img
          loading="lazy"
          className={styles.background}
          src={ship.nation.icons.large}
          alt={ship.nation.title}
        />

        <div className={styles.ship_description}>
          <div className={styles.ship_stats}>
            <h3>
              Level - <span>{ship.level}</span> -
            </h3>
          </div>
          <p>{ship.description}</p>
        </div>
      </Reorder.Item>
    </AnimatePresence>
  );
};

export default ShipCard;
