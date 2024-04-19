import React from "react";
import classes from "./MarkUp.module.scss";
const MarkUp = ({ data }) => {
  return (
    <div className={classes.markUp}>
      <span className={classes.markUpNumber}>{data.number}</span>
      {data.redFlag ? (
        <div className={classes.triangle}></div>
      ) : (
        <div className={classes.greenTriangle}></div>
      )}
    </div>
  );
};

export default MarkUp;
