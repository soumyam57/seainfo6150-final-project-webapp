import React from "react";
import PropTypes from "prop-types";
import GiftItem from "../GiftItem/GiftItem.jsx";
import styles from "./GiftItemsList.module.css";
import { Link } from "react-router-dom";

const GiftItemsList = props => {

  return (
    <div className={styles.flexContainer}>
        <ul className={styles.container}>
              {props.giftItemList.map((giftItem) => (
                  <li>
                    <Link className={styles.link} to={'/'+giftItem.category+'/'+giftItem.categoryid}>
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