import React from "react";
import classes from "./MobileMenu.module.scss";
import classNames from "classnames";
import HeaderLinks from "../headerLinks/HeaderLinks";
import Button from "../../../ui/button/Button";

const MobileMenu = ({ openMenuBurger, btnsMediaForPhoneMedia }) => {
  return (
    <div className={classes.modal}>
      <div
        className={classNames(classes.mobileMenu, {
          [classes.open]: openMenuBurger,
        })}>
        <HeaderLinks />
        {btnsMediaForPhoneMedia ? (
          <div className={classes.btnContainer}>
            <Button text={"REGISTRATION"} registration={true} />
            <Button text={"LOG IN"} logInBtn={true} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MobileMenu;
