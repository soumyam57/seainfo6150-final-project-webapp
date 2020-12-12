import React from "react";
import { render } from "@testing-library/react";
import Form from "./Form.jsx";

it("renders the Feedback component correctly", () => {
  const { container } = render(<Form />);
  expect(container).toMatchSnapshot();
});