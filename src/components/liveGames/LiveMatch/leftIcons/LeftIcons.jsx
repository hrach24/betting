import React from "react";
import classes from "./LeftIcons.module.scss";

const LeftIcons = ({ icon }) => {
  return (
    <div className={classes.currentIcon}>
      <svg className={classes.svgIcon}>
        <use xlinkHref={icon.svgIcon}></use>
      </svg>
    </div>
  );
};

export default LeftIcons;
