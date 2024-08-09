interface OrderAttributes {
  number: string;
  status_text: string;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  order_channel_name: string;
}

export interface OrderData {
  type: string;
  id: string;
  attributes: OrderAttributes;
}

interface OrdersMetaPage {
  currentPage: number;
  from: number;
  lastPage: number;
  perPage: number;
  to: number;
  total: number;
}

interface OrdersMeta {
  page: OrdersMetaPage;
}

interface OrdersJsonApi {
  version: string;
}

interface OrdersLinks {
  first: string;
  last: string;
}

export interface Orders {
  meta: OrdersMeta;
  jsonapi: OrdersJsonApi;
  links: OrdersLinks;
  data: OrderData[];
}

interface ContactInformation {
  name: string;
  company_name: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  email: string;
  phone: string;
}

interface OrderItem {
  sku: string;
  quantity: number;
  external_id: string;
  price: number;
}

interface OrderCreateAttributes {
  number: string;
  order_channel_name: string;
  ordered_at: string;
  hold_until: string | null;
  ship_before: string | null;
  external_id: number;
  shipping: number;
  tax: number;
  discount: number;
  packing_note: string;
  shipping_method_name: string;
  shipping_method_code: string;
  tags: string;
  shipping_contact_information_data: ContactInformation;
  billing_contact_information_data: ContactInformation;
  order_item_data: OrderItem[];
}

export interface OrderCreateData {
  type: string;
  attributes: OrderCreateAttributes;
  relationships: {
    customer: {
      data: {
        type: string;
        id: string;
      };
    };
  };
}
