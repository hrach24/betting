import React, { useState } from "react";
import classes from "./SportsLists.module.scss";
import blackArrowDownImg from "../../../../../assets/images/blackArrowDown.png";
import SportLeague from "../sportsLeague/SportLeague";
const SportsLists = ({ title, count, img, leagues }) => {
  const [showLeauge, updateLeague] = useState(false);

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
        <div className={classes.dropDownButton} onClick={() => updateLeague(!showLeauge)}>
          {!showLeauge ? (
            <img src={blackArrowDownImg} alt="" />
          ) : (
            <img src={blackArrowDownImg} className={classes.blackArrowUp} />
          )}
        </div>
      </div>
      {showLeauge ? <SportLeague leagues={leagues} /> : null}
    </li>
  );
};

export default SportsLists;
