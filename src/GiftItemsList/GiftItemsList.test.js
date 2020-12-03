import React from "react";
import { render } from "@testing-library/react";
import GiftItemsList from "./GiftItemsList.jsx";
import { BrowserRouter } from 'react-router-dom';

const giftItem={
   "couplerings":{
      "price":"$1000",
      "title":"Couple Rings",
      "category":"wedding",
      "categoryid":"couplerings",
      "img":
      {
         "url":"https://images-na.ssl-images-amazon.com/images/I/51mfwq0NDEL._AC_UX522_.jpg",
         "height":400,
         "width":500
      }
   }
}

it("renders the home component correctly", () => {
  const { container } = render(
    <BrowserRouter>
        <GiftItemsList giftItemList={Object.values(giftItem)} pagetitle="Wedding & Party"/>
    </BrowserRouter>
    );
  expect(container).toMatchSnapshot();
});
