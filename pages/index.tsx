import Products from "@/app/components/Products";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Link,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { theme } from "@/app/theme/theme";
import Orders from "@/app/components/Orders";

export const getServerSideProps = (async () => {
  // Fetch data from external API
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/vnd.api+json");
  myHeaders.append(
    "Authorization",
    "Bearer 750|JvmCXTBv50yxjltDKQ1qQOgUyx6s5QHpyBr5f87W"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow" as RequestRedirect,
  };

  const productsRes = await fetch(
    "https://staging1.internal1.packiyo.com/api/v1/products",
    requestOptions
  );
  const products: any = await productsRes.json();

  const ordersRes = await fetch(
    "https://staging1.internal1.packiyo.com/api/v1/orders",
    requestOptions
  );
  const orders: any = await ordersRes.json();

  // Pass data to the page via props
  return { props: { products: products.data, orders: orders.data } };
}) satisfies GetServerSideProps<{ products: any; orders: any }>;

export default function Page({
  products,
  orders,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(products, orders);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Packiyo Management
          </Typography>
          <Link href="#" color="inherit" sx={{ ml: 2 }}>
            Home
          </Link>
          <Link href="#" color="inherit" sx={{ ml: 2 }}>
            Products
          </Link>
          <Link href="#" color="inherit" sx={{ ml: 2 }}>
            Orders
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" sx={{ mt: 12 }}>
        <Typography variant="h2">Products</Typography>
        <Products products={products} />

        <hr />
        <Typography variant="h2">Orders</Typography>
        <Orders orders={orders} />
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) => theme.palette.grey[200],
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <Container>
          <Typography variant="body1">
            © 2024 Packiyo. All rights reserved.
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              Terms of Service
            </Link>
            <Link href="#" color="inherit">
              Contact Us
            </Link>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
