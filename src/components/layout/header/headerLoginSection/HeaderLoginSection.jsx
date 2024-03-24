import React, {useState} from 'react';
import classes from "./HeaderLoginSection.module.scss";
import Button from "../../../ui/button/Button";
import Bonus from "../bonus/Bonus";
import {useMediaQuery} from "react-responsive";
import menuBurgerImg from '../../../../assets/images/menuBurger.png'
import classNames from "classnames";
const HeaderLoginSection = () => {
    const menuBurgerShow = useMediaQuery({query: '(max-width: 1259px)'});
    const [openMenuBurger, updateMenuBurger] = useState(false)
    return (
        <div className={classes.headerLoginSection}>
            {menuBurgerShow ? <img src={menuBurgerImg} className={classes.menuBurgerImg} alt="" onClick={() => updateMenuBurger(true)}/> :
                <>
                    <Bonus/>
                    <div className={classes.btnContainer}>
                        <Button text={'REGISTRATION'} registration={true}/>
                        <Button text={'LOG IN'} logInBtn={true}/>
                    </div>

                </>
            }

            {openMenuBurger ? <div className={classNames(classes.mobileMenu, {
                [classes.open]:openMenuBurger
            })}>

            </div> : null}

        </div>
    );
};

export default HeaderLoginSection;