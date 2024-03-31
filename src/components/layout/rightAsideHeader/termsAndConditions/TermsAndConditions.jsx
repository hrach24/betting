import React from "react";
import classes from "./TermsAndConditions.module.scss";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className={classes.termsAndConditions}>
      <span>
        By clicking this button you confirm that you have read and agree to the
        <Link to={"#"} className={classes.link}>
          Terms and Conditions
        </Link>{" "}
        and Privacy Policy of the company and confirm that you are of legal age
      </span>
    </div>
  );
};

export default TermsAndConditions;
