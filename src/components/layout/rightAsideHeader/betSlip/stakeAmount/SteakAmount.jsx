import React from "react";
import classes from "./StakeAmount.module.scss";
import classNames from "classnames";
import settingImg from "../../../../../assets/images/settingsIcon.png";
const SteakAmount = () => {
  return (
    <div className={classes.stakeAmount}>
      <p className={classes.stakeAmountText}>Stake Amount (AMD)</p>
      <div className={classes.stakeInputContainer}>
        <div className={classNames(classes.btn, classes.minusBtn)}>-</div>
        <div className={classes.stakeInput}>
          <input type="text" placeholder={2000} />
        </div>
        <div className={classNames(classes.btn, classes.plusBtn)}>+</div>
        <div className={classes.settingCount}>
          <div className={classes.settingIconContainer}>
            <img src={settingImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteakAmount;
