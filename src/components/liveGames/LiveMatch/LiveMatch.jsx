import React, { useContext } from "react";
import classes from "./LiveMatch.module.scss";
import MarkUp from "./markup/MarkUp";
import classNames from "classnames";
import LeftIcons from "./leftIcons/LeftIcons";
import MatchScores from "./matchScores/MatchScores";
import BottomIcons from "./buttomIcons/BottomIcons";
import { WindowContext } from "../../../util/Context";

const LiveMatch = ({ data }) => {
  const window = useContext(WindowContext);
  return (
    <>
      {data.map((item) => {
        return (
          <div className={classes.liveMatchContainer} key={item.id}>
            <div className={classes.wrapperContainer}>
              <div className={classes.teamsAndIconContainer}>
                <div className={classes.icons}>
                  {item.leftIcons.map((icon) => {
                    return <LeftIcons icon={icon} key={icon.id} />;
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
                      return <MatchScores score={score} key={score.id} />;
                    })}
                  </div>
                </div>
              </div>
              <div className={classes.matchInfo}>
                <div className={classes.svgIcons}>
                  <p className={classes.setNumber}>1st Set</p>
                  {item.bottomIcons.map((bottomIcon) => {
                    return (
                      <BottomIcons
                        bottomIcon={bottomIcon}
                        key={bottomIcon.id}
                      />
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
              {item.markUp.slice(0, window.count).map((item) => {
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
