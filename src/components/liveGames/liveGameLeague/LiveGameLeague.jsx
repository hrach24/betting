import React from "react";
import classes from "./LiveGameLeague.module.scss";
import japanImg from "../../../assets/images/japan.png";
import classNames from "classnames";

const LiveGameLeague = () => {
  return (
    <div className={classes.liveGameLeague}>
      <div className={classes.leagueNameAndSportSvg}>
        <div className={classes.svgContainer}>
          <svg className={classes.svgIcon}>
            <use xlinkHref="#ball-football"></use>
          </svg>
        </div>
        <div className={classes.leagueName}>
          <div className={classes.imgContainer}>
            <img src={japanImg} alt="" />
          </div>
          <span className={classes.leagueText}>Japan. Nabisco Cup</span>
        </div>
      </div>
      <div className={classes.liveGameNumberS}>
        <div className={classes.liveGameNumber}>
          <span>1</span>
        </div>
        <div
          className={classNames(
            classes.liveGameNumber,
            classes.arrowDownContainer,
          )}
        >
          <div className={classes.liveGameText}>X</div>
          <svg className={classes.arrowDown}>
            <use xlinkHref="#arrow-down-338"></use>
          </svg>
        </div>
        <div className={classes.liveGameNumber}>
          <span>1</span>
        </div>
      </div>
      <div className={classes.liveGameNumberS}>
        <div className={classes.liveGameNumber}>
          <span>1</span>
        </div>
        <div
          className={classNames(
            classes.liveGameNumber,
            classes.arrowDownContainer,
          )}
        >
          <div className={classes.liveGameText}>X</div>
          <svg className={classes.arrowDown}>
            <use xlinkHref="#arrow-down-338"></use>
          </svg>
        </div>
        <div className={classes.liveGameNumber}>
          <span>1</span>
        </div>
      </div>
      <div className={classes.liveGameNumberS}>
        <div className={classes.liveGameNumber}>
          <span>1</span>
        </div>
        <div
          className={classNames(
            classes.liveGameNumber,
            classes.arrowDownContainer,
          )}
        >
          <div className={classes.liveGameText}>X</div>
          <svg className={classes.arrowDown}>
            <use xlinkHref="#arrow-down-338"></use>
          </svg>
        </div>
        <div className={classes.liveGameNumber}>
          <span>1</span>
        </div>
      </div>
      <div className={classes.liveGameLastNumberContainer}>
        <p>+5</p>
      </div>
    </div>
  );
};

export default LiveGameLeague;
