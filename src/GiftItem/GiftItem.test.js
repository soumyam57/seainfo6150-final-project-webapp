import React from "react";
import { render } from "@testing-library/react";
import GiftItem from "./GiftItem.jsx";

const giftItem = {
    title: "Couple Rings",
    img:
      {
         "url":"https://images-na.ssl-images-amazon.com/images/I/51mfwq0NDEL._AC_UX522_.jpg",
         "height":400,
         "width":500
      },
    price: "$1000"
}

it("renders the home component correctly", () => {
  const { container } = render(
    <GiftItem
        giftItem={giftItem}
    />
    );
  expect(container).toMatchSnapshot();
});
