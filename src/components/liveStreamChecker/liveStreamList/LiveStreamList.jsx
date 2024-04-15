import React from "react";
import classes from "./LiveStream.module.scss";
import { Link } from "react-router-dom";
import ballImg from "../../../assets/images/ball.png";
import tennisImg from "../../../assets/images/tennisBall.png";
import basketBallImg from "../../../assets/images/basketBall.png";
import hockeyImg from "../../../assets/images/iceHockey.png";
import volleyBallImg from "../../../assets/images/valleyball.png";
import tableTennisImg from "../../../assets/images/tabelTennis.png";
const LiveStreamList = () => {
  return (
    <ul className={classes.liveStreamList}>
      <li className={classes.liveStreamItem}>
        <Link to={"#"} alt={"#"} className={classes.liveStreamLink}>
          <div className={classes.imgBlock}>
            <div className={classes.imgContainer}>
              <img src={ballImg} alt="" />
            </div>
          </div>

          <div className={classes.liveItemText}>Football</div>
        </Link>
      </li>
      <li className={classes.liveStreamItem}>
        <Link to={"#"} alt={"#"} className={classes.liveStreamLink}>
          <div className={classes.imgBlock}>
            <div className={classes.imgContainer}>
              <img src={tennisImg} alt="" />
            </div>
          </div>

          <div className={classes.liveItemText}>Tennis</div>
        </Link>
      </li>
      <li className={classes.liveStreamItem}>
        <Link to={"#"} alt={"#"} className={classes.liveStreamLink}>
          <div className={classes.imgBlock}>
            <div className={classes.imgContainer}>
              <img src={basketBallImg} alt="" />
            </div>
          </div>

          <div className={classes.liveItemText}>Basketball</div>
        </Link>
      </li>
      <li className={classes.liveStreamItem}>
        <Link to={"#"} alt={"#"} className={classes.liveStreamLink}>
          <div className={classes.imgBlock}>
            <div className={classes.imgContainer}>
              <img src={hockeyImg} alt="" />
            </div>
          </div>

          <div className={classes.liveItemText}>Basketball</div>
        </Link>
      </li>
      <li className={classes.liveStreamItem}>
        <Link to={"#"} alt={"#"} className={classes.liveStreamLink}>
          <div className={classes.imgBlock}>
            <div className={classes.imgContainer}>
              <img src={volleyBallImg} alt="" />
            </div>
          </div>

          <div className={classes.liveItemText}>Volleyball</div>
        </Link>
      </li>
      <li className={classes.liveStreamItem}>
        <Link to={"#"} alt={"#"} className={classes.liveStreamLink}>
          <div className={classes.imgBlock}>
            <div className={classes.imgContainer}>
              <img src={tableTennisImg} alt="" />
            </div>
          </div>

          <div className={classes.liveItemText}>Table Tennis</div>
        </Link>
      </li>
    </ul>
  );
};

export default LiveStreamList;
