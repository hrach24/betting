import React, { useState } from "react";
import classes from "./LeftAsideHeader.module.scss";
import classNames from "classnames";
import CollapseButton from "./components/collapseButton/CollapseButton";
import LiveAndSupport from "./components/liveAndSportSection/LiveAndSupport";
import Sports from "./components/sports/Sports";

const LeftAsideFooter = () => {
  const [showLeftBar, updateTheProp] = useState(false);

  return (
    <div
      className={classNames(
        classes.leftAsideFooter,
        "aside",
        !showLeftBar && "globalPadding",
        {
          [classes.minimizeLeftBar]: showLeftBar,
        },
      )}
    >
      <CollapseButton updateTheProp={updateTheProp} showLeftBar={showLeftBar} />
      {showLeftBar ? (
        <div className={classes.mobileLiveDot}>
          <div className={classes.greenMobileLiveDot}></div>
        </div>
      ) : (
        <LiveAndSupport />
      )}
      <Sports key={showLeftBar} />
    </div>
  );
};
export default LeftAsideFooter;
