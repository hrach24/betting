import React from 'react';
import classes from "./Button.module.scss";
import classNames from "classnames";

const Button = ({registration, logInBtn, text}) => {
    return (
        <button className={classNames(classes.btn, {
            [classes.registrationBtn]: registration,
            [classes.logInBtn]: logInBtn
        })}>
            {text}
        </button>
    );
};

export default Button;