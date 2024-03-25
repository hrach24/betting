import React, {useState} from 'react';
import classes from "./HeaderLoginSection.module.scss";
import Button from "../../../ui/button/Button";
import Bonus from "../bonus/Bonus";
import {useMediaQuery} from "react-responsive";
import menuBurgerImg from '../../../../assets/images/menuBurger.png'
import {createPortal} from "react-dom";
import MobileMenu from "../mobileMenu/MobileMenu";
const HeaderLoginSection = () => {
    const menuBurgerShow = useMediaQuery({query: '(max-width: 1350px)'});
    const btnsMediaForPhoneMedia = useMediaQuery({query: '(max-width: 440px)'})
    let [openMenuBurger, updateMenuBurger] = useState(false);

    function showMobileMenu () {
        updateMenuBurger(!openMenuBurger);
    }
    return (
        <div className={classes.headerLoginSection}>
            {!menuBurgerShow ? <Bonus/> : null }
            { !btnsMediaForPhoneMedia ?
                <div className={classes.btnContainer}>
                    <Button text={'REGISTRATION'} registration={true}/>
                    <Button text={'LOG IN'} logInBtn={true}/>
                </div> : null }
            {menuBurgerShow ? <img src={menuBurgerImg} className={classes.menuBurgerImg} alt="menuBurger" onClick={showMobileMenu}/> : null}

            {menuBurgerShow && openMenuBurger
                ?
            createPortal(<MobileMenu openMenuBurger={openMenuBurger} btnsMediaForPhoneMedia={btnsMediaForPhoneMedia} />, document.body)
            : null}
        </div>
    );
};

export default HeaderLoginSection;