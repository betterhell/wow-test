import React, { Dispatch, SetStateAction } from "react";
import styles from "./style.module.scss";

import { Reorder } from "framer-motion";

import ShipCard from "../Ship/ShipCard";

import { Ship } from "../../types/ship";

interface Props {
  currentShips: any[];
  setCurrentShip: Dispatch<SetStateAction<any[]>>;
}

const Cards: React.FunctionComponent<Props> = ({
  currentShips,
  setCurrentShip,
}) => {
  return (
    <Reorder.Group
      axis="y"
      onReorder={setCurrentShip}
      values={currentShips}
      className={styles.ships}
    >
      {currentShips.map((ship: Ship) => (
        <ShipCard key={ship.title} ship={ship} />
      ))}
    </Reorder.Group>
  );
};

export default Cards;
