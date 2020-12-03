import React from "react";
import { render } from "@testing-library/react";
import GiftCategories from "./GiftCategories.jsx";
import { BrowserRouter } from 'react-router-dom';

it("renders the GiftCategories component correctly", () => {
  const { container } = render(
    <BrowserRouter>  
        <GiftCategories/>
    </BrowserRouter> 
  );
  expect(container).toMatchSnapshot();
});