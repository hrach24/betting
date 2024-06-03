import React, { useEffect } from "react";
import classes from "./Home.module.scss";
import LeftAsideHeader from "../../components/layout/leftAsideHeader/LeftAsideHeader";
import RightAsideHeader from "../../components/layout/rightAsideHeader/RightAsideHeader";
import Content from "../../components/content/Content";
import { useMediaQuery } from "react-responsive";
import { ClickContext } from "../../util/Context";
import { values } from "../../util/ContextFunctions";
import axios from "axios";
const Home = () => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
