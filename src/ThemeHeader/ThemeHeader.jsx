import React from 'react';
import styles from "./ThemeHeader.module.css";
import "../ContactUs/ContactUs.jsx";

const ThemeHeader = () => {
    return (
        <header className={styles.flex}>
            <h1 className={styles.title}>Welcome to our Home of Gifts</h1> 
            <div className={styles.container}>
                <a className={styles.menuitem} href="/"> Home </a>
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>Category
                    </button>
                    <div class="dropdown-content">
                        <a href="/wedding">Wedding & Party</a>
                        <a href="/birthday">Holidays & Festival</a>
                        <a href="/kids">Kids</a>
                        <a href="/birthday">Birthday</a>
                        <a href="/getwell">Get well soon</a>
                </div>
                </div>
                <a className={styles.menuitem}> About Us </a>   
                <a className={styles.menuitem} href="/ContactUs/ContactUs"> Contact Us </a>  
            </div>   
      </header>
    )
}

export default ThemeHeader;

