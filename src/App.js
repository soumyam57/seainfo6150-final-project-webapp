import React, {useEffect, useState}  from "react";
import {Switch, Route, HashRouter } from "react-router-dom";
import Home from './Home/Home';
import styles from "./App.module.css";
import { isEmpty } from "lodash";
import Feedback from "./Feedback/Feedback.jsx";
import Aboutme from "./Aboutme/Aboutme.jsx";
import GiftItemsList from "./GiftItemsList/GiftItemsList";
import GiftItemDetail from "./GiftItemDetail/GiftItemDetail";
import Header from "./Header/Header.jsx";
import Thankyou from "./Thankyou/Thankyou.jsx";
import Error from "./Error/Error.jsx";
import Footer from "./Footer/Footer.jsx";

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
          "https://demo5934733.mockable.io/"
        );
        const responseJson = await response.json();
          //console.log("Response",responseJson);
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

  if(!isEmpty(fetchedData)){
    var weddingCategory = Object.values(fetchedData.wedding)
    var kidsCategory = Object.values(fetchedData.kids)
    var festivalCategory = Object.values(fetchedData.festival)
    var getwellCategory =  Object.values(fetchedData.getwell)
    var birthdayCategory =  Object.values(fetchedData.birthday)

    displayWeddingItemsList = (
      <GiftItemsList giftItemList={weddingCategory} pagetitle="Wedding & Party"/>      
    )
    displayKidsItemsList = (
      <GiftItemsList giftItemList={kidsCategory} pagetitle="Kids"/>
    )
    displayBirthdayItemsList = (
      <GiftItemsList giftItemList={birthdayCategory} pagetitle="Birthday"/>
    )
    displayGetwellItemList = (
      <GiftItemsList giftItemList={getwellCategory} pagetitle="Get Well Soon"/>
    )
    displayFestivalItemsList = (
      <GiftItemsList giftItemList={festivalCategory} pagetitle="Holidays & Festivals"/>
    )

  }
  else{
    displayWeddingItemsList=<div>Data is fetching!</div>;
  }

  return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/wedding"
          exact
          render={() => displayWeddingItemsList}
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
        <Route
          path="/:category/:categoryid"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <GiftItemDetail className={styles.homepage}
              categoryid={match.params.categoryid}
              category={match.params.category}
            />
          )}
        />
        <Route path="/aboutme" exact component={Aboutme} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/thankyou" exact component={Thankyou} />
        <Route component={Error} />
      </Switch>
      <Footer/>
      </HashRouter> 
  );
}

export default App;
