import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";
import SvgSprite from "../svgSprite/svgSprite";
import { ClickContext, WindowContext } from "../../util/Context";
import { getCurrentWindowSize } from "../../util/ContextFunctions";
import { useMediaQuery } from "react-responsive";
import MobileBottomHeader from "../mobileBottomHeader/MobileBottomHeader";
import { values } from "../../util/ContextFunctions";
const Layout = () => {
  const hideLeftBar = useMediaQuery({ query: "(max-width: 1367px)" });
  return (
    <div className={classes.wrapper}>
      <WindowContext.Provider value={getCurrentWindowSize()}>
        <ClickContext.Provider value={values()}>
          <SvgSprite />
          <Header />
          <Outlet />
          <Footer />
          {hideLeftBar ? <MobileBottomHeader /> : null}
        </ClickContext.Provider>
      </WindowContext.Provider>
    </div>
  );
};

export default Layout;
