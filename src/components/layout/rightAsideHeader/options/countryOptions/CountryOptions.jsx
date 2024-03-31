import React from "react";
import classes from "./CountryOptions.module.scss";
import armFlag from "../../../../../assets/images/armeniaFlag.png";
import arrowDownImg from "../../../../../assets/images/blackArrowDown.png";
import classNames from "classnames";

const CountryOptions = () => {
  return (
    <div
      className={classNames(
        classes.countryOptionsContainer,
        "registration-options",
      )}
    >
      <div className={"option"}>
        <div className={"optionContainer"}>
          <div className={"optionInfo"}>
            <div className={classes.optionInfoImg}>
              <img src={armFlag} alt="" />
            </div>
            <span className={"optionInfoText"}>Armenia</span>
          </div>
          <div className={"arrowDownContainer"}>
            <img src={arrowDownImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryOptions;
