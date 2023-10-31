import React, { useEffect, useState } from "react";

import styles from "./style.module.scss";

import { motion } from "framer-motion";

import { Ilevels, levels as initialLevels } from "../../filters/levels";
import { ITypes, types as initialTypes } from "../../filters/types";
import { INations, nations as initialNations } from "../../filters/nations";

interface Props {
  ships: any;
  setCurrentShips: (ships: any) => void;
}

const FilterMenu: React.FunctionComponent<Props> = ({
  ships,
  setCurrentShips,
}) => {
  const [levels, setLevels] = useState<any[]>([...initialLevels]);
  const [types, setTypes] = useState<any[]>([...initialTypes]);
  const [nations, setNations] = useState<any[]>([...initialNations]);

  const onChangeFilter = (item: ITypes | Ilevels | INations, type: string) => {
    switch (type) {
      case "level":
        setLevels((prevState) => {
          const levelIndex = prevState.findIndex(
            (level) => level.id === item.id
          );
          const newLevels = [...prevState];

          newLevels[levelIndex] = {
            ...newLevels[levelIndex],
            checked: !newLevels[levelIndex].checked,
          };
          return newLevels;
        });
        break;
      case "type":
        setTypes((prevState) => {
          const typeIndex = prevState.findIndex((type) => type.id === item.id);
          const newTypes = [...prevState];

          newTypes[typeIndex] = {
            ...newTypes[typeIndex],
            checked: !newTypes[typeIndex].checked,
          };

          return newTypes;
        });
        break;
      case "nation":
        setNations((prevState) => {
          const nationIndex = prevState.findIndex(
            (nation) => nation.id === item.id
          );
          const newNations = [...prevState];

          newNations[nationIndex] = {
            ...newNations[nationIndex],
            checked: !newNations[nationIndex].checked,
          };

          return newNations;
        });
        break;
    }
  };

  useEffect(() => {
    let currentShips = [...ships];

    if (levels.find((level) => level.checked)) {
      currentShips = currentShips.filter(
        (ship) =>
          levels.find((level) => Number(level.id) === ship.level)?.checked
      );
    }

    if (types.find((type) => type.checked)) {
      currentShips = currentShips.filter(
        (ship) => types.find((type) => type.id === ship.type.name)?.checked
      );
    }

    if (nations.find((nation) => nation.checked)) {
      currentShips = currentShips.filter(
        (ship) =>
          nations.find((nation) => nation.id === ship.nation.name)?.checked
      );
    }

    setCurrentShips(currentShips);
  }, [levels, types, nations]);

  return (
    <motion.div
      className={styles.filter_menu}
      style={{ overflow: "hidden" }}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ duration: 0.5 }}
      exit={{ height: 0 }}
      key={"container"}
    >
      <div className={styles.filters_wrapper}>
        <div className={styles.level_filter}>
          <h3>Level</h3>
          <div className={styles.level_filter__items}>
            {levels.map((level) => (
              <label key={level.id} htmlFor={level.id}>
                <input
                  onChange={() => onChangeFilter(level, "level")}
                  checked={level.checked}
                  id={level.id}
                  name={level.name}
                  type="checkbox"
                />
                {level.name}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.type_filter}>
          <h3>Type</h3>
          <div className={styles.type_filter__items}>
            {types.map((type) => (
              <label key={type.id} htmlFor={type.id}>
                <input
                  onChange={() => onChangeFilter(type, "type")}
                  checked={type.checked}
                  id={type.id}
                  title={type.id}
                  type="checkbox"
                />
                {type.name}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.nation_filter}>
          <h3>Nation</h3>
          <div className={styles.nation_filter__items}>
            {nations.map((nation) => (
              <label key={nation.id} htmlFor={nation.id}>
                <input
                  onChange={() => onChangeFilter(nation, "nation")}
                  checked={nation.checked}
                  id={nation.id}
                  name={nation.id}
                  type="checkbox"
                />
                {nation.name}
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterMenu;
