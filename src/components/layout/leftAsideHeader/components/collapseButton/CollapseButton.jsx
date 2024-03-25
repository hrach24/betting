import React, {useState} from 'react';
import classes from "./CollapseButton.module.scss";
const CollapseButton = ({ hideLeftSideBar }) => {
    const [clicked, updateClicked] = useState(false);
    function sendTrueToParent (prop) {
        hideLeftSideBar(prop)
        updateClicked(!clicked)
    }

    return (
        <div className={classes.collapseContainer}>
            <button className={classes.collapseButton} onClick={() => sendTrueToParent(!clicked)}> {!clicked ? '<< Collapse block' : '>>'} </button>
        </div>
    );
};

export default CollapseButton;