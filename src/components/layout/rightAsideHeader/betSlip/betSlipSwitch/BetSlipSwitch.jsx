import React, { useState } from "react";
import classes from "./BetSlipSwitch.module.scss";
import classNames from "classnames";
const BetSlipSwitch = () => {
  const [activeSection, updateActiveSection] = useState("Option1");

  return (
    <div className={classes.switchContainer}>
      <div
        className={classNames("common", {
          [classes.active]: activeSection === "Option1",
          [classes.deActivated]: activeSection !== "Option1",
        })}
        onClick={() => updateActiveSection("Option1")}
      >
        <span className={classes.commonText}>BET SLIPS</span>
      </div>
      <div
        className={classNames("common", {
          [classes.active]: activeSection === "Option2",
          [classes.deActivated]: activeSection !== "Option2",
        })}
        onClick={() => updateActiveSection("Option2")}
      >
        <span className={classes.commonText}>MY BETS</span>
      </div>
    </div>
  );
};

export default BetSlipSwitch;
