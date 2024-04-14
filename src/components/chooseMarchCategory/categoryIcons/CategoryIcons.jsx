import React from "react";
import classes from "./CategoryIcons.module.scss";
import homeSvg from "../../../assets/images/homeSvg.png";
import arrowRight from "../../../assets/images/arrowDown.png";
import ballImg from "../../../assets/images/ball.png";
import cupImg from "../../../assets/images/cupSvg.svg";
import classNames from "classnames";
const CategoryIcons = () => {
  return (
    <div className={classes.iconsContainer}>
      <div className={classNames(classes.imgContainer, classes.homeContainer)}>
        <img src={homeSvg} alt="" />
      </div>
      <img src={arrowRight} alt="" className={classes.arrowRight} />
      <div className={classNames(classes.imgContainer, classes.ballContainer)}>
        <img src={ballImg} alt="" />
      </div>
      <img src={arrowRight} alt="" className={classes.arrowRight} />
      <div className={classNames(classes.imgContainer, classes.ballContainer)}>
        <img src={cupImg} alt="" />
      </div>
    </div>
  );
};

export default CategoryIcons;
