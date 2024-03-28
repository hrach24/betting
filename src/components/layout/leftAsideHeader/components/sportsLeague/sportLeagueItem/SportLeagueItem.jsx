import React, { useState } from "react";
import blackArrowDownImg from "../../../../../../assets/images/blackArrowDown.png";
import classes from "./SportLeagueItem.module.scss";
import CurrentMatch from "../../currentMatch/CurrentMatch";
import classNames from "classnames";
const SportLeagueItem = ({ item }) => {
  const [showCurrentMatch, updateCurrentMatch] = useState(false);
  return (
    <li key={item.title} className={classes.leagueListItem}>
      <div className={classes.leagueItemContainer}>
        <div className={classes.leagueItemInfo}>
          <div className={classes.leagueItemImgContainer}>
            <img src={item.img} alt="" className={classes.leagueItemImg} />
          </div>
          <span className={classes.leagueItemTitle}>{item.title}</span>
          <span className={classes.leagueItemCount}>{item.count}</span>
        </div>
        <div
          className={classes.leagueArrowContainer}
          onClick={() => updateCurrentMatch(!showCurrentMatch)}
        >
          <img
            src={blackArrowDownImg}
            alt=""
            className={classNames({
              [classes.arrowUp]: showCurrentMatch,
            })}
          />
        </div>
      </div>
      {showCurrentMatch ? <CurrentMatch /> : null}
    </li>
  );
};

export default SportLeagueItem;
