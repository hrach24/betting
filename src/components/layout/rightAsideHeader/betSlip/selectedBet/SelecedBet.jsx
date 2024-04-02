import React from "react";
import classes from "./SelectedBet.module.scss";
import settingsImg from "../../../../../assets/images/settingsIcon.png";
import SelectedMatch from "../selectedMatch/SelectedMatch";
import SingleBet from "../singleBet/SingleBet";

const SelecedBet = () => {
  return (
    <div className={classes.selectedBet}>
      <div className={classes.yourBetsContainer}>
        <div className={classes.yourBetText}>YOUR BETS</div>
        <div className={classes.settingIconContainer}>
          <img src={settingsImg} alt="" />
        </div>
      </div>
      <SelectedMatch />
      <SingleBet />
    </div>
  );
};

export default SelecedBet;
