import React from "react";
import classes from "./Event.module.scss";
import classNames from "classnames";
const Event = () => {
  return (
    <div className={classes.event}>
      <input
        type="text"
        className={classes.eventInput}
        placeholder={"Enter code to load events"}
      />
      <div className={classes.saveLoadBtns}>
        <button className={classes.btn}>SAVE</button>
        <button className={classNames(classes.btn, classes.loadBtn)}>
          LOAD
        </button>
      </div>
    </div>
  );
};

export default Event;
