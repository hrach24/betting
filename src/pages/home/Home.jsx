import React from "react";
import classes from "./Home.module.scss";
import LeftAsideHeader from "../../components/layout/leftAsideHeader/LeftAsideHeader";
import RightAsideHeader from "../../components/layout/rightAsideHeader/RightAsideHeader";
import Content from "../../components/content/Content";
import { useMediaQuery } from "react-responsive";
import { ClickContext } from "../../util/Context";
import { handleClick } from "../../util/ContextFunctions";
const Home = () => {
  const hideLeftBar = useMediaQuery({ query: "(max-width: 1367px)" });
  const { cureBollen, setBool } = handleClick();
  return (
    <main className={classes.main}>
      {hideLeftBar ? null : <LeftAsideHeader />}
      <Content />
      <ClickContext.Provider value={{ cureBollen, setBool }}>
        {hideLeftBar ? null : <RightAsideHeader />}
      </ClickContext.Provider>
    </main>
  );
};

export default Home;
