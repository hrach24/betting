import React from "react";
import classes from "./CurrentMatch.module.scss";
import basketBallImg from "../../../../../assets/images/basketBall.png";
import pcSvg from "../../../../../assets/images/pcSvg.png";
import starIcon from "../../../../../assets/images/starSvg.png";
import classNames from "classnames";

const CurrentMatch = ({ currentMatch }) => {
  return (
    <div className={classes.currentMatchItem}>
      {currentMatch.map((item) => {
        return (
          <>
            <div className={classes.matchCategoryTitleContainer} key={item.id}>
              <div className={classes.categoryTitleAndImg}>
                <div className={classes.imgContainer}>
                  <img src={basketBallImg} alt="" />
                </div>
                <div className={classes.matchCategoryTitle}>
                  <p>{item.matchTitle}</p>
                </div>
              </div>
              <div className={classes.categoryIcons}>
                {/*<div className={classes.iconContainer}>*/}
                {/*  {item.computerIcon ? <img src={pcSvg} alt="" /> : null}*/}
                {/*</div>*/}

                {item.computerIcon ? (
                  <div className={classes.iconContainer}>
                    {item.computerIcon ? <img src={pcSvg} alt="" /> : null}
                  </div>
                ) : null}
                {item.starIcon ? (
                  <div className={classes.iconContainer}>
                    <img src={starIcon} alt="" />
                  </div>
                ) : null}
              </div>
            </div>
            <div className={classes.teamsAndScores}>
              <div className={classes.teams}>
                <div
                  className={classNames(
                    classes.teamContainer,
                    classes.firstTeam,
                  )}
                >
                  <div className={classes.imgContainer}>
                    <img src={item.firstTeamLogo} alt="" />
                  </div>
                  <p>{item.firstTeam}</p>
                </div>
                <div
                  className={classNames(
                    classes.teamContainer,
                    classes.secondTeam,
                  )}
                >
                  <div className={classes.imgContainer}>
                    <img src={item.secondTeamLogo} alt="" />
                  </div>
                  <p>{item.secondTeam}</p>
                </div>
              </div>
              <div className={classes.scoresContainer}>
                {item.scores.map((scores) => {
                  return (
                    <span className={classes.scores} key={item.id}>
                      <span className={classes.firstTeamScore}>
                        {scores.firstTeamScore}
                      </span>
                      <span className={classes.secondTeamScore}>
                        {scores.secondTeamScore}
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
            <div className={classes.matchDescription}>
              <span>{item.matchDescription}</span>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CurrentMatch;
