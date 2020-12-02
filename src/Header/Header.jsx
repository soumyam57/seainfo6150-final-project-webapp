import React from 'react';
import styles from "./Header.module.css";
import "../ContactUs/ContactUs.jsx";

const Header = () => {
    return (
        <header className={styles.flex}>
            <h1 className={styles.title}>Home of Gifts</h1> 
            <nav className={styles.container}>
                <a className={styles.menuitem} href="/"> Home </a>
                <div className={styles.dropdown}>
                    <button className={styles.dropbutton}>Category
                    </button>
                    <div className={styles.item}>
                        <a className={styles.li} href="/wedding">Wedding & Party</a>
                        <a className={styles.li} href="/festival">Holidays & Festival</a>
                        <a className={styles.li} href="/kids">Kids</a>
                        <a className={styles.li} href="/birthday">Birthday</a>
                        <a className={styles.li} href="/getwell">Get well soon</a>
                    </div>
                </div>
                <a className={styles.menuitem} href="/aboutme"> About Me </a>  
                <a className={styles.menuitem} href="/feedback"> Feedback </a>  
            </nav>   
      </header>
    )
}

export default Header;


/*
<ul className={styles.item}>
                        <li><a className={styles.li} href="/wedding">Wedding & Party</a></li>
                        <li><a className={styles.li} href="/festival">Holidays & Festival</a></li>
                        <li><a className={styles.li} href="/kids">Kids</a></li>
                        <li><a className={styles.li} href="/birthday">Birthday</a></li>
                        <li><a className={styles.li} href="/getwell">Get well soon</a></li>
                    </ul>*/

