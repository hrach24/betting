import React, {useState} from 'react';
import classes from "./HeaderLink.module.scss";
import {Link} from "react-router-dom";

import arrowDownImg from '../../../../assets/images/arrowDown.png';
import classNames from "classnames";
import DropDown from "../dropdown/DropDown";
import { useMediaQuery } from "react-responsive";

const HeaderLinks = () => {
    const [sportHover, setSportHover] = useState(false);
    const isTablet = useMediaQuery({query: '(max-width: 1350px)'});

    return (
        <nav className={classes.navigation}>
            <ul className={classNames(classes.navigationList)}>
                <li className={classes.navigationListItem}>
                    <Link className={classNames(classes.navigationLink, {
                        [classes.desktopViewNavigationLink]: !isTablet,
                        [classes.tabletViewNavigationLink]: isTablet
                    })} to={''}
                          onMouseEnter={() => !isTablet ? setSportHover(true) : null} onMouseLeave={() => setSportHover(false)} onClick={() => setSportHover(!sportHover)}>
                        SPORTS
                        <img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>
                    </Link>
                    {
                        sportHover ? <DropDown setSportHover={setSportHover}/> : null
                    }
                </li>
                <li className={classes.navigationListItem}>
                    <Link className={classNames(classes.navigationLink, {
                        [classes.desktopViewNavigationLink]: !isTablet,
                        [classes.tabletViewNavigationLink]: isTablet
                    })} to={''}>
                        LIVE
                        {/*<img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>*/}
                    </Link>
                </li>
                <li className={classes.navigationListItem}>
                    <Link className={classNames(classes.navigationLink, {
                        [classes.desktopViewNavigationLink]: !isTablet,
                        [classes.tabletViewNavigationLink]: isTablet
                    })} to={''}>
                        1XGAMES
                        {/*<img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>*/}
                    </Link>
                </li>
                <li className={classes.navigationListItem}>
                    <Link className={classNames(classes.navigationLink, {
                        [classes.desktopViewNavigationLink]: !isTablet,
                        [classes.tabletViewNavigationLink]: isTablet
                    })} to={''}>
                        CASINO
                        {/*<img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>*/}
                    </Link>
                </li>
                <li className={classes.navigationListItem}>
                    <Link className={classNames(classes.navigationLink, {
                        [classes.desktopViewNavigationLink]: !isTablet,
                        [classes.tabletViewNavigationLink]: isTablet
                    })} to={''}>
                        LIVE CASINO
                        {/*<img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>*/}
                    </Link>
                </li>
                <li className={classes.navigationListItem}>
                    <Link className={classNames(classes.navigationLink, {
                        [classes.desktopViewNavigationLink]: !isTablet,
                        [classes.tabletViewNavigationLink]: isTablet
                    })} to={''}>
                        ESPORTS
                        {/*<img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>*/}
                    </Link>
                </li>
                <li className={classes.navigationListItem}>
                    <Link className={classNames(classes.navigationLink, {
                        [classes.desktopViewNavigationLink]: !isTablet,
                        [classes.tabletViewNavigationLink]: isTablet
                    })} to={''}>
                        PROMO
                        {/*<img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>*/}
                    </Link>
                </li>
                <li className={classes.navigationListItem}>
                    <Link className={classNames(classes.navigationLink, {
                        [classes.desktopViewNavigationLink]: !isTablet,
                        [classes.tabletViewNavigationLink]: isTablet
                    })} to={''}>
                        BINGO
                        {/*<img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>*/}
                    </Link>
                </li>
                <li className={classes.navigationListItem}>
                    <Link className={classNames(classes.navigationLink, {
                        [classes.desktopViewNavigationLink]: !isTablet,
                        [classes.tabletViewNavigationLink]: isTablet
                    })} to={''}>
                        MORE
                        {/*<img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>*/}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderLinks;