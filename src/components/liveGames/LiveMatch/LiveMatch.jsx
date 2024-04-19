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
                  {item.leftIcons.map((icon) => {
                    return (
                      <div className={classes.currentIcon} key={icon.id}>
                        <svg className={classes.svgIcon}>
                          <use xlinkHref={icon.svgIcon}></use>
                        </svg>
                      </div>
                    );
                  })}
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
                  {item.bottomIcons.map((bottomIcon) => {
                    return (
                      <svg
                        className={classNames(classes.matchInfoIcon)}
                        key={bottomIcon.id}
                      >
                        <use xlinkHref={bottomIcon.svgIcon}></use>
                      </svg>
                    );
                  })}
                </div>
                <div className={classes.dropDown}>
                  <svg className={classNames(classes.arrowDown)}>
                    <use xlinkHref="#arrow-down-338"></use>
                  </svg>
                </div>
              </div>
            </div>

            <div className={classes.leagueNameAndSportSvgLastNumbers}>
              {item.markUp.map((item) => {
                return (
                  <div className={classes.liveMatchItemNumber} key={item.id}>
                    {item.map((markUpItem) => {
                      return <MarkUp data={markUpItem} key={item.id} />;
                    })}
                  </div>
                );
              })}
              <div className={classes.itemNumberContainer}>
                <p className={classes.itemNumber}>{item.teamLastNumber}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LiveMatch;
