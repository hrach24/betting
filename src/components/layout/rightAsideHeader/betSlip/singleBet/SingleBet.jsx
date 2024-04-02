import React from "react";
import classes from "./SingleBet.module.scss";
import arrowDownImg from "../../../../../assets/images/blackArrowDown.png";
import trashImg from "../../../../../assets/images/trashImg.png";
import settingImg from "../../../../../assets/images/settingsIcon.png";
const SingleBet = () => {
  return (
    <div className={classes.singleBetContainer}>
      <div className={classes.singleBetSection}>
        <div className={classes.betContainer}>
          Single Bet
          <div className={classes.arrowDownContainer}>
            <img src={arrowDownImg} alt="" />
          </div>
        </div>
        <div className={classes.trashImgContainer}>
          <img src={trashImg} alt="" />
        </div>
      </div>
      <div className={classes.overallOdds}>
        <div className={classes.text}>Overall odds</div>

        <div className={classes.settingCount}>
          1.2
          <div className={classes.settingIconContainer}>
            <img src={settingImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBet;
