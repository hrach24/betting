import React, {useState} from 'react';
import classes from "./LeftAsideHeader.module.scss";
import classNames from "classnames";
import CollapseButton from "./components/collapseButton/CollapseButton";
import LiveAndSupport from "./components/liveAndSportSection/LiveAndSupport";

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
            {
                showLeftBar ? <div className={classes.mobileLiveDot}>
                    <div className={classes.greenMobileLiveDot}></div>
                    </div> : <LiveAndSupport />
            }
        </div>
    );
}
export default LeftAsideFooter;