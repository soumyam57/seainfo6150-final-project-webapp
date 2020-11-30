import React, {useEffect, useState} from 'react'
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import styles from "./GiftItemDetail.module.css";
import Form from '../Form/Form';
import GiftDetailCoverImage from '../GiftDetailCoverImage/GiftDetailCoverImage.jsx';
import GiftDetailDescription from '../GiftDetailDescription/GiftDetailDescription.jsx'
 
//<img src={gift.img.url} alt=""/>

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
            <h1 className={styles.text}>{gift.title}</h1>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.flexitems}>
                        <GiftDetailCoverImage url={gift.img.url}/>
                    </div>
                    <div className={styles.flexitems}>
                        <GiftDetailDescription detail={gift}/>
                    </div>
                </div>
            </div>
            <div className={styles.gap}></div>
            <div className={styles.form}>
                <h2 className={styles.text}>Ready to place your order? 
                Please provide your shipping details below</h2>
                <Form className={styles.formdetails}/>
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