import React from "react";
import classes from "./MobileBottomHeader.module.scss";
import Button from "../ui/button/Button";
const MobileBottomHeader = () => {
  return (
    <div className={classes.bottomHeader}>
      <Button text={"Games"} registration={true} />
      <Button text={"Bet Slip"} registration={true} />
    </div>
  );
};

export default MobileBottomHeader;
