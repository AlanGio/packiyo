import Products from "@/app/components/Products";
import { Box, Button, Typography } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Orders from "@/app/components/Orders";
import ThemeContainer from "@/app/theme/ThemeContainer";
import Link from "next/link";
import { API_URL, requestOptions } from "@/app/utils/config";
import { ProductProps } from "@/app/components/Products/products.props";
import { OrderDetailProps } from "@/app/components/Orders/order.detail.props";

export const getServerSideProps = (async () => {
  // Fetch data from external API

  const productsRes = await fetch(`${API_URL}/products`, requestOptions);
  const products = await productsRes.json();

  const ordersRes = await fetch(`${API_URL}/orders`, requestOptions);
  const orders = await ordersRes.json();

  // Pass data to the page via props
  return { props: { products: products.data, orders: orders.data } };
}) satisfies GetServerSideProps<{
  products: ProductProps[];
  orders: OrderDetailProps[];
}>;

export default function Page({
  products,
  orders,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <ThemeContainer>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Link href={`/order/create`}>
          <Button variant="contained" color="secondary" size="large">
            Create Order
          </Button>
        </Link>
      </Box>

      <Typography variant="h2">Products</Typography>
      <Products products={products} />

      <Typography variant="h2">Orders</Typography>
      <Orders orders={orders} />
    </ThemeContainer>
  );
}
