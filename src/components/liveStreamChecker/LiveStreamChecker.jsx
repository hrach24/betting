import React from "react";
import classes from "./LiveStreamChecker.module.scss";
import LiveStream from "./liveStream/LiveStream";
import LiveStreamList from "./liveStreamList/LiveStreamList";

const LiveStreamChecker = () => {
  return (
    <div className={classes.liveStreamCheckerContainer}>
      <LiveStream />
      <LiveStreamList />
    </div>
  );
};

export default LiveStreamChecker;
