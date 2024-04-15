import React, { useState } from "react";
import classes from "./LiveStream.module.scss";
import classNames from "classnames";

const LiveStream = () => {
  const [liveStreamClick, setLiveStreamClick] = useState(false);
  return (
    <div className={classes.liveStreamContainer}>
      <div className={classes.livePadding}>
        <div
          className={classNames(classes.liveToggle, {
            [classes.greenBackground]: liveStreamClick,
          })}
          onClick={() => setLiveStreamClick(!liveStreamClick)}
        >
          <div
            className={classNames(classes.button, {
              [classes.clicked]: liveStreamClick,
            })}
          ></div>
        </div>
        <div className={classes.liveStreamText}>With live streams</div>
      </div>
    </div>
  );
};

export default LiveStream;
