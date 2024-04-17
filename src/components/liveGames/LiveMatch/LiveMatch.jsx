import React from "react";
import classes from "./LiveMatch.module.scss";
import MarkUp from "./markup/MarkUp";
import classNames from "classnames";
import firstTeam from "../../../assets/images/azulClaro.png";
import secondTeam from "../../../assets/images/Consadole.webp";
const LiveMatch = () => {
  return (
    <div className={classes.liveMatchContainer}>
      <div className={classes.wrapperContainer}>
        <div className={classes.teamsAndIconContainer}>
          <div className={classes.icons}>
            <div className={classes.currentIcon}>
              <svg className={classes.svgIcon}>
                <use xlinkHref="#pin"></use>
              </svg>
            </div>
            <div className={classes.currentIcon}>
              <svg className={classNames(classes.svgIcon, classes.star)}>
                <use xlinkHref="#star-sharp"></use>
              </svg>
            </div>
          </div>
          <div className={classes.teams}>
            <div className={classes.match}>
              <div className={classNames(classes.firstTeam, classes.team)}>
                <div className={classes.teamImgContainer}>
                  <img src={firstTeam} alt="" />
                </div>
                <span className={classes.teamName}>Azul Claro Numazu</span>
              </div>
              <div className={classNames(classes.secondTeam, classes.team)}>
                <div className={classes.teamImgContainer}>
                  <img src={secondTeam} alt="" />
                </div>
                <span className={classes.teamName}>Yokohama</span>
              </div>
            </div>
            <div className={classes.matchScores}>
              <div className={classes.score}>
                <span>1</span>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.matchInfo}></div>
      </div>

      <div className={classes.leagueNameAndSportSvgLastNumbers}>
        <div className={classes.liveMatchItemNumber}>
          <MarkUp />
          <MarkUp />
          <MarkUp />
        </div>
        <div className={classes.liveMatchItemNumber}>
          <MarkUp />
          <MarkUp />
          <MarkUp />
        </div>
        <div className={classes.liveMatchItemNumber}>
          <MarkUp />
          <MarkUp />
          <MarkUp />
        </div>
        <div className={classes.itemNumberContainer}>
          <p className={classes.itemNumber}>+511</p>
        </div>
      </div>
    </div>
  );
};

export default LiveMatch;
