import React from 'react';
import styles from "./Header.module.css";
import "../ContactUs/ContactUs.jsx";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.flex}>
            <h1 className={styles.title}>Home of Gifts</h1> 
            <nav className={styles.container}>
                <Link className={styles.menuitem} to="/"> Home </Link>
                <div className={styles.dropdown}>
                    <button className={styles.dropbutton}>Category
                    </button>
                    <div className={styles.item}>
                        <Link className={styles.li} to="/wedding">Wedding & Party</Link>
                        <Link className={styles.li} to="/festival">Holidays & Festival</Link>
                        <Link className={styles.li} to="/kids">Kids</Link>
                        <Link className={styles.li} to="/birthday">Birthday</Link>
                        <Link className={styles.li} to="/getwell">Get well soon</Link>
                    </div>
                </div>
                <Link className={styles.menuitem} to="/aboutme">About Me</Link>
                <Link className={styles.menuitem} to="/feedback">Feedback</Link>
            </nav>   
      </header>
    )
}

export default Header;


