import React from 'react';
import styles from "./FeaturedGifts.module.css";
import wedding from "../images/wedding.jpg";
import christmas from "../images/christmas.jpg";

const FeaturedGifts = () => {
    return (
        <div>
            <h1 className={styles.title}>
                Featured Gifts
            </h1>

            <div className={styles.container}>
                <div className={styles.flex}>
                    <img className={styles.image} src={christmas} alt=""/>
                    <img className={styles.image} src={wedding} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedGifts
