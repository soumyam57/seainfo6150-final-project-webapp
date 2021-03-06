import React from 'react'
import styles from "./Home.module.css";
import GiftCategories from "../GiftCategories/GiftCategories.jsx"
import FeaturedGifts from "../FeaturedGifts/FeaturedGifts.jsx";

const Home = () => {
    return (
        <div className={styles.homepage}>
            <GiftCategories/>
            <FeaturedGifts/>    
        </div>
    )
}

export default Home
