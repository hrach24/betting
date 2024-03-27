import React, { useState } from "react";
import classes from "./LiveAndSupport.module.scss";
import classNames from "classnames";

const LiveAndSupport = () => {
  const [activeSection, updateActiveSection] = useState("Option1");

  return (
    <div className={classes.sportAndLiveSection}>
      <div
        className={classNames(classes.common, {
          [classes.active]: activeSection === "Option1",
          [classes.deActivated]: activeSection !== "Option1",
        })}
        onClick={() => updateActiveSection("Option1")}>
        <div className={classes.liveDot}></div>
        <span className={classes.liveText}>LIVE</span>
      </div>
      <div
        className={classNames(classes.common, {
          [classes.active]: activeSection === "Option2",
          [classes.deActivated]: activeSection !== "Option2",
        })}
        onClick={() => updateActiveSection("Option2")}>
        <span className={classes.sportText}>SPORTS</span>
      </div>
    </div>
  );
};

export default LiveAndSupport;
