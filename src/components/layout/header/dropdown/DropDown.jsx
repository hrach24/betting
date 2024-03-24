import React from 'react';
import classNames from "classnames";
import classes from "./DropDown.module.scss";
import {Link} from "react-router-dom";

const DropDown = ({value}) => {
    return (
        <div className={classNames(classes.sportDropDown)}>
            <ul className={classNames(classes.dropDownList)}>
                <li className={classNames(classes.dropDownItem)}>
                    <Link to="/" className={classes.dropDownLink}>Bet on Your National Team</Link>
                </li>
                <li className={classNames(classes.dropDownItem)}>
                    <Link to={'/'} className={classes.dropDownLink}>Bet on Big Tournaments</Link>
                </li>
            </ul>
        </div>
    );
};

export default DropDown;