import React from "react";
import classes from "./potentialWinnings.module.scss";
import classNames from "classnames";

const PotentialWinnings = () => {
  return (
    <div className={classes.potentialWinningsContainer}>
      <div className={classes.potentialWinningsText}>
        <span>Potential winnings</span>
        <span>8047500 AMD</span>
      </div>
      <div className={classes.potentialWinningsButton}>
        <button className={classNames(classes.btn, classes.instantBet)}>
          INSTANT BET
        </button>
        <button className={classNames(classes.btn, classes.registration)}>
          REGISTRATION
        </button>
      </div>
    </div>
  );
};

export default PotentialWinnings;
