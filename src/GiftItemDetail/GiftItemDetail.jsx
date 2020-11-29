import React, {useEffect, useState} from 'react'
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import styles from "./GiftItemDetail.module.css"

const GiftItemDetail = (props) => {
    const [fetchedData, setFetchedData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          // put data fetching code here!
          const result = await fetch("http://demo5934733.mockable.io/");
          const resultJson = await result.json();
          setFetchedData(resultJson);
        };
    
        if (isEmpty(fetchedData)) {
          fetchData();
        }
    }, [fetchedData]);  
    
    console.log(fetchedData)

    let displayContent;
    if(!isEmpty(fetchedData)) {
        var gift = fetchedData[props.category][props.categoryid];
        console.log("display=",gift)
        displayContent = (
        <div className={styles.mainpage}>
            <h1>{props.category}</h1>
            <div>
                <p>{gift.title}</p>
                <p>Short Description: {gift.shortDesc}</p>
                <p>Price: {gift.price}</p>
                <p>Status: {gift.status}</p>
                <p>Description: {gift.description}</p>
                <img src={gift.img.url} alt=""/>
            </div>
        </div>
        )
    }
    else {
        displayContent = <div><center>Data is fetching</center></div>;
    }

    return (
        displayContent
    )
}

GiftItemDetail.propTypes = {
    category:PropTypes.string.isRequired,
    categoryid: PropTypes.string.isRequired     
};

export default GiftItemDetail;