import React from "react";
import classes from "./Content.module.scss";
import classNames from "classnames";
import Slider from "../slider/Slider";
import CasinoGameSliders from "../casinoGameSliders/CasinoGameSliders";
import ChooseMatchCategory from "../chooseMarchCategory/ChooseMatchCategory";
const Content = () => {
  return (
    <div className={classNames(classes.content, "globalPadding")}>
      <Slider />
      <CasinoGameSliders />
      <ChooseMatchCategory />
      {Array.from(Array(20), (e, i) => (
        <div key={e} style={{ height: "100px", marginTop: "10px" }}>
          sdasd {i}
        </div>
      ))}
    </div>
  );
};
export default Content;
