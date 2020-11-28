import React, {useEffect, useState}  from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import styles from "./App.module.css";
import { isEmpty } from "lodash";
import ContactUs from "./ContactUs/ContactUs.jsx";
import GiftItemsList from "./GiftItemsList/GiftItemsList";
import GiftItemDetail from "./GiftItemDetail/GiftItemDetail";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
/*const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};*/

function App() {

  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
        const response = await fetch( 
          "http://demo5934733.mockable.io/"
        );
        const responseJson = await response.json();
          console.log("Response",responseJson);
        setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  let displayWeddingItemsList;
  let displayKidsItemsList;
  let displayBirthdayItemsList;
  let displayGetwellItemList;
  let displayFestivalItemsList;

  let displayWeddingItemDetail;

  if(!isEmpty(fetchedData)){
    var weddingCategory = Object.values(fetchedData.wedding)
    var kidsCategory = Object.values(fetchedData.kids)
    var festivalCategory = Object.values(fetchedData.festival)
    var getwellCategory =  Object.values(fetchedData.getwell)
    var birthdayCategory =  Object.values(fetchedData.birthday)

    displayWeddingItemsList = (
      <GiftItemsList giftItemList={weddingCategory} pagetitle="Wedding & Party"/>
    )

    displayWeddingItemDetail = (
      <GiftItemDetail giftItemDetail={weddingCategory[1].id} pagetitle={weddingCategory[1].id}/>
    )


    displayKidsItemsList = (
      <GiftItemsList giftItemList={kidsCategory} pagetitle="Kids"/>
    )
    displayBirthdayItemsList = (
      <GiftItemsList giftItemList={festivalCategory} pagetitle="Holidays & Festivals"/>
    )
    displayGetwellItemList = (
      <GiftItemsList giftItemList={getwellCategory} pagetitle="Get Well Soon"/>
    )
    displayFestivalItemsList = (
      <GiftItemsList giftItemList={birthdayCategory} pagetitle="Birthday"/>
    )

  }
  else{
    displayWeddingItemsList=<div>You have no data!</div>;
  }

  return (
    <Router>
      <div className={styles.homepage}>
        <h1 align = "center" className={styles.title}>Welcome to our Home of Gifts</h1> 
        <div className={styles.container}>
          <a className={styles.menuitem} href="/"> Home </a>
          <a className={styles.menuitem} > Categories </a> 
          <a className={styles.menuitem} > About Us </a>   
          <a className={styles.menuitem} href="/ContactUs/ContactUs"> Contact Us </a>  
        </div>   
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/wedding"
          exact
          render={() => displayWeddingItemsList}
        />
        <Route
          path="/wedding/:item"
          exact
          render={() => displayWeddingItemDetail}
        />
        <Route
          path="/kids"
          exact
          render={() => displayKidsItemsList}
        />
        <Route
          path="/birthday"
          exact
          render={() => displayBirthdayItemsList}
        />
        <Route
          path="/festival"
          exact
          render={() => displayFestivalItemsList}
        />
        <Route
          path="/getwell"
          exact
          render={() => displayGetwellItemList}
        />
        <Route path="/ContactUs/ContactUs" exact component={ContactUs} />
      </Switch>
    </Router> 
  );
}

export default App;
