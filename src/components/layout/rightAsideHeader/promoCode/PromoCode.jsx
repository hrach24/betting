import React from "react";
import classes from "./PromoCode.module.scss";
import classNames from "classnames";

const PromoCode = () => {
  return (
    <div className={classNames(classes.promoCode, "registration-options")}>
      <input
        type="text"
        className={classes.promoCodeInput}
        placeholder={"Promo code (if you have one)"}
      />
      <button className={classes.regSubmitBtn}>REGISTER</button>
    </div>
  );
};

export default PromoCode;
