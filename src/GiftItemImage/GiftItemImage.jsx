import React from "react";
import PropTypes from "prop-types";
import styles from "./GiftItemImage.module.css";
import GiftItemDetail from "../GiftItemDetail/GiftItemDetail";
import { Link } from "react-router-dom";

const GiftItemImage = (props) => {
  return (
    <div >
      <img className={styles.image} 
          src={props.url} alt="">
      </img>
    </div>
    
  );
};

GiftItemImage.propTypes = {
  url: PropTypes.string.isRequired,
};
export default GiftItemImage;