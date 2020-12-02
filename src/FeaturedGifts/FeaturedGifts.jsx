import React from 'react';
import styles from "./FeaturedGifts.module.css";
import photoframe from "../images/photoframe.jpg";
import livetree from "../images/livetree.jpg";

const FeaturedGifts = () => {
    return (
        <div>
            <h1 className={styles.title}>
                Popular Today
            </h1>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.div}>
                        <img className={styles.image} src={livetree} alt=""/>
                        <a className={styles.text} href="/festival/livetree">Christmas Reindeer Live Tree</a>
                    </div>
                    <div className={styles.div}>
                        <img className={styles.image} src={photoframe} alt=""/>
                        <a className={styles.text} href="/wedding/photoholder">Couple Gifts Photo Holder</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FeaturedGifts
