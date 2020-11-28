import React from 'react';
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom";
import styles from "./GiftItem.module.css";
import GiftItemImage from '../GiftItemImage/GiftItemImage';

const GiftItem = props => {
    return (
        <div className={styles.container}>
          <div className={styles.flex}>
            <GiftItemImage
                url = {props.giftItem.img.url} price={props.giftItem.price} title={props.giftItem.title}
            /> 
          </div>
        </div>
    )
}

GiftItem.propTypes = {
    giftItem: PropTypes.object.isRequired
};

export default GiftItem;
