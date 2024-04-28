import React from "react";
import classes from "./Button.module.scss";
import classNames from "classnames";
import { handleClick } from "../../../util/ContextFunctions";

const Button = ({ registration, logInBtn, text }) => {
  const { cureBollen, setBool } = handleClick();

  const updateClick = () => {
    setBool(!cureBollen);
  };
  return (
    <button
      className={classNames(classes.btn, {
        [classes.registrationBtn]: registration,
        [classes.logInBtn]: logInBtn,
      })}
      onClick={updateClick}
    >
      {text}
    </button>
  );
};

export default Button;
