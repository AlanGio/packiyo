import React from "react";
import { getAllByRole, render } from "@testing-library/react";
import Orders from "./index";

describe("Orders component", () => {
  const orders = [
    {
      id: 1,
      attributes: {
        number: "123",
        status_text: "Pending",
        shipping: 10.0,
        tax: 2.5,
        discount: 5.0,
        total: 17.5,
      },
    },
    {
      id: 2,
      attributes: {
        number: "456",
        status_text: "Completed",
        shipping: 15.0,
        tax: 3.75,
        discount: 7.5,
        total: 26.25,
      },
    },
  ];

  test("renders orders correctly", () => {
    const { getByText } = render(<Orders orders={orders} />);

    orders.forEach((order) => {
      const orderNumber = getByText(order.attributes.number);
      const orderStatus = getByText(`Status: ${order.attributes.status_text}`);
      const orderShipping = getByText(
        `Shipping: $${order.attributes.shipping.toFixed(2)}`
      );
      const orderTax = getByText(`Tax: $${order.attributes.tax.toFixed(2)}`);
      const orderDiscount = getByText(
        `Discount: $${order.attributes.discount.toFixed(2)}`
      );
      const orderTotal = getByText(
        `Total: $${order.attributes.total.toFixed(2)}`
      );

      expect(orderNumber).toMatchSnapshot();
      expect(orderStatus).toMatchSnapshot();
      expect(orderShipping).toMatchSnapshot();
      expect(orderTax).toMatchSnapshot();
      expect(orderDiscount).toMatchSnapshot();
      expect(orderTotal).toMatchSnapshot();
    });
  });
});
