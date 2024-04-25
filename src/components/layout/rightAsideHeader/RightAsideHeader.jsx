import React, { useEffect, useState } from "react";
import classes from "./RightAsideHeader.module.scss";
import classNames from "classnames";
import BetSlip from "./betSlip/BetSlip";
import Registration from "./registration/Registration";
import { useMediaQuery } from "react-responsive";

const RightAsideHeader = () => {
  const [hideBar, setHideBar] = useState(false);
  const hideLeftBar = useMediaQuery({ query: "(max-width: 1367px)" });
  useEffect(() => {
    setHideBar(hideLeftBar);
  }, [hideLeftBar]);
  return (
    <>
      {!hideBar ? (
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
      ) : null}
    </>
  );
};

export default RightAsideHeader;
