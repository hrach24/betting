import React from "react";
import classes from "./LiveMatch.module.scss";
import MarkUp from "./markup/MarkUp";
import classNames from "classnames";
const LiveMatch = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        console.log(item);
        return (
          <div className={classes.liveMatchContainer} key={item.id}>
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
                    <div
                      className={classNames(classes.firstTeam, classes.team)}
                    >
                      <div className={classes.teamImgContainer}>
                        <img src={item.firstTeamLogo} alt="" />
                      </div>
                      <span className={classes.teamName}>
                        {item.firstTeamName}
                      </span>
                    </div>
                    <div
                      className={classNames(classes.secondTeam, classes.team)}
                    >
                      <div className={classes.teamImgContainer}>
                        <img src={item.secondTeamLogo} alt="" />
                      </div>
                      <span className={classes.teamName}>
                        {item.secondTeamName}
                      </span>
                    </div>
                  </div>
                  <div className={classes.matchScores}>
                    {item.scores.map((score) => {
                      return (
                        <div className={classes.score} key={score.id}>
                          <span>{score.firstTeamScore}</span>
                          <span>{score.secondTeamScore}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={classes.matchInfo}>
                <div className={classes.svgIcons}>
                  <p className={classes.setNumber}>1st Set</p>
                  <svg className={classNames(classes.matchInfoIcon)}>
                    <use xlinkHref="#youtube-168"></use>
                  </svg>
                  <svg className={classNames(classes.matchInfoIcon)}>
                    <use xlinkHref="#football-field"></use>
                  </svg>
                  <svg className={classNames(classes.matchInfoIcon)}>
                    <use xlinkHref="#diagram-bar-3-svgrepo-com"></use>
                  </svg>
                  <svg className={classNames(classes.matchInfoIcon)}>
                    <use xlinkHref="#diagram"></use>
                  </svg>
                  <svg className={classNames(classes.matchInfoIcon)}>
                    <use xlinkHref="#winner"></use>
                  </svg>
                </div>

                <div className={classes.dropDown}>
                  <svg className={classNames(classes.arrowDown)}>
                    <use xlinkHref="#arrow-down-338"></use>
                  </svg>
                </div>
              </div>
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
              <div className={classes.itemNumberContainer}>
                <p className={classes.itemNumber}>+511</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LiveMatch;
