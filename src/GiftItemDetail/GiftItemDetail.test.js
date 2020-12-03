import React from "react";
import { render } from "@testing-library/react";
import GiftItemDetail from "./GiftItemDetail.jsx";

it("renders the BookCoverImage component correctly", () => {
  const { container } = render(
        <GiftItemDetail
            category="wedding"
            categoryid="couplerings"
        />
    );
    expect(container).toMatchSnapshot();
  });