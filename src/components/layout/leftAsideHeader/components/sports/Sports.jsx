import React from 'react';
import classes from "./Sports.module.scss";
import blackArrowDownImg from '../../../../../assets/images/blackArrowDown.png';
import ballImg from '../../../../../assets/images/ball.png';
import tennisBallImg from '../../../../../assets/images/tennisBall.png';
import basketBallImg from '../../../../../assets/images/basketBall.png';
import iceHockeyImg from '../../../../../assets/images/iceHockey.png';
import valleyBallImg from '../../../../../assets/images/valleyball.png';
import tabelTennis from '../../../../../assets/images/tabelTennis.png'
const Sports = () => {
    return (
        <div className={classes.sports}>
              <ul className={classes.sportsList}>
                  <li className={classes.sportItem}>
                      <div className={classes.sportItemInfo}>
                          <div className={classes.sportItemImg}>
                              <img src={ballImg} alt=""/>
                          </div>
                          <span className={classes.sportItemTitle}>Football</span>
                          <span className={classes.sportItemCount}>(49)</span>
                      </div>
                      <div className={classes.dropDownButton}>
                          <img src={blackArrowDownImg} alt=""/>
                      </div>
                  </li>
                  <li className={classes.sportItem}>
                      <div className={classes.sportItemInfo}>
                          <div className={classes.sportItemImg}>
                              <img src={tennisBallImg} alt=""/>
                          </div>
                          <span className={classes.sportItemTitle}>Tennis</span>
                          <span className={classes.sportItemCount}>(58)</span>
                      </div>
                      <div className={classes.dropDownButton}>
                          <img src={blackArrowDownImg} alt=""/>
                      </div>
                  </li>
                  <li className={classes.sportItem}>
                      <div className={classes.sportItemInfo}>
                          <div className={classes.sportItemImg}>
                              <img src={basketBallImg} alt=""/>
                          </div>
                          <span className={classes.sportItemTitle}>Basketball</span>
                          <span className={classes.sportItemCount}>(35)</span>
                      </div>
                      <div className={classes.dropDownButton}>
                          <img src={blackArrowDownImg} alt=""/>
                      </div>
                  </li>
                  <li className={classes.sportItem}>
                      <div className={classes.sportItemInfo}>
                          <div className={classes.sportItemImg}>
                              <img src={iceHockeyImg} alt=""/>
                          </div>
                          <span className={classes.sportItemTitle}>Ice Hockey</span>
                          <span className={classes.sportItemCount}>(14)</span>
                      </div>
                      <div className={classes.dropDownButton}>
                          <img src={blackArrowDownImg} alt=""/>
                      </div>
                  </li>
                  <li className={classes.sportItem}>
                      <div className={classes.sportItemInfo}>
                          <div className={classes.sportItemImg}>
                              <img src={valleyBallImg} alt=""/>
                          </div>
                          <span className={classes.sportItemTitle}>VolleyBall</span>
                          <span className={classes.sportItemCount}>(67)</span>
                      </div>
                      <div className={classes.dropDownButton}>
                          <img src={blackArrowDownImg} alt=""/>
                      </div>
                  </li>
                  <li className={classes.sportItem}>
                      <div className={classes.sportItemInfo}>
                          <div className={classes.sportItemImg}>
                              <img src={tabelTennis} alt=""/>
                          </div>
                          <span className={classes.sportItemTitle}>Table Tennis</span>
                          <span className={classes.sportItemCount}>(18)</span>
                      </div>
                      <div className={classes.dropDownButton}>
                          <img src={blackArrowDownImg} alt=""/>
                      </div>
                  </li>
              </ul>
        </div>
    );
};

export default Sports;