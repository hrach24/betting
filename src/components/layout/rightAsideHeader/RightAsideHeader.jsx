import React, { useState } from "react";
import classes from "./RightAsideHeader.module.scss";
import classNames from "classnames";
import CollapseButton from "../leftAsideHeader/components/collapseButton/CollapseButton";
import Registration from "./registration/Registration";
import BetSlip from "./betSlip/BetSlip";
const RightAsideHeader = () => {
  const [showLeftBar, updateTheProp] = useState(false);

  return (
    <div
      className={classNames(
        classes.rightAsideHeader,
        "aside",
        "globalPadding",
        {
          [classes.minimizeLeftBar]: showLeftBar,
        },
      )}
    >
      <CollapseButton updateTheProp={updateTheProp} showLeftBar={showLeftBar} />
      <Registration />
      <BetSlip />
    </div>
  );
};

export default RightAsideHeader;
