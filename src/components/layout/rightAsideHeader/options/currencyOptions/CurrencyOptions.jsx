import React from "react";
import classes from "./CurrencyOptions.module.scss";
import arrowDownImg from "../../../../../assets/images/blackArrowDown.png";
import classNames from "classnames";

const CurrencyOptions = () => {
  return (
    <div
      className={classNames(
        classes.currencycountryOptionsContainer,
        "registration-options",
      )}
    >
      <div className={"option"}>
        <div className={"optionContainer"}>
          <div className={"optionInfo"}>
            <span className={"optionInfoText"}>Armenian dram (AMD)</span>
          </div>
          <div className={"arrowDownContainer"}>
            <img src={arrowDownImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyOptions;
