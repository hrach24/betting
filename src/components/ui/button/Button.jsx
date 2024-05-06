import React from "react";
import classes from "./Button.module.scss";
import classNames from "classnames";

const Button = ({
  registration,
  logInBtn,
  text,
  clickedContextValue,
  clickedContextSetValue,
  buttonId,
  setButtonId,
}) => {
  function clickFunc() {
    clickedContextSetValue(!clickedContextValue);
    setButtonId(buttonId);
  }
  return (
    <button
      className={classNames(classes.btn, {
        [classes.registrationBtn]: registration,
        [classes.logInBtn]: logInBtn,
      })}
      onClick={clickFunc}
    >
      {text}
    </button>
  );
};

export default Button;
