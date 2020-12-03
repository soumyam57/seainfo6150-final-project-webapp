import React from "react";
import PropTypes from "prop-types";
import GiftItem from "../GiftItem/GiftItem.jsx";
import styles from "./GiftItemsList.module.css";
import { Link } from "react-router-dom";

const GiftItemsList = props => {

  return (
    <div className={styles.flexContainer}>
      <h1 className={styles.title}>{props.pagetitle}</h1>
      <ul className={styles.container}>
            {props.giftItemList.map((giftItem,index) => (
                <li key={index}>
                  <Link  key={index} className={styles.link} to={'/'+giftItem.category+'/'+giftItem.categoryid}>
                    <GiftItem giftItem={giftItem}/>
                  </Link>
                </li>
            ))}
      </ul>
    </div>
  );
};

GiftItemsList.propTypes = {
  giftItemList: PropTypes.array.isRequired,
  pagetitle: PropTypes.string.isRequired
};

export default GiftItemsList;