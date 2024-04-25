import React, { useContext } from "react";
import classes from "./LiveGameLeague.module.scss";
import classNames from "classnames";
import { WindowContext } from "../../../util/windowSizeChecker";

const LiveGameLeague = ({ data }) => {
  const window = useContext(WindowContext);
  return (
    <>
      {data.map((item) => {
        return (
          <div className={classes.liveGameLeague} key={item.id}>
            <div className={classes.leagueNameAndSportSvg}>
              <div className={classes.svgContainer}>
                <svg className={classes.svgIcon}>
                  <use xlinkHref={item.leagueSvgIcon}></use>
                </svg>
              </div>
              <div className={classes.leagueName}>
                <div className={classes.imgContainer}>
                  <img src={item.leagueImg} alt="" />
                </div>
                <span className={classes.leagueText}>{item.leagueName}</span>
              </div>
            </div>
            {item.numbers.slice(0, window.count).map((numbers) => {
              return (
                <div className={classes.liveGameNumberS} key={item.id}>
                  <div className={classes.liveGameNumber}>
                    <span>{numbers.firstNumber}</span>
                  </div>
                  <div
                    className={classNames(
                      classes.liveGameNumber,
                      classes.arrowDownContainer,
                    )}
                  >
                    <div className={classes.liveGameText}>
                      {numbers.secondNumber}
                    </div>
                    <svg className={classes.arrowDown}>
                      <use xlinkHref="#arrow-down-338"></use>
                    </svg>
                  </div>
                  <div className={classes.liveGameNumber}>
                    <span>{numbers.thirdNumber}</span>
                  </div>
                </div>
              );
            })}
            <div className={classes.liveGameLastNumberContainer}>
              <p>{item.lastNumber}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LiveGameLeague;
