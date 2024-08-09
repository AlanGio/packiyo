import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { OrderDetailProps } from "./order.detail.props";
import Link from "next/link";

const OrderDetail: React.FC<{ orderId: string }> = ({ orderId }) => {
  const [orderData, setOrderData] = useState<OrderDetailProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://staging1.internal1.packiyo.com/api/v1/orders/${orderId}`,
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer 750|JvmCXTBv50yxjltDKQ1qQOgUyx6s5QHpyBr5f87W",
      },
    };

    axios(config)
      .then((response) => {
        setOrderData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order data:", error);
        setLoading(false);
      });
  }, [orderId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!orderData) {
    return <Typography variant="h6">Order not found</Typography>;
  }

  const { attributes, relationships } = orderData;

  return (
    <Container>
      <Link href="/">Back</Link>
      <Typography variant="h4" gutterBottom>
        Order Details
      </Typography>
      <Paper elevation={3} style={{ padding: "16px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">
              Order Number: {attributes.number}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Status: {attributes.status_text}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Shipping: ${attributes.shipping}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Tax: ${attributes.tax}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Discount: ${attributes.discount}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Total: ${attributes.total}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Ordered At: {new Date(attributes.ordered_at).toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Updated At: {new Date(attributes.updated_at).toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Packing Note: {attributes.packing_note}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Shipping Method: {attributes.shipping_method_name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Tags: {attributes.tags}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Shipping Information</Typography>
            <Typography>
              Name: {relationships.shipping_contact_information.data?.id}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Billing Information</Typography>
            <Typography>
              Name: {relationships.billing_contact_information.data?.id}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Order Items</Typography>
            {relationships.order_items.data.map((item) => (
              <Paper
                key={item.id}
                style={{ padding: "8px", marginBottom: "8px" }}
              >
                <Typography>Item ID: {item.id}</Typography>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default OrderDetail;
