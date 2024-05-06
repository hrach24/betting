import React, { useContext, useEffect, useState } from "react";
import classes from "./LeftAsideHeader.module.scss";
import classNames from "classnames";
import CollapseButton from "./components/collapseButton/CollapseButton";
import LiveAndSupport from "./components/liveAndSportSection/LiveAndSupport";
import Sports from "./components/sports/Sports";
import { useMediaQuery } from "react-responsive";
import { ClickContext } from "../../../util/Context";

const LeftAsideFooter = () => {
  const [showLeftBar, updateTheProp] = useState(false);
  const hideLeftBar = useMediaQuery({ query: "(min-width: 1367px)" });
  const { setValue } = useContext(ClickContext);
  useEffect(() => {
    hideLeftBar ? updateTheProp(showLeftBar) : updateTheProp(false);
  }, [hideLeftBar]);
  return (
    <div
      className={classNames(classes.leftAsideFooter, "aside", {
        [classes.minimizeLeftBar]: showLeftBar,
        globalPadding: !showLeftBar,
      })}
    >
      <CollapseButton
        updateTheProp={updateTheProp}
        showLeftBar={showLeftBar}
        contextClickedValue
        contextClickedSetValue={setValue}
      />
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
