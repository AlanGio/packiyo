import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

describe("Header component", () => {
  test("renders without error", () => {
    render(<Header />);
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
