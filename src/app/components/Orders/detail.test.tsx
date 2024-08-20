import React from "react";
import { render } from "@testing-library/react";
import OrderDetail from "./detail";

describe("OrderDetail", () => {
  const orderData = {
    attributes: {
      number: "12345",
      status_text: "Pending",
      shipping: 10,
      tax: 2,
      discount: 5,
      total: 100,
      ordered_at: "2022-01-01T00:00:00Z",
      updated_at: "2022-01-02T00:00:00Z",
      packing_note: "Handle with care",
      shipping_method_name: "Standard",
      tags: ["tag1", "tag2"],
    },
    relationships: {
      shipping_contact_information: {
        data: { id: "John Doe" },
      },
      billing_contact_information: {
        data: { id: "Jane Smith" },
      },
      order_items: {
        data: [{ id: "item1" }, { id: "item2" }],
      },
    },
  };

  test("renders order details correctly", () => {
    const { getByText } = render(<OrderDetail orderData={orderData} />);

    expect(getByText("Order Number: 12345")).toMatchSnapshot();
    expect(getByText("Status: Pending")).toMatchSnapshot();
    expect(getByText("Shipping: $10")).toMatchSnapshot();
    expect(getByText("Tax: $2")).toMatchSnapshot();
    expect(getByText("Discount: $5")).toMatchSnapshot();
    expect(getByText("Total: $100")).toMatchSnapshot();
    expect(getByText("Packing Note: Handle with care")).toMatchSnapshot();
    expect(getByText("Shipping Method: Standard")).toMatchSnapshot();
    expect(getByText("Name: John Doe")).toMatchSnapshot();
    expect(getByText("Name: Jane Smith")).toMatchSnapshot();
    expect(getByText("Item ID: item1")).toMatchSnapshot();
    expect(getByText("Item ID: item2")).toMatchSnapshot();
  });

  test("renders 'Order not found' when orderData is null", () => {
    const { getByText } = render(<OrderDetail orderData={null} />);

    expect(getByText("Order not found")).toMatchSnapshot();
  });
});
