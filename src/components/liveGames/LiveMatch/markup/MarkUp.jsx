import React from "react";
import classes from "./MarkUp.module.scss";
const MarkUp = ({ data }) => {
  return (
    <div className={classes.markUp}>
      <span className={classes.markUpNumber}>{data.number}</span>
      {data.redFlag ? (
        <div className={classes.triangle}></div>
      ) : data.greenFlag ? (
        <div className={classes.greenTriangle}></div>
      ) : data.lockedIcon ? (
        <div className={classes.svgContainer}>
          <svg className={classes.iconLock}>
            <use xlinkHref="#lock-fill"></use>
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export default MarkUp;
