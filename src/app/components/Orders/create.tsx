import React, { useState } from "react";
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
import { OrderCreateData } from "./orders.props";
import { useRouter } from "next/navigation";
import { generateRndId, initialValues } from "./utils";
import { serviceCall } from "@/app/utils/services";

const OrderCreate: React.FC = () => {
  const router = useRouter();
  const [message, setMessage] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);
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

    serviceCall(
      `/orders`,
      (response) => {
        if (response instanceof Error) {
          setMessage({
            type: "error",
            message: "Order creation failed!",
          });
        } else {
          setMessage({
            type: "success",
            message: "Order created successfully!",
          });
          router.push(`/order/${response.id}`);
        }
      },
      { data: JSON.stringify({ data: orderData }) },
      "post"
    );
  };

  const handleCloseSnackbar = () => {
    setMessage(null);
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
        open={!!message?.message}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={message?.type}
          sx={{ width: "100%" }}
        >
          {message?.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default OrderCreate;
