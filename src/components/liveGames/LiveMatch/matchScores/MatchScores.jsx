import React from "react";
import classes from "./MatchScores.module.scss";
const MatchScores = ({ score }) => {
  return (
    <div className={classes.score}>
      <span>{score.firstTeamScore}</span>
      <span>{score.secondTeamScore}</span>
    </div>
  );
};

export default MatchScores;
