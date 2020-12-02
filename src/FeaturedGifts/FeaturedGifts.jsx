import React from 'react';
import styles from "./FeaturedGifts.module.css";
import photoframe from "../images/photoframe.jpg";
import livetree from "../images/livetree.jpg";
import { Link } from "react-router-dom";

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
                        <Link className={styles.text} to="/festival/livetree">Christmas Reindeer Live Tree</Link>
                    </div>
                    <div className={styles.div}>
                        <img className={styles.image} src={photoframe} alt=""/>
                        <Link className={styles.text} href="/wedding/photoholder">Couple Gifts Photo Holder</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FeaturedGifts
