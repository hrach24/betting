import React from "react";
import classes from "./Sports.module.scss";
import { sportsList } from "../../../../../util/sportsList";
import SportsLists from "../sportsLists/SportsLists";

const Sports = () => {
  return (
    <div className={classes.sports}>
      <ul className={classes.sportsList}>
        {sportsList.map((item) => (
          <SportsLists
            key={item.title}
            title={item.title}
            count={item.count}
            img={item.img}
            leagues={item.league}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sports;
