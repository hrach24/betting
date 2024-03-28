import React from "react";
import classes from "./SportLeague.module.scss";
import SportLeagueItem from "./sportLeagueItem/SportLeagueItem";

const SportLeague = ({ leagues }) => {
  return (
    <div className={classes.leagues}>
      <ul className={classes.leaguesList}>
        {leagues.map((item) => {
          return <SportLeagueItem key={item} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default SportLeague;
