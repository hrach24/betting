import React from "react";
import classes from "./SportLeague.module.scss";
// import australFlagImg from "../../../../../assets/images/auImg.png";
import blackArrowDownImg from "../../../../../assets/images/blackArrowDown.png";

const SportLeague = ({ leagues }) => {
  return (
    <div className={classes.leagues}>
      <ul className={classes.leaguesList}>
        {leagues.map((item) => {
          return (
            <li key={item.title} className={classes.leagueListItem}>
              <div className={classes.leagueItemContainer}>
                <div className={classes.leagueItemInfo}>
                  <div className={classes.leagueItemImgContainer}>
                    <img src={item.img} alt="" className={classes.leagueItemImg} />
                  </div>
                  <span className={classes.leagueItemTitle}>{item.title}</span>
                  <span className={classes.leagueItemCount}>{item.count}</span>
                </div>
                <div className={classes.leagueArrowContainer}>
                  <img src={blackArrowDownImg} alt="" />
                </div>
              </div>
            </li>
          );
        })}

        {/*<li className={classes.leagueListItem}>*/}
        {/*    <div className={classes.leagueItemContainer}>*/}
        {/*        <div className={classes.leagueItemInfo}>*/}
        {/*            <div className={classes.leagueItemImgContainer}>*/}
        {/*                <img src={japanImg} alt="" className={classes.leagueItemImg}/>*/}
        {/*            </div>*/}
        {/*            <span className={classes.leagueItemTitle}>Japan</span>*/}
        {/*            <span className={classes.leagueItemCount}>(3)</span>*/}
        {/*        </div>*/}
        {/*        <div className={classes.leagueArrowContainer}>*/}
        {/*            <img src={blackArrowDownImg} alt=""/>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</li>*/}
        {/*<li className={classes.leagueListItem}>*/}
        {/*    <div className={classes.leagueItemContainer}>*/}
        {/*        <div className={classes.leagueItemInfo}>*/}
        {/*            <div className={classes.leagueItemImgContainer}>*/}
        {/*                <img src={georgiaFlag} alt="" className={classes.leagueItemImg}/>*/}
        {/*            </div>*/}
        {/*            <span className={classes.leagueItemTitle}>Georgia. Superliga</span>*/}
        {/*            <span className={classes.leagueItemCount}>(3)</span>*/}
        {/*        </div>*/}
        {/*        <div className={classes.leagueArrowContainer}>*/}
        {/*            <img src={blackArrowDownImg} alt=""/>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</li>*/}
      </ul>
    </div>
  );
};

export default SportLeague;
