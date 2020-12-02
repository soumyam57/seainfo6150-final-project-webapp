import React from 'react';
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom";
import styles from "./GiftItem.module.css";
import GiftItemImage from '../GiftItemImage/GiftItemImage';

const GiftItem = props => {
    return (
      <div className={styles.giftItem}>
        <p  className={styles.text}>{props.giftItem.title}</p>
        <GiftItemImage url = {props.giftItem.img.url} /> 
        <p className={styles.text}>Price: {props.giftItem.price}</p>
      </div>
    )
}

GiftItem.propTypes = {
    giftItem: PropTypes.object.isRequired
};

export default GiftItem;



/*
<giftItem className={styles.giftItem}>
           <div className={styles.wrapper}>
             <p>Price: {props.giftItem.price}</p>
            <GiftItemImage
                url = {props.giftItem.img.url}  
            /> 
            <p>{props.giftItem.title}</p>
          </div>
        </giftItem>*/
