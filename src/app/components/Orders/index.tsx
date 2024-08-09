import React from "react";
import { Typography, Paper, Grid, Button } from "@mui/material";
import { OrderData } from "./orders.props";
import Link from "next/link";

const Orders = ({ orders }: { orders: OrderData[] }) => {
  return (
    <Grid container spacing={3} sx={{ mb: 20 }}>
      {orders.map((order: OrderData) => (
        <Grid item xs={12} sm={6} key={order.id}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">{order.attributes.number}</Typography>
            <Typography>Status: {order.attributes.status_text}</Typography>
            <Typography>
              Shipping: ${order.attributes.shipping.toFixed(2)}
            </Typography>
            <Typography>Tax: ${order.attributes.tax.toFixed(2)}</Typography>
            <Typography>
              Discount: ${order.attributes.discount.toFixed(2)}
            </Typography>
            <Typography>Total: ${order.attributes.total.toFixed(2)}</Typography>
            <Link href={`/order/${order.id}`}>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                View Order
              </Button>
            </Link>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Orders;
