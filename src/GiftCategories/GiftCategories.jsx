import React, { useEffect, useState } from 'react';
import wedding from "../images/wedding.jpg";
import christmas from "../images/christmas.jpg";
import dolls from "../images/dolls.jpg";
import Birthday from "../images/Birthday.jpg";
import getwell from "../images/getwell.jpg";
import styles from "./GiftCategories.module.css";
import { Link } from "react-router-dom";

//http://demo5934733.mockable.io/

const GiftCategories = () => {
    return(
            <div className={styles.container}>
                <div className={styles.flex}>
                    <img className={styles.image} src={wedding} alt=""/>
                    <p className={styles.text}>   
                        <Link className={styles.text} to='/wedding'>
                            Wedding & Party
                        </Link>
                    </p> 
                </div>

                <div className={styles.flex}>
                    <img className={styles.image} src={christmas} alt=""/>
                    <p className={styles.text}>
                        <Link className={styles.text} to='/festival'>
                            Holidays & Festival
                        </Link>
                    </p>
                    
                </div>
                
                <div className={styles.flex}>
                    <img className={styles.image} src={dolls} alt="" />
                    <p className={styles.text}> 
                        <Link className={styles.text} to='/kids'>
                            Kids
                        </Link>
                    </p>
                </div>

                <div className={styles.flex}>
                    <img className={styles.image} src={Birthday} alt="" />
                    <p className={styles.text}> 
                        <Link className={styles.text} to='/birthday'>
                            Birthday
                        </Link>
                    </p>
                </div>

                <div className={styles.flex}>
                    <img className={styles.image} src={getwell} alt=""/>  
                    <p className={styles.text}>
                        <Link className={styles.text} to='/getwell'>
                            Get Well Soon
                        </Link>
                    </p>
                </div>
        </div>
    )
}


export default GiftCategories;


/*



    */
