import React from 'react';
import PropTypes from "prop-types";
import styles from "./GiftDetailDescription.module.css";

const GiftDetailDescription= props => {
    return (
        <div className={styles.description}>
            <p>Price: {props.detail.price}</p><br />
            <p>Status: {props.detail.status}</p><br />
            <p>Category: {props.detail.category}</p><br />
            <p>Category Name: {props.detail.categoryid}</p><br />
            <p>Short Description: {props.detail.shortDesc}</p><br />
            <p>Description: {props.detail.description}</p><br />
        </div>
    )
}

GiftDetailDescription.propTypes = {
    detail: PropTypes.object.isRequired
};

export default GiftDetailDescription;