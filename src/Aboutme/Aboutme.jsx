import React from 'react';
import styles from "./Aboutme.module.css";
import sm from "../images/sm.jpg";
import { Link } from "react-router-dom";

const Aboutme = () => {
    return (
        <div className={styles.flex}>
            <div className={styles.grid}>
                <img className={styles.image} src={sm} alt=""/>
                <div className={styles.div}>
                    <h1>About Me</h1><br /><br />
                    <p>I am Soumya and I am delighted to meet you today</p><br />
                    <p>I hope you liked my website. This website was built using React, Javascript, HTML and CSS.
                        This is Web Design project and the course is instructed by Prof. April Bingham and Teaching Assistant Xinxin
                    </p><br />
                    <p>I would love to know your experience visiting my webiste. Click <Link className={styles.text} to="/feedback">here</Link> to provide your feedback</p><br /><br />
                    <h1>Have Questions?</h1><br />
                    <p>You can reach me at 123-456-7890</p><br /><br />
                    <h2>Thank you for stopping by, have a great day</h2><br />
                </div>
            </div>
        </div>
    )
}

export default Aboutme;