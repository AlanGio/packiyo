import { OrderCreateData } from "./orders.props";

export const initialValues: OrderCreateData = {
  type: "orders",
  attributes: {
    number: "",
    order_channel_name: "Manual Order",
    ordered_at: "2024-05-15 12:00:00",
    hold_until: null,
    ship_before: null,
    external_id: 0,
    shipping: 5.99,
    tax: 50,
    discount: 10,
    packing_note: "Smile while packing!",
    shipping_method_name: "SecondDay",
    shipping_method_code: "0006",
    tags: "wooden, priority",
    shipping_contact_information_data: {
      name: "Sarah Johnson",
      company_name: "",
      address: "123 Maple Street",
      address2: "",
      city: "Anytown",
      state: "NY",
      zip: "12345",
      country: "US",
      email: "api@packiyo.com",
      phone: "555-123-4567",
    },
    billing_contact_information_data: {
      name: "Sarah Johnson",
      company_name: "",
      address: "123 Maple Street",
      address2: "",
      city: "Anytown",
      state: "NY",
      zip: "12345",
      country: "US",
      email: "api@packiyo.com",
      phone: "555-123-4567",
    },
    order_item_data: [
      {
        sku: "40224908181550",
        quantity: 10,
        external_id: "your-internal-order-item-id",
        price: 59.99,
      },
    ],
  },
  relationships: {
    customer: {
      data: {
        type: "customers",
        id: "18",
      },
    },
  },
};

export const generateRndId = () => {
  return Math.round(Math.random() * (999999 - 100000) + 100000);
};
