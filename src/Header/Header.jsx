import React from 'react';
import styles from "./Header.module.css";
import ContactUs from "../ContactUs/ContactUs";

const Header = () => {
    return (
        <div className={styles.footer}>
            {/*<a href="Home/Home" className={styles.link}> MyGiftHome </a>*/}
            <a href="ContactUs/ContactUs" className={styles.link}>Contact Us</a>  
      </div>
    )
}

export default Header;
