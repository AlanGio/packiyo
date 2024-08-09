export interface OrderDetailProps {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: {
    customer: Relationship;
    shipping_method: Relationship;
    shipping_contact_information: Relationship;
    billing_contact_information: Relationship;
    order_channel: Relationship;
    shipping_box: Relationship;
    order_items: {
      links: {
        related: string;
        self: string;
      };
      data: RelationshipData[];
    };
    shipments: {
      links: {
        related: string;
        self: string;
      };
      data: RelationshipData[];
    };
    returns: {
      links: {
        related: string;
        self: string;
      };
      data: RelationshipData[];
    };
  };
  links: {
    self: string;
  };
}

interface RelationshipData {
  type: string;
  id: string;
}

interface Relationship {
  links: {
    related: string;
    self: string;
  };
  data: RelationshipData | null;
}

interface Attributes {
  number: string;
  status_text: string;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  ready_to_ship: number;
  ready_to_pick: number;
  is_wholesale: null | boolean;
  fraud_hold: number;
  address_hold: number;
  payment_hold: number;
  operator_hold: number;
  allow_partial: number;
  ordered_at: string;
  updated_at: string;
  fulfilled_at: null | string;
  cancelled_at: null | string;
  archived_at: null | string;
  hold_until: null | string;
  ship_before: null | string;
  scheduled_delivery: null | string;
  external_id: string;
  packing_note: string;
  shipping_method_name: string;
  shipping_method_code: string;
  tote: string;
  tags: string;
  created_at: string;
}

interface Included {
  type: string;
  id: string;
  attributes: {
    [key: string]: any;
  };
  relationships?: {
    [key: string]: {
      data: RelationshipData;
    };
  };
}
