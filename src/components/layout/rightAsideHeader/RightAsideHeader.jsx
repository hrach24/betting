import React from "react";
import classes from "./RightAsideHeader.module.scss";
import classNames from "classnames";
import BetSlip from "./betSlip/BetSlip";
import Registration from "./registration/Registration";

const RightAsideHeader = () => {
  return (
    <div
      className={classNames(classes.rightAsideHeader, "aside", "globalPadding")}
    >
      <Registration />
      <BetSlip />
    </div>
  );
};

export default RightAsideHeader;
