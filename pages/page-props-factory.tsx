import { GetServerSideProps } from "next";

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
