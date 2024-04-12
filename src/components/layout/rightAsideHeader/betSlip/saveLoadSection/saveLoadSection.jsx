import React from "react";
import classes from "./SaveLoadSection.module.scss";
const SaveLoadSection = () => {
  return (
    <div className={classes.saveLoadSectionContainer}>
      <div className={classes.saveAndLoad}>
        <span className={classes.text}>Save/load events</span>
      </div>
    </div>
  );
};

export default SaveLoadSection;
