import React from 'react';
import classes from './Content.module.scss'
const Content = () => {
    return (
        <div className={classes.content}>
            {Array.from(Array(20), (e,i) => (
                <div key={e} style={{height: '100px', marginTop: '10px'}}>sdasd {i}</div>
            ))}
        </div>
    );
}
export default Content;