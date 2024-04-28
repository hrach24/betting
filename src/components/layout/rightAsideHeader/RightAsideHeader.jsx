import React, { useContext } from "react";
import classes from "./RightAsideHeader.module.scss";
import classNames from "classnames";
import BetSlip from "./betSlip/BetSlip";
import Registration from "./registration/Registration";
import { ClickContext } from "../../../util/Context";

const RightAsideHeader = () => {
  const useTheCon = useContext(ClickContext);
  console.log(useTheCon);
  return (
    <>
      <div
        className={classNames(
          classes.rightAsideHeader,
          "aside",
          "globalPadding",
        )}
      >
        <Registration />
        <BetSlip />
      </div>
    </>
  );
};

export default RightAsideHeader;
