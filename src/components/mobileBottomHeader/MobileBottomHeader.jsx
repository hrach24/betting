import React, { useContext, useEffect, useState } from "react";
import classes from "./MobileBottomHeader.module.scss";
import Button from "../ui/button/Button";
import { createPortal } from "react-dom";
import LeftAsideHeader from "../layout/leftAsideHeader/LeftAsideHeader";
import { ClickContext } from "../../util/Context";
import { useMediaQuery } from "react-responsive";
import RightAsideHeader from "../layout/rightAsideHeader/RightAsideHeader";

const MobileBottomHeader = () => {
  const hideLeftBar = useMediaQuery({ query: "(min-width: 1367px)" });
  const { clicked, setValue } = useContext(ClickContext);
  const [buttonId, setButtonId] = useState(null);
  useEffect(() => {
    setValue(false);
  }, [hideLeftBar]);
  console.log(clicked, "this is the clicked");

  return (
    <>
      {buttonId === "games"
        ? createPortal(
            <div className={classes.portal}>
              <div className={classes.games}>
                <div>
                  <LeftAsideHeader />
                </div>
              </div>
            </div>,
            document.body,
          )
        : buttonId === "betSlip"
          ? createPortal(
              <div className={classes.betSlipPortal}>
                <div className={classes.betSlip}>
                  <div>
                    <RightAsideHeader />
                  </div>
                </div>
              </div>,
              document.body,
            )
          : null}
      <div className={classes.bottomHeader}>
        <Button
          text={"Games"}
          registration={true}
          clickedContextValue={clicked}
          clickedContextSetValue={setValue}
          buttonId={"games"}
          setButtonId={setButtonId}
        />
        <Button
          text={"Bet Slip"}
          registration={true}
          clickedContextValue={clicked}
          clickedContextSetValue={setValue}
          buttonId={"betSlip"}
          setButtonId={setButtonId}
        />
      </div>
    </>
  );
};

export default MobileBottomHeader;
