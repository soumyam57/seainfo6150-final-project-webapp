import React from "react";
import { render } from "@testing-library/react";
import GiftItemImage from "./GiftItemImage.jsx";

it("renders the BooksListItemImage component correctly", () => {
  const { container } = render(
    <GiftItemImage
      url="https://images-na.ssl-images-amazon.com/images/I/61aaipDiGcL._AC_SL1200_.jpg"
    />
  );
  expect(container).toMatchSnapshot();
});