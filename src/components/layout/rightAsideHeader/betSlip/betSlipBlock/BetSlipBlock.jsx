import React, { useState } from "react";
import classes from "./BetSlipBlock.module.scss";

import settingsIcon from "../../../../../assets/images/settingsIcon.png";
import Event from "../event/Event";
const BetSlipBlock = () => {
  const [showEvent, updateShowEvent] = useState(false);
  return (
    <div className={classes.betSlipBlock}>
      <div className={classes.betSection}>
        <div className={classes.betSectionInfo}>
          <div className={classes.betSectionText}>YOUR BETS</div>
          <div className={classes.settingsIcon}>
            <img src={settingsIcon} alt="" />
          </div>
        </div>
        <div className={classes.whiteSpace}>
          <div className={classes.whiteSpaceText}>
            Add events to the bet slip or enter a code to load events
          </div>
        </div>
        <button className={classes.regSubmitBtn}>REGISTER</button>
      </div>
      <div className={classes.dottedBlock}>
        <button
          className={classes.saveBtn}
          onClick={() => updateShowEvent(!showEvent)}
        >
          <span className={classes.saveTxt}>Save/load events</span>
        </button>
      </div>
      {showEvent ? <Event /> : null}
    </div>
  );
};

export default BetSlipBlock;
