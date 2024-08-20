import React from "react";
import { render } from "@testing-library/react";
import Orders from "./index";

describe("Orders component", () => {
  test("renders without error", () => {
    const orders = [
      {
        id: "1",
        attributes: {
          status_text: "Pending",
          shipping: 10.0,
          tax: 2.5,
          discount: 5.0,
          total: 17.5,
          number: "",
          order_channel_name: "",
        },
        type: "order",
      },
      {
        id: "2",
        attributes: {
          status_text: "Pending",
          shipping: 10.0,
          tax: 3.5,
          discount: 4.0,
          total: 23.5,
          number: "23",
          order_channel_name: "",
        },
        type: "order",
      },
    ];

    render(<Orders orders={orders} />);
    const { container } = render(<Orders orders={orders} />);
    expect(container).toMatchSnapshot();
  });
});
