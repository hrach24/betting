import React from "react";
import classes from "./Home.module.scss";
import LeftAsideHeader from "../../components/layout/leftAsideHeader/LeftAsideHeader";
import RightAsideHeader from "../../components/layout/rightAsideHeader/RightAsideHeader";
import Content from "../../components/content/Content";
import { useMediaQuery } from "react-responsive";
import { ClickContext } from "../../util/Context";
import { values } from "../../util/ContextFunctions";

const Home = () => {
  const hideLeftBar = useMediaQuery({ query: "(max-width: 1367px)" });
  return (
    <main className={classes.main}>
      <ClickContext.Provider value={values()}>
        {hideLeftBar ? null : <LeftAsideHeader />}
        <Content />
        {hideLeftBar ? null : <RightAsideHeader />}
      </ClickContext.Provider>
    </main>
  );
};

export default Home;
