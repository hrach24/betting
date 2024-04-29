import React, { useContext, useEffect } from "react";
import classes from "./MobileBottomHeader.module.scss";
import Button from "../ui/button/Button";
import { createPortal } from "react-dom";
import LeftAsideHeader from "../layout/leftAsideHeader/LeftAsideHeader";
import { ClickContext } from "../../util/Context";
import { useMediaQuery } from "react-responsive";

const MobileBottomHeader = () => {
  const hideLeftBar = useMediaQuery({ query: "(min-width: 1367px)" });
  const { value, setValue } = useContext(ClickContext);

  useEffect(() => {
    setValue(false);
  }, [hideLeftBar]);
  console.log(value, "from bottom mobile");
  return (
    <>
      {value &&
        createPortal(
          <div className={classes.portal}>
            <div className={classes.games}>
              <LeftAsideHeader />
            </div>
          </div>,
          document.body,
        )}
      <div className={classes.bottomHeader}>
        <Button text={"Games"} registration={true} />
        <Button text={"Bet Slip"} registration={true} />
      </div>
    </>
  );
};

export default MobileBottomHeader;
