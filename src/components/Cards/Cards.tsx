import React, { Dispatch, SetStateAction } from "react";
import styles from "./style.module.scss";

import { Reorder } from "framer-motion";

interface Props {
  currentShips: any[];
  setCurrentShip: Dispatch<SetStateAction<any[]>>;
}

const Cards: React.FunctionComponent<Props> = ({
  currentShips,
  setCurrentShip,
}) => {
  console.log(currentShips);
  return (
    <Reorder.Group
      axis="y"
      onReorder={setCurrentShip}
      values={currentShips}
      className={styles.ships}
    >
      {currentShips.map((ship: any) => (
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
            <div className={styles.nation}>
              <img
                loading="lazy"
                title={ship.nation.title}
                src={ship.nation.icons.small}
                alt={ship.nation.title}
              />
            </div>
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
      ))}
    </Reorder.Group>
  );
};

export default Cards;
