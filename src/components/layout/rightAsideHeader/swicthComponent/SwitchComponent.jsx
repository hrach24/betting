import React from "react";
import classes from "./SwitchComponent.module.scss";
import classNames from "classnames";

import thunderImg from "../../../../assets/images/thunderIcon.png";
import phoneImg from "../../../../assets/images/phoneIcon.png";

const SwitchComponent = () => {
  return (
    <div className={classes.switchContainer}>
      <div className={classNames(classes.general, classes.oneClickContainer)}>
        <div className={classes.imgContainer}>
          <img src={thunderImg} alt="" />
        </div>
        <span className={classes.generalText}>One-Click</span>
      </div>
      <div className={classNames(classes.general, classes.phoneContainer)}>
        <div className={classes.imgContainer}>
          <img src={phoneImg} alt="" />
        </div>
        <span className={classes.generalText}>By phone</span>
      </div>
    </div>
  );
};

export default SwitchComponent;
