import React from "react";
import classes from "./SelectedMatch.module.scss";
import ballImg from "../../../../../assets/images/ball.png";
import { Link } from "react-router-dom";

import closeBtn from "../../../../../assets/images/closeBtn.png";

const SelectedMatch = () => {
  return (
    <div className={classes.selectedMatchContainer}>
      <div className={classes.liveBanner}>
        <span className={classes.liveText}>Live</span>
      </div>
      <div className={classes.matchInfo}>
        <div className={classes.leagueContainer}>
          <div className={classes.matchLeagueImgContainer}>
            <div className={classes.imgContainer}>
              <img src={ballImg} alt="" />
            </div>
            <div className={classes.league}>7577. England. Championship</div>
          </div>
          <div className={classes.closeContainer}>
            <img src={closeBtn} alt="" />
          </div>
        </div>
        <div className={classes.matchTitle}>
          <Link to={"#"} className={classes.matchTitleLink}>
            Leicester City - Norwich City
          </Link>
          <div className={classes.scoreCount}>[ 2 : 1 ]</div>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.firstNumber}>10</div>
        <div className={classes.secondNumber}>1x2 Draw</div>
      </div>
    </div>
  );
};

export default SelectedMatch;
