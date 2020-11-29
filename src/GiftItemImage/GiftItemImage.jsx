import React from "react";
import PropTypes from "prop-types";
import styles from "./GiftItemImage.module.css";
import GiftItemDetail from "../GiftItemDetail/GiftItemDetail";
import { Link } from "react-router-dom";

const GiftItemImage = (props) => {
  return (
    <div className={styles.flex}>
      <p className={styles.text}>{props.title}</p> 
      <img className={styles.image} 
          src={props.url} alt="">
      </img>
      <p className={styles.text}>Price: {props.price}</p> 
    </div>
    
  );
};

GiftItemImage.propTypes = {
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default GiftItemImage;