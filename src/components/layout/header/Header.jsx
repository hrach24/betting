import React from 'react';
import classes from './Header.module.scss';
import {Link} from "react-router-dom";

import headerLogoImg from '../../../assets/images/logo.svg';
import HeaderLinks from "./headerLinks/HeaderLinks";
import HeaderLoginSection from "./headerLoginSection/HeaderLoginSection";

const Header = () => {
    return (
        <header className={classes.header}>
            <Link to={'/'} className={classes.logo}>
                <img src={headerLogoImg} alt=""/>
            </Link>
            <HeaderLinks />
            <HeaderLoginSection />

        </header>
    );
};

export default Header;