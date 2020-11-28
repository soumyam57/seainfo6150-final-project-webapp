import React from "react";
import PropTypes from "prop-types";
import GiftItem from "../GiftItem/GiftItem.jsx";
import styles from "./GiftItemsList.module.css";
import { Link } from "react-router-dom";

const GiftItemsList = props => {

  return (
    <div className={styles.div}>
        <h1 className={styles.title}>{props.pagetitle}</h1>
        <div className={styles.container}>
              {props.giftItemList.map((giftItem) => (
                  <Link className={styles.link} to={'/'+'wedding'}>
                    <GiftItem giftItem={giftItem}/>
                  </Link>
              ))}
        </div>
    </div>
  );
};

GiftItemsList.propTypes = {
  giftItemList: PropTypes.array.isRequired,
  pagetitle: PropTypes.string.isRequired
};

export default GiftItemsList;