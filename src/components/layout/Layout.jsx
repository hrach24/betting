import React from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {Outlet} from "react-router-dom";
import classes from './Layout.module.scss'
const Layout = () => {
    return (
            <div className={classes.wrapper}>
                <Header />
                <Outlet />
                <Footer />
            </div>


    );
};

export default Layout;