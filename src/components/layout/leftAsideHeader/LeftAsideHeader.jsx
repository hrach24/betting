import React, {useState} from 'react';
import classes from "./LeftAsideHeader.module.scss";
import classNames from "classnames";
import CollapseButton from "./components/collapseButton/CollapseButton";

const LeftAsideFooter = () => {
    const [showLeftBar, updateTheProp] = useState(false);
    function hideLeftBar(data) {
        updateTheProp(data);
    }

    return (
        <div className={classNames(classes.leftAsideFooter,'aside', {
            [classes.minimizeLeftBar]: showLeftBar
        })}>
           <CollapseButton hideLeftSideBar={hideLeftBar}/>
        </div>
    );
};

export default LeftAsideFooter;