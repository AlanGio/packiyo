import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { OrderData } from "./orders.props";

const OrderDetail: React.FC<{ orderId: string }> = ({ orderId }) => {
  const [orderData, setOrderData] = useState<OrderData | null>(null);
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

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Order Details
      </Typography>
      <Paper elevation={3} style={{ padding: "16px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">
              Order Number: {orderData.attributes.number}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Order Channel: {orderData.attributes.order_channel_name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Ordered At:{" "}
              {new Date(orderData.attributes.ordered_at).toLocaleString()}
            </Typography>
          </Grid>
          {/* Add more fields as needed */}
          <Grid item xs={12}>
            <Typography variant="h6">Shipping Information</Typography>
            <Typography>
              Name:{" "}
              {orderData.attributes.shipping_contact_information_data.name}
            </Typography>
            <Typography>
              Address:{" "}
              {orderData.attributes.shipping_contact_information_data.address}
            </Typography>
            {/* Add more shipping details as needed */}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Billing Information</Typography>
            <Typography>
              Name: {orderData.attributes.billing_contact_information_data.name}
            </Typography>
            <Typography>
              Address:{" "}
              {orderData.attributes.billing_contact_information_data.address}
            </Typography>
            {/* Add more billing details as needed */}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Order Items</Typography>
            {orderData.attributes.order_item_data.map((item, index) => (
              <Paper
                key={index}
                style={{ padding: "8px", marginBottom: "8px" }}
              >
                <Typography>SKU: {item.sku}</Typography>
                <Typography>Quantity: {item.quantity}</Typography>
                <Typography>Price: ${item.price}</Typography>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default OrderDetail;
