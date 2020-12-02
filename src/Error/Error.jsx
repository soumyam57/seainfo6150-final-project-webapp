import React from 'react';
import styles from "./Error.module.css";

const Error = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>  
                <h1>OOPS!!!</h1>
                <h2>404</h2>
                <h4>I am sorry, the page you requested could not be found</h4>
                <a href = '/'> Go back to HomePage</a>
            </div>
        </div>
    )
}

export default Error;
