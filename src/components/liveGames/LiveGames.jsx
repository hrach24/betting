import React from "react";
import classes from "./LiveGames.module.scss";
import LiveGameLeague from "./liveGameLeague/LiveGameLeague";
import LiveMatch from "./LiveMatch/LiveMatch";
import { LIVE_GAME } from "../../util/LiveGame";
import { getCurrentWindowSize } from "../../util/windowSizeContext";

const LiveGames = () => {
  console.log(getCurrentWindowSize);
  return (
    <div className={classes.liveGamesContainer}>
      {LIVE_GAME.map((item) => {
        return (
          <>
            <LiveGameLeague key={item.id} data={item.league} />
            <LiveMatch key={item.id} data={item.teams} />
          </>
        );
      })}
    </div>
  );
};

export default LiveGames;
