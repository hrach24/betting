import React from "react";
import classes from "./Content.module.scss";
import classNames from "classnames";
import Slider from "../slider/Slider";
import CasinoGameSliders from "../casinoGameSliders/CasinoGameSliders";
import ChooseMatchCategory from "../chooseMarchCategory/ChooseMatchCategory";
import LiveStreamChecker from "../liveStreamChecker/LiveStreamChecker";
import LiveGames from "../liveGames/LiveGames";
const Content = () => {
  return (
    <div className={classNames(classes.content, "globalPadding")}>
      <Slider />
      <CasinoGameSliders />
      <ChooseMatchCategory />
      <LiveStreamChecker />
      <LiveGames />
    </div>
  );
};
export default Content;
