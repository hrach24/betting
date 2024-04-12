import React from "react";
import classes from "./oddsChange.module.scss";

const OddsChange = () => {
  return (
    <div className={classes.oddsChangeContainer}>
      <p className={classes.oddChangeText}>When odds change:</p>
      <div className={classes.oddChangeInputs}>
        <select>
          <option value="Accept if odds increase" selected>
            Accept if odds increase
          </option>
        </select>
        <select>
          <option value="Promo Code" selected className={classes.promoCode}>
            Promo Code
          </option>
        </select>{" "}
      </div>
    </div>
  );
};

export default OddsChange;
