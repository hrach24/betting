import React, { useContext } from "react";
import classes from "./CollapseButton.module.scss";
import { ClickContext } from "../../../../../util/Context";

const CollapseButton = ({ showLeftBar, updateTheProp }) => {
  const { clicked, setValue } = useContext(ClickContext);
  function btnClicked() {
    clicked ? setValue(!clicked) : updateTheProp(!showLeftBar);
  }
  return (
    <div className={classes.collapseContainer}>
      <button className={classes.collapseButton} onClick={btnClicked}>
        {" "}
        {!showLeftBar ? "<< Collapse block" : ">>"}{" "}
      </button>
    </div>
  );
};

export default CollapseButton;
