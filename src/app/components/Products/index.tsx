import React from "react";
import { ProductAttributes, ProductProps } from "./products.props";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: keyof ProductAttributes;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: any) => string;
}

const columns: readonly Column[] = [
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

const Products = ({ products }: { products: ProductProps[] }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={product.id}
                  >
                    {columns.map((column) => {
                      const value = product.attributes[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Products;
