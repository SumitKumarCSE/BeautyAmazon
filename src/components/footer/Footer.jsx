import React from 'react';
import css from './Footer.module.css';
import Logo from '../../assets/logo.png';
import { 
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
} from "@heroicons/react/outline";

const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="" />
                    <span>amazon</span>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>

                            {/* <LocationMarkerIcon className={css.icon}/> */}
                            <span>Jalandhar , Punjab 144001</span>
                        </span>

                        <span className={css.pngLine}>
                            {" "}
                            {/* <PhoneIcon className={css.icon} /> */}
                            <a href="tel:875461254">875461254</a>
                        </span>

                        <span className={css.pngLine}>
                            {" "}
                            {/* <InboxIcon className={css.icon} /> */}
                            <a href="mailto:sumitkumar.xyz@gmail.com">Support @amazon.com</a>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            {/* <LoginIcon className={css.icon} /> */}
                            Sign In
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
