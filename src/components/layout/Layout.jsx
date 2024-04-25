import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";
import SvgSprite from "../svgSprite/svgSprite";
import { WindowContext } from "../../util/windowSizeChecker";
import { getCurrentWindowSize } from "../../util/windowSizeContext";
const Layout = () => {
  return (
    <div className={classes.wrapper}>
      <WindowContext.Provider value={getCurrentWindowSize()}>
        <SvgSprite />
        <Header />
        <Outlet />
        <Footer />
      </WindowContext.Provider>
    </div>
  );
};

export default Layout;
