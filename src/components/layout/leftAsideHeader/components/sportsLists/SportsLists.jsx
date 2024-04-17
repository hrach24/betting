import React, { useState } from "react";
import classes from "./SportsLists.module.scss";
import blackArrowDownImg from "../../../../../assets/images/blackArrowDown.png";
import SportLeague from "../sportsLeague/SportLeague";
import classNames from "classnames";
const SportsLists = ({ title, count, img, leagues }) => {
  const [showLeague, updateLeague] = useState(false);

  return (
    <li className={classes.sportItem}>
      <div className={classes.sportItemContainer}>
        <div className={classes.sportItemInfo}>
          <div className={classes.sportItemImg}>
            <img src={img} alt={img} />
          </div>
          <span className={classes.sportItemTitle}>{title}</span>
          <span className={classes.sportItemCount}>{count}</span>
        </div>
        <div
          className={classNames(classes.dropDownButton, {
            [classes.blackArrowUp]: showLeague,
          })}
          onClick={() => updateLeague(!showLeague)}
        >
          <img alt={"arrow"} src={blackArrowDownImg} />
        </div>
      </div>
      {showLeague ? <SportLeague leagues={leagues} /> : null}
    </li>
  );
};

export default SportsLists;
