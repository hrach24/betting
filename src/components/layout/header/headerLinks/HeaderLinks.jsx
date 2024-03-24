import React, {useState} from 'react';
import classes from "./HeaderLink.module.scss";
import {Link} from "react-router-dom";

import arrowDownImg from '../../../../assets/images/arrowDown.png';
import classNames from "classnames";
import DropDown from "../dropdown/DropDown";
import {useMediaQuery} from "react-responsive";

const HeaderLinks = () => {
    const [sportHover, setSportHover] = useState(false);
    const showMenuLinks = useMediaQuery({query: '(max-width: 978px)'})

    return (
        <nav className={classes.navigation}>

            {
                showMenuLinks ? null
                    :
                    <ul className={classes.navigationList}>
                        <li className={classes.navigationListItem}>
                            <Link className={classNames(classes.sportLink, classes.navigationLink)} to={''}
                                  onMouseEnter={() => setSportHover(true)} onMouseLeave={() => setSportHover(false)}>
                                SPORTS
                                <img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>
                            </Link>
                            {
                                sportHover ? <DropDown/> : null
                            }
                        </li>
                        <li className={classes.navigationListItem}>
                            <Link className={classes.navigationLink} to={''}>
                                LIVE
                                <img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>
                            </Link>
                        </li>
                        <li className={classes.navigationListItem}>
                            <Link className={classes.navigationLink} to={''}>
                                1XGAMES
                                <img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>
                            </Link>
                        </li>
                        <li className={classes.navigationListItem}>
                            <Link className={classes.navigationLink} to={''}>
                                CASINO
                                <img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>
                            </Link>
                        </li>
                        <li className={classes.navigationListItem}>
                            <Link className={classes.navigationLink} to={''}>
                                LIVE CASINO
                                <img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>
                            </Link>
                        </li>
                        <li className={classes.navigationListItem}>
                            <Link className={classes.navigationLink} to={''}>
                                ESPORTS
                                <img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>
                            </Link>
                        </li>
                        <li className={classes.navigationListItem}>
                            <Link className={classes.navigationLink} to={''}>
                                PROMO
                                <img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>
                            </Link>
                        </li>
                        <li className={classes.navigationListItem}>
                            <Link className={classes.navigationLink} to={''}>
                                BINGO
                                <img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>
                            </Link>
                        </li>
                        <li className={classes.navigationListItem}>
                            <Link className={classes.navigationLink} to={''}>
                                MORE
                                <img src={arrowDownImg} alt="arrowDown" className={classes.arrowDownImg}/>
                            </Link>
                        </li>
                    </ul>
            }
        </nav>
    );
};

export default HeaderLinks;