import React from "react";
import classes from "./RightAsideHeader.module.scss";
import classNames from "classnames";
const RightAsideHeader = () => {
  return (
    <div className={classNames(classes.rightAsideHeader, "aside")}>
      {Array.from(Array(20), (e, i) => (
        <div key={e} style={{ height: "100px" }}>
          sdasd, {i}
        </div>
      ))}
    </div>
  );
};

export default RightAsideHeader;
