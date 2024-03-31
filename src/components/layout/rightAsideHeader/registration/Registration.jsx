import React from "react";
import classes from "./Registration.module.scss";
import SwitchComponent from "../swicthComponent/SwitchComponent";
import Options from "../options/Options";
import PromoCode from "../promoCode/PromoCode";
import TermsAndConditions from "../termsAndConditions/TermsAndConditions";
import Deposit from "../depositSection/Deposit";

const Registration = () => {
  return (
    <>
      <div className={classes.registrationContainer}>
        <h3>REGISTRATION</h3>
        <SwitchComponent />
        <Options />
        <PromoCode />
        <TermsAndConditions />
      </div>
      <Deposit />
    </>
  );
};

export default Registration;
