import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Link,
  Alert,
  Snackbar,
} from "@mui/material";
import axios from "axios";
import { OrderCreateData } from "./orders.props";
import { redirect, useRouter } from "next/navigation";

const initialValues: OrderCreateData = {
  type: "orders",
  attributes: {
    number: "",
    order_channel_name: "Manual Order",
    ordered_at: "2024-05-15 12:00:00",
    hold_until: null,
    ship_before: null,
    external_id: 0,
    shipping: 5.99,
    tax: 50,
    discount: 10,
    packing_note: "Smile while packing!",
    shipping_method_name: "SecondDay",
    shipping_method_code: "0006",
    tags: "wooden, priority",
    shipping_contact_information_data: {
      name: "Sarah Johnson",
      company_name: "",
      address: "123 Maple Street",
      address2: "",
      city: "Anytown",
      state: "NY",
      zip: "12345",
      country: "US",
      email: "api@packiyo.com",
      phone: "555-123-4567",
    },
    billing_contact_information_data: {
      name: "Sarah Johnson",
      company_name: "",
      address: "123 Maple Street",
      address2: "",
      city: "Anytown",
      state: "NY",
      zip: "12345",
      country: "US",
      email: "api@packiyo.com",
      phone: "555-123-4567",
    },
    order_item_data: [
      {
        sku: "40224908181550",
        quantity: 10,
        external_id: "your-internal-order-item-id",
        price: 59.99,
      },
    ],
  },
  relationships: {
    customer: {
      data: {
        type: "customers",
        id: "18",
      },
    },
  },
};

const generateRndId = () => {
  return Math.round(Math.random() * (999999 - 100000) + 100000);
};

const OrderCreate: React.FC = () => {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [orderData, setOrderData] = useState<OrderCreateData>({
    ...initialValues,
    attributes: {
      ...initialValues.attributes,
      number: generateRndId().toString(),
      external_id: generateRndId(),
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      attributes: {
        ...prevData.attributes,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://staging1.internal1.packiyo.com/api/v1/orders",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer 750|JvmCXTBv50yxjltDKQ1qQOgUyx6s5QHpyBr5f87W",
      },
      data: JSON.stringify({ data: orderData }),
    };

    axios(config)
      .then((response) => {
        setSuccessMessage("Order created successfully!");
        router.push(`/order/${response.data.data.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage(null);
  };

  return (
    <Container>
      <Link href="/">Back</Link>
      <Typography variant="h4" gutterBottom>
        Create Order
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Order Number"
              name="number"
              value={orderData.attributes.number}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              multiline
              rows={3}
              label="Packing Note"
              name="packing_note"
              value={orderData.attributes.packing_note}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Shipping Method Name"
              name="shipping_method_name"
              value={orderData.attributes.shipping_method_name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Shipping Method Code"
              name="shipping_method_code"
              value={orderData.attributes.shipping_method_code}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Tags"
              name="tags"
              value={orderData.attributes.tags}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          {/* Add more fields for shipping and billing contact information as needed */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Create Order
            </Button>
          </Grid>
        </Grid>
      </form>

      <Snackbar
        open={!!successMessage}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default OrderCreate;
