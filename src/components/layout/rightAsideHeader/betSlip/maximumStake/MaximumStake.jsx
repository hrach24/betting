import React from "react";
import classes from "./MaximumStake.module.scss";

const MaximumStake = () => {
  return (
    <div className={classes.maximumStake}>
      <span className={classes.stakeText}>Maximum Stake</span>
      <span className={classes.stakeNumber}>290000000</span>
    </div>
  );
};

export default MaximumStake;
