import React from "react";
import classes from "./Home.module.scss";
import LeftAsideHeader from "../../components/layout/leftAsideHeader/LeftAsideHeader";
import RightAsideHeader from "../../components/layout/rightAsideHeader/RightAsideHeader";
import Content from "../../components/content/Content";
const Home = () => {
  return (
    <main className={classes.main}>
      <LeftAsideHeader />
      <Content />
      <RightAsideHeader />
    </main>
  );
};

export default Home;
