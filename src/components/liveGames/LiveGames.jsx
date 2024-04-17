import React from "react";
import classes from "./LiveGames.module.scss";
import LiveGameLeague from "./liveGameLeague/LiveGameLeague";
import LiveMatch from "./LiveMatch/LiveMatch";
const LiveGames = () => {
  return (
    <div className={classes.liveGamesContainer}>
      <LiveGameLeague />
      <LiveMatch />
    </div>
  );
};

export default LiveGames;
