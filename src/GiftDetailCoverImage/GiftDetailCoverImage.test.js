import React from "react";
import { render } from "@testing-library/react";
import GiftDetailCoverImage from "./GiftDetailCoverImage.jsx";

const imageurl="https://images-na.ssl-images-amazon.com/images/I/51mfwq0NDEL._AC_UX522_.jpg";

it("renders the GiftDetailCoverImage component correctly", () => {
  const { container } = render(
    <GiftDetailCoverImage
        url={imageurl}
    />
    );
  expect(container).toMatchSnapshot();
});
