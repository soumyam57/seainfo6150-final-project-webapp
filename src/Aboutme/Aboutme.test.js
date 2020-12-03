import React from "react";
import { render } from "@testing-library/react";
import Aboutme from "./Aboutme.jsx";
import { BrowserRouter } from 'react-router-dom';

it("renders the Aboutme component correctly", () => {
  const { container } = render(
    <BrowserRouter>  
        <Aboutme/>
    </BrowserRouter> 
  );
  expect(container).toMatchSnapshot();
});