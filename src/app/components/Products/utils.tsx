import { ProductAttributes } from "./products.props";

interface Column {
  id: keyof ProductAttributes;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: any) => string;
}

export const columns: readonly Column[] = [
  { id: "sku", label: "SKU", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "type", label: "Type", minWidth: 100 },
  { id: "price", label: "Price", minWidth: 100 },
  { id: "value", label: "Value", minWidth: 100 },
  { id: "customs_price", label: "Customs Price", minWidth: 100 },
  { id: "hs_code", label: "HS Code", minWidth: 100 },
  { id: "country_of_origin", label: "Country of Origin", minWidth: 150 },
  { id: "notes", label: "Notes", minWidth: 200 },
  {
    id: "width",
    label: "Width",
    minWidth: 100,
    align: "right",
    format: (value: number) => value.toString(),
  },
  {
    id: "height",
    label: "Height",
    minWidth: 100,
    align: "right",
    format: (value: number) => value.toString(),
  },
  {
    id: "length",
    label: "Length",
    minWidth: 100,
    align: "right",
    format: (value: number) => value.toString(),
  },
  {
    id: "weight",
    label: "Weight",
    minWidth: 100,
    align: "right",
    format: (value: number) => value.toString(),
  },
  { id: "barcode", label: "Barcode", minWidth: 100 },
  { id: "customs_description", label: "Customs Description", minWidth: 200 },
  { id: "tags", label: "Tags", minWidth: 100 },
  {
    id: "inventory_sync",
    label: "Inventory Sync",
    minWidth: 100,
    align: "right",
    format: (value: number) => value.toString(),
  },
  {
    id: "quantity_on_hand",
    label: "Quantity on Hand",
    minWidth: 150,
    align: "right",
    format: (value: number) => value.toString(),
  },
  {
    id: "quantity_allocated",
    label: "Quantity Allocated",
    minWidth: 150,
    align: "right",
    format: (value: number) => value.toString(),
  },
  {
    id: "quantity_available",
    label: "Quantity Available",
    minWidth: 150,
    align: "right",
    format: (value: number) => value.toString(),
  },
  {
    id: "quantity_backordered",
    label: "Quantity Backordered",
    minWidth: 150,
    align: "right",
    format: (value: number) => value.toString(),
  },
  { id: "created_at", label: "Created At", minWidth: 150 },
  { id: "updated_at", label: "Updated At", minWidth: 150 },
];
