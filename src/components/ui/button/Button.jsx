import React, { useContext } from "react";
import classes from "./Button.module.scss";
import classNames from "classnames";
import { ClickContext } from "../../../util/Context";

const Button = ({ registration, logInBtn, text }) => {
  const { value, setValue } = useContext(ClickContext);

  return (
    <button
      className={classNames(classes.btn, {
        [classes.registrationBtn]: registration,
        [classes.logInBtn]: logInBtn,
      })}
      onClick={() => setValue(!value)}
    >
      {text}
    </button>
  );
};

export default Button;
