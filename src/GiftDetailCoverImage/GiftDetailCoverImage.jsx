import React from 'react';
import PropTypes from "prop-types";
import styles from "./GiftDetailCoverImage.module.css";

const GiftDetailCoverImage = props => {
    return (
        <img className={styles.image} src={props.url} alt=""/>
    )
}

GiftDetailCoverImage.propTypes = {
    url: PropTypes.string.isRequired,
};

export default GiftDetailCoverImage;
