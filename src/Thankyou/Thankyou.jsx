import React from 'react';
import styles from "./Thankyou.module.css";

const Thankyou = () => {
    return (
        <div className={styles.grid}>
            <div className={styles.thankyou}>
                <h3>Your order is confirmed</h3><br />
                <h1>Thank you for shopping with me. Enjoy your day :-) </h1>
            </div>
        </div>
    )
}

export default Thankyou;