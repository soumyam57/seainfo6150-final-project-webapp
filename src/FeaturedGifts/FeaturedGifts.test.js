import React from "react";
import { render } from "@testing-library/react";
import FeaturedGifts from "./FeaturedGifts.jsx";
import { BrowserRouter } from 'react-router-dom';

it("renders the FeaturedGifts component correctly", () => {
  const { container } = render(
    <BrowserRouter>  
        <FeaturedGifts/>
    </BrowserRouter> 
  );
  expect(container).toMatchSnapshot();
});
