export interface ProductAttributes {
  sku: string;
  name: string;
  type: string;
  price: string;
  value: string;
  customs_price: string;
  hs_code: string;
  country_of_origin: string;
  notes: string;
  width: number;
  height: number;
  length: number;
  weight: number;
  barcode: string;
  customs_description: string;
  tags: string;
  inventory_sync: number;
  quantity_on_hand: number;
  quantity_allocated: number;
  quantity_available: number;
  quantity_backordered: number;
  created_at: string;
  updated_at: string;
}

interface RelationshipLinks {
  related: string;
  self: string;
}

interface RelationshipData {
  type: string;
  id: string;
}

interface CustomerRelationship {
  links: RelationshipLinks;
  data: RelationshipData;
}

interface BarcodesRelationship {
  links: RelationshipLinks;
  data: any[];
}

interface ProductImagesRelationship {
  links: RelationshipLinks;
  data: any[];
}

interface LocationProductsRelationship {
  links: RelationshipLinks;
}

interface KitsRelationship {
  links: RelationshipLinks;
}

interface ComponentsRelationship {
  links: RelationshipLinks;
}

interface ProductRelationships {
  customer: CustomerRelationship;
  barcodes: BarcodesRelationship;
  product_images: ProductImagesRelationship;
  location_products: LocationProductsRelationship;
  kits: KitsRelationship;
  components: ComponentsRelationship;
}

interface ProductLinks {
  self: string;
}

export interface ProductProps {
  type: string;
  id: string;
  attributes: ProductAttributes;
  relationships: ProductRelationships;
  links: ProductLinks;
}
