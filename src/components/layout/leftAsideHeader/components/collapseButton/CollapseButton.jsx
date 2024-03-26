import React from 'react';
import classes from "./CollapseButton.module.scss";

const CollapseButton = ({ updateTheProp, showLeftBar }) => {

    return (
        <div className={classes.collapseContainer}>
            <button className={classes.collapseButton} onClick={() => updateTheProp(prevState => !prevState)}> {!showLeftBar ? '<< Collapse block' : '>>'} </button>
        </div>
    );
};

export default CollapseButton;