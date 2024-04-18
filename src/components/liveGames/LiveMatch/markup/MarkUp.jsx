import React from "react";
import classes from "./MarkUp.module.scss";
const MarkUp = () => {
  return (
    <div className={classes.markUp}>
      <span className={classes.markUpNumber}>7652</span>
      <div className={classes.triangle}></div>
    </div>
  );
};

export default MarkUp;
