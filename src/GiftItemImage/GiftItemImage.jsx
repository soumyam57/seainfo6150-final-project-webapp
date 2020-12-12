import React from "react";
import PropTypes from "prop-types";
import styles from "./GiftItemImage.module.css";

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