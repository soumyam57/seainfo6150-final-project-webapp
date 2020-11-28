import React from 'react';
import PropTypes from "prop-types";

const GiftItemDetail = props => {
    return (
        console.log("displaying inside details",props.weddingItemDetail),
        <div>
          <p>{props.giftItemDetail.id}</p>
          <p>{props.giftItemDetail.description}</p>
          <p>{props.giftItemDetail.status}</p>
        </div>
    )
}

GiftItemDetail.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};

export default GiftItemDetail;