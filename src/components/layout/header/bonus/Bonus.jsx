import React from "react";
import classes from "./Bonus.module.scss";
import dollarImg from "../../../../assets/images/dollarSign.png";
import giftImg from "../../../../assets/images/gift.png";
import classNames from "classnames";
const Bonus = () => {
  return (
    <div className={classes.bonus}>
      <div className={classNames(classes.bonusContainer, classes.dollar)}>
        <img src={dollarImg} alt="" />
      </div>
      <div className={classNames(classes.bonusContainer, classes.gift)}>
        <img src={giftImg} alt="" />
      </div>
    </div>
  );
};

export default Bonus;
