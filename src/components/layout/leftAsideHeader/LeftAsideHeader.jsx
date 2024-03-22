import React from 'react';
import classes from "./LeftAsideHeader.module.scss";
import classNames from "classnames";

const LeftAsideFooter = () => {
    return (
        <div className={classNames(classes.leftAsideFooter,'aside')}>
            {Array.from(Array(20), (e,i) => (
                <div key={e} style={{height: '100px', marginTop: '10px'}}>sdasd {i}</div>
            ))}
        </div>
    );
};

export default LeftAsideFooter;