import React from "react";
import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <ul className={classes.list}>
          <li className={classes.listTitle}>
            <span className={classes.listTitleText}>1XBET</span>
            <ul className={classes.titleList}>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  About us
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Terms and Conditions
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Affiliate Program
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  B2B
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Become an agent
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Privacy Policy
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Cookie Policy
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Contacts
                </Link>
              </li>
            </ul>
          </li>

          <li className={classes.listTitle}>
            <span className={classes.listTitleText}>BETTING</span>
            <ul className={classes.titleList}>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Sprots
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Multi Live
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Live
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  B2B
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Toto
                </Link>
              </li>
            </ul>
          </li>
          <li className={classes.listTitle}>
            <span className={classes.listTitleText}>GAMES</span>
            <ul className={classes.titleList}>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Casino
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  1xGames
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Live Casino
                </Link>
              </li>
            </ul>
          </li>

          <li className={classes.listTitle}>
            <span>STATISTICS</span>
            <ul className={classes.titleList}>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Statistics
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Results
                </Link>
              </li>
            </ul>
          </li>

          <li className={classes.listTitle}>
            <span>USEFUL LINKS</span>
            <ul className={classes.titleList}>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Payment methods
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Mobile version
                </Link>
              </li>
              <li className={classes.titleListItem}>
                <Link to={"#"} className={classes.titleListLink}>
                  Registration
                </Link>
              </li>
            </ul>
          </li>

          <li className={classes.listTitle}>
            <span>APPS</span>
            <ul className={classes.titleList}>
              <li className={classes.iconItem}>
                <span className={classes.svgAndTextHolder}>
                  <svg className={classes.svgIcon}>
                    <use xlinkHref="#apple"></use>
                  </svg>
                  <span className={classes.svgIconText}>IOS</span>
                </span>
              </li>
              <li className={classes.iconItem}>
                <span className={classes.svgAndTextHolder}>
                  <svg className={classes.svgIcon}>
                    <use xlinkHref="#android"></use>
                  </svg>
                  <span className={classes.svgIconText}>Android</span>
                </span>
              </li>
              <li className={classes.iconItem}>
                <span className={classes.svgAndTextHolder}>
                  <svg className={classes.svgIcon}>
                    <use xlinkHref="#squares-four-fill">Other apps</use>
                  </svg>
                  <span className={classes.svgIconText}>IOS</span>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
