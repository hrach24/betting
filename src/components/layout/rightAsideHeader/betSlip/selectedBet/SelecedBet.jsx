import React from "react";
import classes from "./SelectedBet.module.scss";
import settingsImg from "../../../../../assets/images/settingsIcon.png";
import SelectedMatch from "../selectedMatch/SelectedMatch";
import SingleBet from "../singleBet/SingleBet";
import SteakAmount from "../stakeAmount/SteakAmount";
import MaximumStake from "../maximumStake/MaximumStake";
import OddsChange from "../oddsChange/oddsChange";
import PotentialWinnings from "../potentialWinnings/potentialWinnings";
import SaveLoadSection from "../saveLoadSection/saveLoadSection";

const SelecedBet = () => {
  return (
    <div className={classes.selectedBet}>
      <div className={classes.yourBetsContainer}>
        <div className={classes.yourBetText}>YOUR BETS</div>
        <div className={classes.settingIconContainer}>
          <img src={settingsImg} alt="settings" />
        </div>
      </div>
      <SelectedMatch />
      <SingleBet />
      <SteakAmount />
      <MaximumStake />
      <OddsChange />
      <PotentialWinnings />
      <SaveLoadSection />
    </div>
  );
};

export default SelecedBet;
