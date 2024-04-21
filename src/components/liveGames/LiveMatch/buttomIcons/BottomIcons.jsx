import React from "react";
import classNames from "classnames";
import classes from "./BottomIcons.module.scss";

const BottomIcons = ({ bottomIcon }) => {
  return (
    <svg className={classNames(classes.matchInfoIcon)} key={bottomIcon.id}>
      <use xlinkHref={bottomIcon.svgIcon}></use>
    </svg>
  );
};

export default BottomIcons;
